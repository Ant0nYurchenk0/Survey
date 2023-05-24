using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Dynamic;
using System.Text.RegularExpressions;
using System.Xml.Linq;
using Microsoft.Office.Interop.Excel;
using Syncfusion.XlsIO;
using System;
using System.IO;
using static System.Net.Mime.MediaTypeNames;

namespace Survey
{
  internal class Program
  {
    private static Dictionary<string, SurveyQuestion> questions = new();
    static void Main(string[] args)
    {
      Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("NRAiBiAaIQQuGjN/V0d+Xk9HfVldX2BWfFN0RnNQdV15flRGcC0sT3RfQF5jTHxXd0dnUHtedX1QRQ==");
      using (ExcelEngine excelEngine = new ExcelEngine())
      {
        IApplication application = excelEngine.Excel;
        FileStream inputStream = new FileStream(@"../../../survey.xlsx", FileMode.Open, FileAccess.ReadWrite);
        IWorkbook workbook = application.Workbooks.Open(inputStream);
        FileStream outputStream = new FileStream(@"../../../survey.csv", FileMode.Create, FileAccess.ReadWrite);
        workbook.SaveAs(outputStream, "|");
        inputStream.Close();
        outputStream.Close();
      }

      readData();

      writeData();

    }

    private static void writeData()
    {
      StreamReader r = new StreamReader("..\\..\\..\\survey.json");
      var json = r.ReadToEnd();
      var survey = JsonConvert.DeserializeObject<dynamic>(json);
      foreach (var page in survey.pages)
      {
        var name = (string)page.name;
        if (!string.IsNullOrEmpty(name))
          if (questions.TryGetValue(name, out var _)) initElement(page, name);
        if (DoesPropertyExist(page, "elements")) initElements(page);
      }
      File.WriteAllText("..\\..\\..\\survey_out.json", JsonConvert.SerializeObject(survey, Formatting.Indented));
    }

    private static void initElements(dynamic page)
    {
      foreach (var element in page.elements)
      {
        var name = (string)element.name;
        if (!string.IsNullOrEmpty(name))
          if (questions.TryGetValue(name, out var _)) initElement(element, name);
        if (DoesPropertyExist(element, "elements")) initElements(element);
      }
    }

    private static void initElement(dynamic element, string name)
    {
      if (DoesPropertyExist(element, "title"))
      {
        element.title.Default = questions[name].English.Title;
        element.title.es = questions[name].Spanish.Title;
        element.title.fr = questions[name].French.Title;
        element.title.pt_BR = questions[name].Portuguese.Title;
      }
      if (DoesPropertyExist(element, "description"))
      {
        element.description.Default = questions[name].English.Description;
        element.description.es = questions[name].Spanish.Description;
        element.description.fr = questions[name].French.Description;
        element.description.pt_BR = questions[name].Portuguese.Description;
      }
      if (DoesPropertyExist(element, "choices"))
      {
        var i = 0;
        foreach (var choice in element.choices)
        {
          if (DoesPropertyExist(choice, "value"))
            choice.value = questions[name].English.Options[i];
          if (DoesPropertyExist(choice, "text"))
          {

            choice.text.Default = questions[name].English.Options.Count > i ? questions[name].English.Options[i] : string.Empty;
            choice.text.es = questions[name].Spanish.Options.Count > i ? questions[name].Spanish.Options[i] : string.Empty;
            choice.text.fr = questions[name].French.Options.Count > i ? questions[name].French.Options[i] : string.Empty;
            choice.text.pt_BR = questions[name].Portuguese.Options.Count > i ? questions[name].Portuguese.Options[i] : string.Empty;
          }
          i++;
        }

      }
      if (DoesPropertyExist(element, "otherPlaceholder"))
      {
        element.otherPlaceholder.Default = questions[name].English.OtherPlaceholder;
        element.otherPlaceholder.es = questions[name].Spanish.OtherPlaceholder;
        element.otherPlaceholder.fr = questions[name].French.OtherPlaceholder;
        element.otherPlaceholder.pt_BR = questions[name].Portuguese.OtherPlaceholder;
      }
      if (DoesPropertyExist(element, "otherText"))
      {
        element.otherText.Default = questions[name].English.OtherText;
        element.otherText.es = questions[name].Spanish.OtherText;
        element.otherText.fr = questions[name].French.OtherText;
        element.otherText.pt_BR = questions[name].Portuguese.OtherText;
      }
      if (DoesPropertyExist(element, "placeholder"))
      {
        element.placeholder.Default = questions[name].English.Placeholder;
        element.placeholder.es = questions[name].Spanish.Placeholder;
        element.placeholder.fr = questions[name].French.Placeholder;
        element.placeholder.pt_BR = questions[name].Portuguese.Placeholder;
      }
      if (DoesPropertyExist(element, "validators"))
      {
        element.validators[0].text.Default = questions[name].English.ErrorOver;
        element.validators[0].text.es = questions[name].Spanish.ErrorOver;
        element.validators[0].text.fr = questions[name].French.ErrorOver;
        element.validators[0].text.pt_BR = questions[name].Portuguese.ErrorOver;
        if (element.validators.Count > 1) {
          element.validators[1].text.Default = questions[name].English.ErrorUnder;
          element.validators[1].text.es = questions[name].Spanish.ErrorUnder;
          element.validators[1].text.fr = questions[name].French.ErrorUnder;
          element.validators[1].text.pt_BR = questions[name].Portuguese.ErrorUnder;
        }
      }
    }

