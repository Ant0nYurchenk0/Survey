using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Dynamic;
using System.Text.RegularExpressions;
using System.Xml.Linq;

namespace Survey
{
  internal class Program
  {
    private static Dictionary<string, SurveyQuestion> questions = new();
    static void Main(string[] args)
    {
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
    }

    private static void readData()
    {
      StreamReader r = new StreamReader("..\\..\\..\\survey1.csv");
      var json = r.ReadToEnd();
      var questionArray = json.Split('$');
      var a = 10;
      foreach (var question in questionArray)
      {
        if (question.Length == 0) continue;
        var questionParts = question.Split(',');
        var surveyQuestion = new SurveyQuestion();
        surveyQuestion.English = getQuestion(questionParts, 3, 4, 6, 9, 10);
        surveyQuestion.Spanish = getQuestion(questionParts, 12, 13, 14, 15, 16);
        surveyQuestion.French = getQuestion(questionParts, 18, 19, 20, 21, 22);
        surveyQuestion.Portuguese = getQuestion(questionParts, 24, 25, 26, 27, 28);
        questions[questionParts[1]] = surveyQuestion;
      }
    }
    private static Question getQuestion(string[] questionParts, params int[] indices)
    {
      var question = new Question();
      question.Title = questionParts[indices[0]].Replace(';', ',');
      question.Description = questionParts[indices[1]].Replace(';', ',');
      question.Options = Regex.Split(questionParts[indices[2]], @"\s+-\s*")
                              .Select(m => m.Replace(';', ',').Replace("\"", ""))
                              .ToList();
      question.Additional = questionParts[indices[3]].Replace(';', ',');
      question.Error = questionParts[indices[4]].Replace(';', ',');
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

  }
}