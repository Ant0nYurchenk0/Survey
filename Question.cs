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
    public string Title { get; set; }
    public string Description { get; set; }
    public List<string> Options { get; set; }
    public string ErrorOver { get; set; }
    public string ErrorUnder { get; set; }
    public string Unit { get; set; }
    public string Placeholder { get; set; }
    public string UnknownOption { get; set; }
    public string OtherPlaceholder { get; set; }
    public string OtherText { get; set; }
  }
}