    private static void readData()
    {
      StreamReader r = new StreamReader("..\\..\\..\\survey.csv");
      var csv = r.ReadToEnd();
      var questionArray = csv.Split('$');
      var a = 10;
      foreach (var question in questionArray)
      {
        if (question.Trim().Length == 0) continue;
        var cleanQuestion = Regex.Replace(question, @"[\n\|](\"")", "");
        cleanQuestion = Regex.Replace(question, @"(\"")[\n\|]", "");
        var questionParts = cleanQuestion.Split('|');
        var surveyQuestion = new SurveyQuestion();
        surveyQuestion.English = getQuestion(questionParts, 4, 5, 7, 10, 11);
        surveyQuestion.Spanish = getQuestion(questionParts, 13, 14, 15, 16, 17);
        surveyQuestion.French = getQuestion(questionParts, 19, 20, 21, 22, 23);
        surveyQuestion.Portuguese = getQuestion(questionParts, 25, 26, 27, 28, 29);
        questions[questionParts[2].Trim()] = surveyQuestion;
      }
    }
    private static Question getQuestion(string[] questionParts, params int[] indices)
    {
      var question = new Question();
      question.Title = questionParts[indices[0]].Trim();
      question.Description = questionParts[indices[1]].Trim();
      question.Options = Regex.Split(questionParts[indices[2]], @"\s+-\s*")
                              .Select(m => m.Trim())
                              .ToList();
      question.OtherText = MatchRegex(questionParts[indices[3]], GetLabelRegex("OTHER TEXT|OTRO TEXTO|AUTRE TEXTE|OUTRO TEXTO"));
      question.OtherPlaceholder = MatchRegex(questionParts[indices[3]], GetLabelRegex("OTHER PLACEHOLDER|OTRO MARCADOR DE POSICIÓN|AUTRE ESPACE RÉSERVÉ|OUTRO ESPAÇO RESERVADO"));
      question.UnknownOption = MatchRegex(questionParts[indices[3]], GetLabelRegex("UNKNOWN OPTION|OPCIÓN DESCONOCIDA|OPTION INCONNUE|OPÇÃO DESCONHECIDA"));
      question.Placeholder = MatchRegex(questionParts[indices[3]], GetLabelRegex("PLACEHOLDER|MARCADOR DE POSICIÓN|ESPACE R[ÉE]SERVÉ|ESPAÇO RESERVADO"));
      question.Unit = MatchRegex(questionParts[indices[3]], GetLabelRegex("UNIT|UNIDAD|UNITÉ|UNIDADE"));
      question.ErrorOver = MatchRegex(questionParts[indices[4]], GetLabelRegex("ERROR TEXT OVER 100%|TEXTO DE ERROR SUPERIOR AL 100%|TEXTE D'ERREUR SUPÉRIEUR À 100%|TEXTO DE ERRO ACIMA DE 100%"));
      question.ErrorUnder = MatchRegex(questionParts[indices[4]], GetLabelRegex("ERROR TEXT UNDER 100%|TEXTO DE ERROR INFERIOR AL 100%|TEXTE D'ERREUR INFÉRIEUR À 100%|TEXTO DE ERRO ABAIXO DE 100%"));
      return question;
    }
    private static bool DoesPropertyExist(dynamic obj, string name)
    {
      try
      {
        if (obj[name] == null) return false;

      }
      catch 
      {
        return false;
      }
      
      return true;
    }
    private static string MatchRegex(string str, string rgx)
    {
      var regex = new Regex(rgx);
      if (regex.IsMatch(str.ToUpper())) 
      {
        var matches = regex.Matches(str.ToUpper());
        var startIndex = matches[0].Groups[1].Index;
        var endIndex = matches[0].Groups[1].ToString().Length;
        return str.Substring(startIndex, endIndex).Trim();
      }
      return string.Empty;

    }
    private static string GetLabelRegex(string str)
    {
      return $"\\*\\s*(?:{str})\\s*:\\s*((?:[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEFA-Za-z. \\-]| |\\(|\\)|'|[0-9]|%|\\¿|\\?|!|¡)+)";
    }
  }
}