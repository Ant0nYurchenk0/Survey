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
    public string Additional { get; set; }
    public string Error { get; set; }
  }
}
