namespace Survey
{
  internal class SurveyQuestion
  {
    public Question English { get; set; }
    public Question Spanish { get; set; }
    public Question Portuguese { get; set; }
    public Question French { get; set; }
  }
  internal class Question
  {
    public Question() {
      Options = new();
      Rows = new();
      Columns = new();
      Errors = new();
    }
    public string Title { get; set; }
    public string Description { get; set; }
    public List<string> Options { get; set; }
    public List<string> Rows { get; set; }
    public List<string> Columns { get; set; }
    public List<string> Errors { get; set; }
    public string Automatic { get; set; }
    public string AddRowText { get; set; }
    public string RemoveRowText { get; set; }
    public string TotalDistance { get; set; }
    public string CountryPlaceholder { get; set; }
    public string DistancePlaceholder { get; set; }
    public string KeyDuplicationError { get; set; }    
    public string ValidatorText { get; set; }
    public string Unit { get; set; }
    public string Placeholder { get; set; }
    public string UnknownOption { get; set; }
    public string OtherPlaceholder { get; set; }
    public string OtherText { get; set; }
  }
}
