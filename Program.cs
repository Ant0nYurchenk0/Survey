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
        var i = 0;
        foreach (var validator in element.validators)
        {
          if (DoesPropertyExist(validator, "text"))
          {

            validator.text.Default = questions[name].English.Errors.Count > i ? questions[name].English.Errors[i] : string.Empty;
            validator.text.es = questions[name].Spanish.Errors.Count > i ? questions[name].Spanish.Errors[i] : string.Empty;
            validator.text.fr = questions[name].French.Errors.Count > i ? questions[name].French.Errors[i] : string.Empty;
            validator.text.pt_BR = questions[name].Portuguese.Errors.Count > i ? questions[name].Portuguese.Errors[i] : string.Empty;
          }
          i++;        
        }
      }
      if (DoesPropertyExist(element, "maxRateDescription"))
      {
        element.maxRateDescription.Default = questions[name].English.Unit;
        element.maxRateDescription.es = questions[name].Spanish.Unit;
        element.maxRateDescription.fr = questions[name].French.Unit;
        element.maxRateDescription.pt_BR = questions[name].Portuguese.Unit;
      }
      if (DoesPropertyExist(element, "columns"))
      {
        var i = 0;
        foreach (var column in element.columns)
        {
          if (DoesPropertyExist(column, "title"))
          {

            column.title.Default = questions[name].English.Columns.Count > i ? questions[name].English.Columns[i] : string.Empty;
            column.title.es = questions[name].Spanish.Columns.Count > i ? questions[name].Spanish.Columns[i] : string.Empty;
            column.title.fr = questions[name].French.Columns.Count > i ? questions[name].French.Columns[i] : string.Empty;
            column.title.pt_BR = questions[name].Portuguese.Columns.Count > i ? questions[name].Portuguese.Columns[i] : string.Empty;
          }
          i++;
        }
      }
      if (DoesPropertyExist(element, "rows"))
      {
        var i = 0;
        foreach (var row in element.rows)
        {
          if (DoesPropertyExist(row, "text"))
          {

            row.text.Default = questions[name].English.Rows.Count > i ? questions[name].English.Rows[i] : string.Empty;
            row.text.es = questions[name].Spanish.Rows.Count > i ? questions[name].Spanish.Rows[i] : string.Empty;
            row.text.fr = questions[name].French.Rows.Count > i ? questions[name].French.Rows[i] : string.Empty;
            row.text.pt_BR = questions[name].Portuguese.Rows.Count > i ? questions[name].Portuguese.Rows[i] : string.Empty;
          }
          i++;
        }
      }
      if (DoesPropertyExist(element, "addRowText"))
      {
        element.addRowText.Default = questions[name].English.AddRowText;
        element.addRowText.es = questions[name].Spanish.AddRowText;
        element.addRowText.fr = questions[name].French.AddRowText;
        element.addRowText.pt_BR = questions[name].Portuguese.AddRowText;
      }
      if (DoesPropertyExist(element, "removeRowText"))
      {
        element.removeRowText.Default = questions[name].English.RemoveRowText;
        element.removeRowText.es = questions[name].Spanish.RemoveRowText;
        element.removeRowText.fr = questions[name].French.RemoveRowText;
        element.removeRowText.pt_BR = questions[name].Portuguese.RemoveRowText;
      }
      if (DoesPropertyExist(element, "keyDuplicationError"))
      {
        element.keyDuplicationError.Default = questions[name].English.KeyDuplicationError;
        element.keyDuplicationError.es = questions[name].Spanish.KeyDuplicationError;
        element.keyDuplicationError.fr = questions[name].French.KeyDuplicationError;
        element.keyDuplicationError.pt_BR = questions[name].Portuguese.KeyDuplicationError;
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
        var questionParts = question.Split('|');
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
      question.Options = GetListOf(questionParts[indices[2]], "Options|Opciones|Options|Opções");
      question.Rows = GetListOf(questionParts[indices[2]], "Rows|Filas|Rangées|Linhas");
      question.Columns = GetListOf(questionParts[indices[2]], "Columns|Columnas|Colonnes|Colunas");
      question.OtherText = MatchRegex(questionParts[indices[3]], 
        GetLabelRegex("OTHER TEXT|OTRO TEXTO|AUTRE TEXTE|OUTRO TEXTO"));
      question.OtherPlaceholder = MatchRegex(questionParts[indices[3]], 
        GetLabelRegex("OTHER PLACEHOLDER|OTRO MARCADOR DE POSICIÓN|AUTRE ESPACE RÉSERVÉ|OUTRO ESPAÇO RESERVADO"));
      question.UnknownOption = MatchRegex(questionParts[indices[3]], 
        GetLabelRegex("UNKNOWN OPTION|OPCIÓN DESCONOCIDA|OPTION INCONNUE|OPÇÃO DESCONHECIDA"));
      question.Placeholder = MatchRegex(questionParts[indices[3]], 
        GetLabelRegex("PLACEHOLDER|MARCADOR DE POSICIÓN|ESPACE R[ÉE]SERVÉ|ESPAÇO RESERVADO"));
      question.Unit = MatchRegex(questionParts[indices[3]],
        GetLabelRegex("UNIT|UNIDAD|UNITÉ|UNIDADE"));

      question.Automatic = MatchRegex(questionParts[indices[3]],
        GetLabelRegex("AUTOMATIC OPTION|OPCIÓN AUTOMÁTICA|OPTION AUTOMATIQUE|OPÇÃO AUTOMÁTICA"));
      question.AddRowText = MatchRegex(questionParts[indices[3]],
        GetLabelRegex("ADD ROW TEXT|AÑADIR TEXTO DE FILA|AJOUTER UN TEXTE DE LIGNE|ADICIONAR TEXTO DA LINHA"));
      question.RemoveRowText = MatchRegex(questionParts[indices[3]],
        GetLabelRegex("REMOVE ROW TEXT|ELIMINAR EL TEXTO de la FILA|SUPPRIMER LE TEXTE DE LA LIGNE|REMOVER TEXTO DA LINHA"));

      question.TotalDistance = MatchRegex(questionParts[indices[3]],
        GetLabelRegex("TOTAL DISTANCE|DISTANCIA TOTAL|DISTANCE TOTALE|DISTÂNCIA TOTAL"));
      question.CountryPlaceholder = MatchRegex(questionParts[indices[3]],
        GetLabelRegex("COUNTRY PLACEHOLDER TEXT|DISTANCIA TOTAL|TEXTE D'ESPACE RÉSERVÉ AU PAYS|DISTÂNCIA TOTAL"));//spanish and portuguese missing
      question.ValidatorText = MatchRegex(questionParts[indices[3]],
        GetLabelRegex("VALIDATOR TEXT|DISTANCIA TOTAL|TEXTE DU VALIDATEUR|DISTÂNCIA TOTAL"));//spanish and portuguese missing
      question.DistancePlaceholder = MatchRegex(questionParts[indices[3]],
        GetLabelRegex("DISTANCE PLACEHOLDER TEXT|DISTANCIA TOTAL|TEXTE DU VALIDATEUR|DISTÂNCIA TOTAL"));//french and spanish and portuguese missing

      question.Errors.Add(MatchRegex(questionParts[indices[4]], 
        GetLabelRegex("ERROR TEXT OVER 100%|TEXTO DE ERROR SUPERIOR AL 100%|TEXTE D'ERREUR SUPÉRIEUR À 100%|TEXTO DE ERRO ACIMA DE 100%")));
      question.Errors.Add(MatchRegex(questionParts[indices[4]], 
        GetLabelRegex("ERROR TEXT UNDER 100%|TEXTO DE ERROR INFERIOR AL 100%|TEXTE D'ERREUR INFÉRIEUR À 100%|TEXTO DE ERRO ABAIXO DE 100%")));
      
      question.Errors.Add(MatchRegex(questionParts[indices[4]], 
        GetLabelRegex("ERROR TEXT SHORT-HAUL OVER 100%|TEXTO DE ERROR INFERIOR AL 100%|ERREUR « Courte Distance\" SUPÉRIEUR À 100%|TEXTO DE ERRO ABAIXO DE 100%")));
      question.Errors.Add(MatchRegex(questionParts[indices[4]], 
        GetLabelRegex("ERROR TEXT SHORT-HAUL UNDER 100%|TEXTO DE ERROR INFERIOR AL 100%|ERREUR « Courte Distance »  INFÉRIEUR À 100%|TEXTO DE ERRO ABAIXO DE 100%")));
      question.Errors.Add(MatchRegex(questionParts[indices[4]], 
        GetLabelRegex(" ERROR TEXT MEDIUM-HAUL OVER 100%|TEXTO DE ERROR INFERIOR AL 100%|ERREUR « Moyen Courrier\" SUPÉRIEUR À 100%|TEXTO DE ERRO ABAIXO DE 100%")));
      question.Errors.Add(MatchRegex(questionParts[indices[4]], 
        GetLabelRegex("ERROR TEXT MEDIUM-HAUL UNDER 100%|TEXTO DE ERROR INFERIOR AL 100%|ERREUR « Moyen Courrier »  INFÉRIEUR À 100% |TEXTO DE ERRO ABAIXO DE 100%")));
      question.Errors.Add(MatchRegex(questionParts[indices[4]], 
        GetLabelRegex("ERROR TEXT LONG-HAUL OVER 100%|TEXTO DE ERROR INFERIOR AL 100%|ERREUR « longue Courrier\" SUPÉRIEUR À 100%|TEXTO DE ERRO ABAIXO DE 100%")));
      question.Errors.Add(MatchRegex(questionParts[indices[4]], 
        GetLabelRegex("ERROR TEXT LONG-HAUL UNDER 100%|TEXTO DE ERROR INFERIOR AL 100%|ERREUR « longue courrier »  INFÉRIEUR À 100%|TEXTO DE ERRO ABAIXO DE 100%")));
      question.Errors.Add(MatchRegex(questionParts[indices[4]], 
        GetLabelRegex("ERROR TEXT ULTRA-LONG-HAUL OVER 100%|TEXTO DE ERROR INFERIOR AL 100%|ERREUR « très longue courrier\" SUPÉRIEUR À 100%|TEXTO DE ERRO ABAIXO DE 100%")));
      question.Errors.Add(MatchRegex(questionParts[indices[4]], 
        GetLabelRegex("ERROR TEXT ULTRA-LONG-HAUL UNDER 100%|TEXTO DE ERROR INFERIOR AL 100%|ERREUR « très longue courrier »  INFÉRIEUR À 100%|TEXTO DE ERRO ABAIXO DE 100%")));
      
      question.Errors.Add(MatchRegex(questionParts[indices[4]], 
        GetLabelRegex("ERROR TEXT NOT EQUAL TO 100%|TEXTO DE ERROR INFERIOR AL 100%|TEXTE D'ERREUR NON ÉGAL À 100%|ERRO DE TEXTO NÃO IGUAL A 100%"))); // spanish wrong or missing
      question.KeyDuplicationError = (MatchRegex(questionParts[indices[4]], 
        GetLabelRegex("ERROR TEXT DUPLICATION|TEXTO DE ERROR INFERIOR AL 100%|DUPLICATION DE TEXTE D'ERREUR|TERRO DE TEXTO DUPLICIDADE"))); // spanish wrong or missing
      question.Errors.Add(MatchRegex(questionParts[indices[4]], 
        GetLabelRegex("ERROR TEXT TOTAL NOT EQUAL|LE TOTAL DU TEXTE D'ERREUR N'EST PAS ÉGAL|LE TOTAL DU TEXTE D'ERREUR N'EST PAS ÉGAL|ERRO DE TEXTO TOTAL NÃO IGUAL"))); // spanish wrong or missing
      return question;
    }
    private static List<string> GetListOf(string source, string regex)
    {
      return MatchRegex(source, GetListRegex(regex))
                         .Split("-")
                         .Select(s => s.Trim())
                         .Where(s => s.Length > 0)
                         .ToList();
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
      return $"\\*\\s*(?:{str.ToUpper()})\\s*:\\s*((?:[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEFA-Za-z. \\-]| |\\(|\\)|'|[0-9]|%|\\¿|\\?|!|¡|\\[|\\])+)";
    }
    private static string GetListRegex(string str)
    {
      return @"(?:"+str.ToUpper() + @")\s*:*\s*(?:\s*((?:\s*-\s*(?:[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEFA-Za-z. \-]|[0-9]| |\(|\)|\/|\\|\.|\""|-|'|%)+\n*)+))";
    }
  }
}