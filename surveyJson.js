const surveyJson = {
  title: {
    default: 'Global Employee Emissions Survey: 2022 calendar year',
    es: '',
    fr: '',
    'pt-BR': '',
  },
  description: {
    default: "Let's help Valtech become more sustainable!",
    es: '',
    fr: '',
    'pt-BR': '',
  },
  logoPosition: 'right',
  completedHtml: {
    default: `
      <h3>Thank you so much for your input on this survey.</h3>
      <p>Your time is appreciated by us - and the planet!</p>
      <p>Curious about how you can step up your efforts to reduce our emissions, or have an idea you'd like to share? Get in touch with your local Sustainability Champion, or join the conversation in the <a href="https://teams.microsoft.com/l/team/19%3a9c0f62e17e1e47fcb66e550eaf0062fc%40thread.tacv2/conversations?groupId=f97b959c-751c-4b45-93f8-e15596ffb2c5&tenantId=139f0669-cebb-42df-b9e3-415009ddb690" target="_blank">GL.Sustainability Team</a>.</p>
    `,
    es: `
    `,
    fr: `
    `,
    'pt-BR': `
    `,
  },
  showProgressBar: 'top',
  showPageNumbers: false, // Needs to be disabled when using MarkDown, else it will create a list item from "1.".
  showQuestionNumbers: 'onPage', // Use 'on' to continue question numbering on next pages.
  textUpdateMode: 'onBlur', // Use 'onTyping' to update the value of text questions, "text" and "comment", on every key press.
  checkErrorsMode: 'onValueChanged',
  questionErrorLocation: 'bottom',
  widthMode: 'responsive',
  sendResultOnPageNext: true,
  firstPageIsStarted: true,
  startSurveyText: {
    default: 'Take the survey',
    es: 'Tomar la encuesta',
    fr: "Participer à l'enquête",
    'pt-BR': 'Faça a pesquisa',
  },
  pages: [
    {
      name: 'introduction',
      elements: [
        {
          type: 'html',
          html: {
            default: `
              <h2>Hello — good to see you here!</h2>
              <p>We’re excited that you’re playing your part in our Global Net Zero programme. By completing this survey on your energy usage and travel practices last year, you’re helping us gather data on Valtech's global emissions footprint looking back at 2022.</p>
              <p>It should only take 15–30 minutes!</p>
              <h4>You will need to provide:</h4>
              <ul>
                <li>If possible, some basic information about your energy contract and supplier (e.g. name of supplier; whether you're on a renewable energy contract).</li>
                <li>The location(s) of your base Valtech office in 2022 (if you had one).</li>
                <li>Details about your commute in 2022.</li>
                <li>Details about your business travel in 2022 (it may be helpful to look back at expenses claims or your travel bookings to remind yourself).</li>
              </ul>
              <h4>To note:</h4>
              <ul>
                <li>The survey is completely anonymous. Please make sure you don't inadvertently identify yourself or others by mentioning any names or other personally identifiable information when completing it.</li>
                <li>You don't have to complete this survey if you don't want to, but the more people who complete it, the more accurate a picture we will have of our emissions.</li>
                <li>Questions marked with a red asterisk (*) require responses.</li>
                <li>Answers to the survey will be stored securely for a period of [9 months]. After this time, they will be deleted but retained in Excel and / or Power BI for analysis and emissions accounting purposes.</li>
                <li>You can only take the survey once. If you submit it accidentally, please contact your Sustainability Champion.</li>
                <li>If you have any general questions about the survey or this project, please join the <a href="https://teams.microsoft.com/l/team/19%3a9c0f62e17e1e47fcb66e550eaf0062fc%40thread.tacv2/conversations?groupId=f97b959c-751c-4b45-93f8-e15596ffb2c5&tenantId=139f0669-cebb-42df-b9e3-415009ddb690" target="_blank">GL.Sustainability channel</a> and post in the chat – it may be useful for others with similar questions. Alternatively, contact your entity's Sustainability Champion or our Global Sustainability Director: <a href="mailto:kirstin.howard@valtech.com">kirstin.howard@valtech.com</a>.</li>
              </ul>
              <p>Thank you - we really appreciate your input!</p>
            `,
            es: `
              <h2>Hola, ¡qué bueno verte por aquí!</h2>
              <p></p>
              <p></p>
              <h4></h4>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <h4></h4>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <p></p>
            `,
            fr: `
              <h2>Bonjour - content de vous voir ici !</h2>
              <p></p>
              <p></p>
              <h4></h4>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <h4></h4>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <p></p>
            `,
            'pt-BR': `
              <h2>Olá - bom ver você aqui!</h2>
              <p></p>
              <p></p>
              <h4></h4>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <h4></h4>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <p></p>
            `,
          },
        },
        {
          type: 'html',
          html: {
            default: `
              <h4>The small print:</h4>
              <p><small>We’re collaborating with an external consultancy, Avon Energy Partners (AEP), on this work. We are not gathering any personally identifiable information in this survey. For privacy reasons, be careful not to identify yourself unintentionally, or reference any clients or colleagues by name in your responses to the survey.</small></p>
            `,
            es: `
              <h4></h4>
              <p></p>
            `,
            fr: `
              <h4></h4>
              <p></p>
            `,
            'pt-BR': `
              <h4></h4>
              <p></p>
            `,
          },
        },
      ],
    },
    {
      name: 'valtech-employment-section',
      title: {
        default: 'Valtech employment',
        es: '',
        fr: '',
        'pt-BR': '',
      },
      description: {
        default:
          "Firstly, we're going to ask you about your working patterns and location in 2022. These are key inputs to emissions calculations!",
        es: '',
        fr: '',
        'pt-BR': '',
      },
      elements: [
        {
          type: 'panel',
          name: 'employment_start-date-group',
          elements: [
            {
              type: 'radiogroup',
              name: 'employment_start-date-year',
              title: {
                default: 'When did you start working at Valtech?',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              description: {
                default:
                  'If your company was acquired by Valtech, please answer according to when you started working at your original company.',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              isRequired: true,
              choices: [
                {
                  value: 'Before 2022',
                  text: {
                    default: 'Before 2022',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  value: 'During 2022',
                  text: {
                    default: 'During 2022',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  value: 'During 2023',
                  text: {
                    default: 'During 2023',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
              ],
            },
            {
              type: 'dropdown',
              name: 'employment_start-date-month',
              visible: false,
              visibleIf: '{employment_start-date-year} = "During 2022"',
              title: {
                default: 'In which month did you start working at Valtech in that year?',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              isRequired: true,
              choicesByUrl: {
                url: 'choices/months.json',
                valueName: 'id',
                titleName: 'title',
              },
            },
          ],
        },
        {
          type: 'panel',
          name: 'employment_base-office-group',
          visibleIf: '{employment_start-date-year} != "During 2023"',
          elements: [
            {
              type: 'boolean',
              name: 'employment_base-office-moved',
              title: {
                default: 'Did you move your base / normal Valtech office in 2022?',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              description: {
                default:
                  'By "base / normal office", we mean the Valtech office you officially formed a part of in 2022. This may or may not have been your closest office, geographically, but it should be the main Valtech office you went to in 2022 if / when you commuted.\n\nIf you don\'t have a base office, please select "No".',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              defaultValue: 'false',
              isRequired: true,
            },
            {
              type: 'dropdown',
              name: 'employment_base-office-location',
              title: {
                default: 'Which was your base / normal Valtech office in 2022?',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              description: {
                default:
                  'If your contract shows that you are based 100% at home, please select "I don\'t have a base office"',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              visibleIf: '{employment_base-office-moved} = false',
              isRequired: true,
              choicesByUrl: {
                url: 'choices/offices.json',
                valueName: 'id',
                titleName: 'title',
              },
              showOtherItem: true,
              otherPlaceholder: {
                default: 'Different office',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              otherText: {
                default: 'Other (please specify)',
                es: '',
                fr: '',
                'pt-BR': '',
              },
            },
            {
              type: 'panel',
              visibleIf: '{employment_base-office-moved} = true',
              elements: [
                {
                  type: 'dropdown',
                  name: 'employment_base-office-location-original',
                  title: {
                    default: 'Which was the base / normal Valtech office you had at the start of 2022?',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  isRequired: true,
                  choicesByUrl: {
                    url: 'choices/offices.json',
                    valueName: 'id',
                    titleName: 'title',
                  },
                  showOtherItem: true,
                  otherPlaceholder: {
                    default: 'Different office',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  otherText: {
                    default: 'Other (please specify)',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  type: 'dropdown',
                  name: 'employment_base-office-location-new',
                  title: {
                    default: 'Which was the base / normal Valtech office you moved to during the course of 2022?',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  description: {
                    default:
                      'If you moved offices more than once in 2022, please select the office you ended the year in.',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  isRequired: true,
                  choicesByUrl: {
                    url: 'choices/offices.json',
                    valueName: 'id',
                    titleName: 'title',
                  },
                  showOtherItem: true,
                  otherPlaceholder: {
                    default: 'Different office',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  otherText: {
                    default: 'Other (please specify)',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
              ],
            },
            {
              type: 'dropdown',
              name: 'employment_business-unit',
              title: {
                default: 'Which Valtech business unit / service line / team do you work for?',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              description: {
                default:
                  'This is the team you work for, day-to-day, irrespective of where you live. For example, you might live in Germany but work for Valtech France. Please look at the whole list before answering.',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              isRequired: true,
              choicesByUrl: {
                url: 'choices/business-units.json',
                valueName: 'id',
                titleName: 'title',
              },
              placeholder: {
                default: 'Select your business unit...',
                es: '',
                fr: '',
                'pt-BR': '',
              },
            },
            {
              type: 'dropdown',
              name: 'employment_home-country',
              title: {
                default: 'Which country did you live in, in 2022?',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              description: {
                default:
                  'This will help us to determine the emission intensity of your local grid. If you split your working time between houses in different areas / countries, or moved area / country during 2022, please answer according to the location in which you spent the majority of the year.',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              isRequired: true,
              choicesByUrl: {
                url: 'choices/countries-for-regions.json',
                valueName: 'id',
                titleName: 'title',
              },
              placeholder: {
                default: 'Select your country...',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              showOtherItem: true,
              otherPlaceholder: {
                default: 'Different country',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              otherText: {
                default: 'Other (please specify)',
                es: '',
                fr: '',
                'pt-BR': '',
              },
            },
            {
              type: 'dropdown',
              name: 'employment_home-region',
              visible: false,
              visibleIf: '{employment_home-country} != "" && {employment_home-country} != "other"',
              title: {
                default: 'Which province / state / county / region did you live in in 2022, within your country?',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              description: {
                default:
                  'This helps us calculate your emissions with greater accuracy, as energy mixes can vary significantly between areas of a country. If you split your working time between houses in different areas / countries, or moved area / country during 2022, please answer according to the location in which you spent the majority of the year.',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              isRequired: true,
              choicesByUrl: {
                url: 'choices/regions-{employment_home-country}.json',
                valueName: 'id',
                titleName: 'title',
              },
              placeholder: {
                default: 'Select your region...',
                es: '',
                fr: '',
                'pt-BR': '',
              },
            },
          ],
        },
        {
          type: 'rating',
          name: 'employment_working-days-per-week',
          visibleIf: '{employment_start-date-year} != "During 2023"',
          title: {
            default: 'In 2022, on average how many days did you work per week, in a typical week?',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          description: {
            default:
              "Please **don't** factor in any significant periods of time off work here (e.g. on sick leave). Just give your standard working pattern. If your working pattern changed during 2022, please just give your best estimate as to the average number of days you worked per week that year.",
            es: '',
            fr: '',
            'pt-BR': '',
          },
          isRequired: true,
          rateMin: 0.5,
          rateMax: 5,
          rateStep: 0.5,
          maxRateDescription: {
            default: 'days per week',
            es: '',
            fr: '',
            'pt-BR': '',
          },
        },
        {
          type: 'rating',
          name: 'employment_working-hours-per-day',
          visibleIf: '{employment_start-date-year} != "During 2023"',
          title: {
            default: 'On an average working day in 2022, how many hours did you work?',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          description: {
            default:
              'Please estimate the number of hours you worked on a normal working day. If your working pattern changed substantially during the year (e.g. you went from working 8 hours each day for the first half of 2022 to 4 hours each day for the second half of 2022), please do your best to work out a rough average (in this example, it would be 6 hours a day).',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          isRequired: true,
          rateMax: 12,
          maxRateDescription: {
            default: 'hours per day',
            es: '',
            fr: '',
            'pt-BR': '',
          },
        },
        {
          type: 'panel',
          name: 'employment_time-off-group',
          visibleIf: '{employment_start-date-year} != "During 2023"',
          elements: [
            {
              type: 'boolean',
              name: 'employment_time-off',
              title: {
                default:
                  'Did you take a significant length of time off work (totalling 1 month or more) in 2022, that did not form part of your annual leave? ',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              description: {
                default:
                  "This might have been for maternity / paternity / shared parental leave, sick leave, sabbatical etc. We're asking this because we're trying to understand the overall picture of emissions generated when working from home. Significant periods of absence need to be deducted from our total individual emissions. \n\nPlease account for any substantial time cumulatively (e.g. you took 3 weeks in January and 2 weeks in June = 5 weeks total, which you'd round down to 1 month, or you took 6 months in one block).",
                es: '',
                fr: '',
                'pt-BR': '',
              },
              isRequired: true,
            },
            {
              type: 'rating',
              name: 'employment_time-off-months',
              visible: false,
              visibleIf: '{employment_time-off} = true',
              title: {
                default: 'How many months did you take off work in total in 2022, *not* including your annual leave?',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              description: {
                default: 'Please estimate this to the nearest whole month.',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              isRequired: true,
              rateMax: 12,
              maxRateDescription: {
                default: 'months',
                es: '',
                fr: '',
                'pt-BR': '',
              },
            },
          ],
        },
        {
          type: 'matrixdropdown',
          name: 'employment_working-pattern-split',
          visibleIf: '{employment_start-date-year} != "During 2023"',
          title: {
            default:
              'Thinking about only the days you *did* work in 2022, how did you split your working time between these activities?',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          description: {
            default:
              'The total must sum to 100%. Please round up to the nearest 5%. For example, even if you only took one flight for business in 2022, please put 5% against business travel.',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          isRequired: true,
          validators: [
            {
              type: 'expression',
              text: {
                default: 'Total share can not exceed 100%!',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              expression:
                '{employment_working-pattern-split.home.sharePercentage} + {employment_working-pattern-split.baseOffice.sharePercentage} + {employment_working-pattern-split.otherOffice.sharePercentage} + {employment_working-pattern-split.client.sharePercentage} + {employment_working-pattern-split.businessTravel.sharePercentage} <= 100',
            },
            {
              type: 'expression',
              text: {
                default: 'Total share should be 100%!',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              expression:
                '{employment_working-pattern-split.home.sharePercentage} + {employment_working-pattern-split.baseOffice.sharePercentage} + {employment_working-pattern-split.otherOffice.sharePercentage} + {employment_working-pattern-split.client.sharePercentage} + {employment_working-pattern-split.businessTravel.sharePercentage} > 99',
            },
          ],
          columns: [
            {
              name: 'sharePercentage',
              title: {
                default: 'Percentage split',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              cellType: 'dropdown',
              totalType: 'sum',
              totalFormat: {
                default: 'Total {0}%',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              totalDisplayStyle: 'decimal',
              choicesByUrl: {
                url: 'choices/percentages-step-5.json',
                valueName: 'id',
                titleName: 'title',
              },
            },
          ],
          rows: [
            {
              value: 'home',
              text: {
                default: 'Working from home',
                es: '',
                fr: '',
                'pt-BR': '',
              },
            },
            {
              value: 'baseOffice',
              text: {
                default: 'Working from your base Valtech office',
                es: '',
                fr: '',
                'pt-BR': '',
              },
            },
            {
              value: 'otherOffice',
              text: {
                default: 'Working from a different Valtech office (not your base / normal office)',
                es: '',
                fr: '',
                'pt-BR': '',
              },
            },
            {
              value: 'client',
              text: {
                default: 'Working from a client office as part of your standard working pattern',
                es: '',
                fr: '',
                'pt-BR': '',
              },
            },
            {
              value: 'businessTravel',
              text: {
                default: 'Travelling on business (e.g. to an event)',
                es: '',
                fr: '',
                'pt-BR': '',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'working-from-home-section',
      title: {
        default: 'Working from home',
        es: '',
        fr: '',
        'pt-BR': '',
      },
      description: {
        default: "We're now going to ask you a bit about your working from home patterns in 2022.",
        es: '',
        fr: '',
        'pt-BR': '',
      },
      visibleIf: '{employment_working-pattern-split.home.sharePercentage} > 0',
      elements: [
        {
          type: 'dropdown',
          name: 'wfh-emissions_home-type',
          title: {
            default: 'What type of home do you live in?',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          description: {
            default:
              'If you moved home in 2022, please tell us about the home you were in at the end of the year. If you split your time between more than one home, please tell us about the one you spent the most time in, in 2022.',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          isRequired: true,
          choicesByUrl: {
            url: 'choices/home-types.json',
            valueName: 'id',
            titleName: 'title',
          },
          showOtherItem: true,
          otherPlaceholder: {
            default: 'Different home',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          otherText: {
            default: 'Other (please specify)',
            es: '',
            fr: '',
            'pt-BR': '',
          },
        },
        {
          type: 'rating',
          name: 'wfh-emissions_people-working-from-home',
          title: {
            default: 'In 2022, on average how many people tended to work from your home each day (*including* you)?',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          isRequired: true,
          rateValues: [
            '1',
            '2',
            '3',
            '4',
            {
              value: '5',
              text: '5+',
            },
          ],
          rateMax: 5,
          maxRateDescription: {
            default: 'person(s)',
            es: '',
            fr: '',
            'pt-BR': '',
          },
        },
        {
          type: 'text',
          name: 'wfh-emissions_electricity-supplier-name',
          title: {
            default: 'What is the name of the current electricity supplier for your home?',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          description: {
            default:
              "Please let us know the name of the company or state provider that supplies you with your home electricity. You should be able to find this on your electricity bill. If you don't know or don't want to say, please leave this blank. If you're not connected to mains electricity at all, please type \"off grid\".",
            es: '',
            fr: '',
            'pt-BR': '',
          },
        },
        {
          type: 'panel',
          name: 'wfh-emissions_electricity-supplier-renewable-group',
          title: {
            default: "We're now going to ask you about whether your electricity supply is renewable.",
            es: '',
            fr: '',
            'pt-BR': '',
          },
          description: {
            default:
              'Renewable energy is energy produced from sources like the sun and wind that are naturally replenished and do not run out.',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          elements: [
            {
              type: 'radiogroup',
              name: 'wfh-emissions_electricity-supplier-renewable',
              title: {
                default: 'Is the electricity you receive from your electricity supplier certified 100% renewable?',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              description: {
                default:
                  'If you have an electricity bill, check to see whether you\'re on a renewable electricity (or "green") contract. Some suppliers may **only** provide renewable electricity while others offer specific contracts which are based on renewable electricity. If you don\'t know, please say "no"',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              isRequired: true,
              choices: [
                {
                  value: 'yes',
                  text: {
                    default: 'Yes',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  value: 'no',
                  text: {
                    default: 'No',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  value: 'unknown',
                  text: {
                    default: "I don't know",
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
              ],
            },
            {
              type: 'panel',
              name: 'wfh-emissions_electricity-supplier-changed',
              visible: false,
              visibleIf: '{wfh-emissions_electricity-supplier-renewable} = "yes"',
              elements: [
                {
                  type: 'radiogroup',
                  name: 'wfh-emissions_electricity-supplier-changed-to-renewable',
                  title: {
                    default:
                      'Did you change your electricity supplier or contract to this renewable ("green energy") option within the 2022 calendar year?',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  description: {
                    default:
                      'If you swapped between two or more 100% renewable energy contracts / providers within 2022, please select "no", as the emissions will not change.',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  isRequired: true,
                  choices: [
                    {
                      value: 'yes',
                      text: {
                        default:
                          'Yes, I started on my renewable electricity contract / supplier **within** the 2022 calendar year.',
                        es: '',
                        fr: '',
                        'pt-BR': '',
                      },
                    },
                    {
                      value: 'no',
                      text: {
                        default: 'No, I started on my renewable electricity contract / supplier **before** 2022.',
                        es: '',
                        fr: '',
                        'pt-BR': '',
                      },
                    },
                  ],
                },
                {
                  type: 'dropdown',
                  name: 'wfh-emissions_electricity-supplier-changed-to-renewable-in-month',
                  visibleIf: '{wfh-emissions_electricity-supplier-changed-to-renewable} = "yes"',
                  title: {
                    default: 'In which month of 2022 did you switch to a renewable electricity supplier / contract?',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  isRequired: true,
                  choicesByUrl: {
                    url: 'choices/months.json',
                    valueName: 'id',
                    titleName: 'title',
                  },
                },
              ],
            },
          ],
        },
        {
          type: 'panel',
          name: 'wfh-emissions_electricity-generation-group',
          title: {
            default: "We're now going to ask you about whether you generate any of your own electricity at home.",
            es: '',
            fr: '',
            'pt-BR': '',
          },
          elements: [
            {
              type: 'boolean',
              name: 'wfh-emissions_electricity-generation',
              title: {
                default: 'Did you generate any of your own electricity at home in 2022?',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              description: {
                default:
                  'This means any electricity generated at your home / building. E.g. solar or a diesel generator. This is  separate from your energy supply from a provider (the grid).',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              isRequired: true,
            },
            {
              type: 'checkbox',
              name: 'wfh-emissions_electricity-generation-types',
              visible: false,
              visibleIf: '{wfh-emissions_electricity-generation} = true',
              title: {
                default: 'Which options best describe how you generate electricity from your home or building?',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              description: {
                default:
                  'Select the options that best describe how you generate your electricity (both renewable and non-renewable). If "other", please describe your generation method. Note: we also need to know about any back-up generators used occasionally over the course of the year.',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              isRequired: true,
              choicesByUrl: {
                url: 'choices/electricity-generation-types.json',
                valueName: 'id',
                titleName: 'title',
              },
              colCount: 4,
              showOtherItem: true,
              otherPlaceholder: {
                default: 'Different electricity generation type',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              otherText: {
                default: 'Other (please specify)',
                es: '',
                fr: '',
                'pt-BR': '',
              },
            },
            {
              type: 'matrixdropdown',
              name: 'wfh-emissions_electricity-generation-overview',
              visible: false,
              visibleIf: '{wfh-emissions_electricity-generation} = true',
              title: {
                default:
                  'How was your electricity usage split over electricity supplied from the grid, electricity generated from renewable and non-renewable sources?',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              description: {
                default:
                  'Estimate as best you can the split of electricity used over 2022. Ensure it adds up to 100%. "Renewables" refers to electricity generated from solar, wind, biomass, and water."Non-renewables" refers to electricity generated from fossil fuels.',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              isRequired: true,
              validators: [
                {
                  type: 'expression',
                  text: {
                    default: 'Total share can not exceed 100%!',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  expression:
                    '{wfh-emissions_electricity-generation-overview.gridSupplier.sharePercentage} + {wfh-emissions_electricity-generation-overview.homeRenewables.sharePercentage} + {wfh-emissions_electricity-generation-overview.homeNonRenewables.sharePercentage} <= 100',
                },
                {
                  type: 'expression',
                  text: {
                    default: 'Total share should be 100%!',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  expression:
                    '{wfh-emissions_electricity-generation-overview.gridSupplier.sharePercentage} + {wfh-emissions_electricity-generation-overview.homeRenewables.sharePercentage} + {wfh-emissions_electricity-generation-overview.homeNonRenewables.sharePercentage} > 99',
                },
              ],
              columns: [
                {
                  name: 'sharePercentage',
                  title: {
                    default: 'Percentage split',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  cellType: 'dropdown',
                  totalType: 'sum',
                  totalFormat: {
                    default: 'Total {0}%',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  totalDisplayStyle: 'decimal',
                  choicesByUrl: {
                    url: 'choices/percentages-step-5.json',
                    valueName: 'id',
                    titleName: 'title',
                  },
                },
              ],
              rows: [
                {
                  value: 'gridSupplier',
                  text: {
                    default: 'Electricity from a supplier (via the grid)',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  value: 'homeRenewables',
                  text: {
                    default: 'Electricity generated from renewables at your home',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  value: 'homeNonRenewables',
                  text: {
                    default: 'Electricity generated from non-renewables at your home',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
              ],
            },
          ],
        },
        {
          type: 'panel',
          name: 'wfh-emissions_home-heating-group',
          title: {
            default: "We're now going to ask you about if and how you *heat* your home.",
            es: '',
            fr: '',
            'pt-BR': '',
          },
          elements: [
            {
              type: 'boolean',
              name: 'wfh-emissions_home-heating',
              title: {
                default:
                  'Do you ever use any source of heat in the room you usually work in at home, during working hours?',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              description: {
                default:
                  'This includes **any** source of heat. For example, you might use central heating or district heating. Or you may use something smaller-scale such as infrared panels or an electric blanket / throw that goes on your knees.',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              isRequired: true,
            },
            {
              type: 'checkbox',
              name: 'wfh-emissions_home-heating-sources',
              visible: false,
              visibleIf: '{wfh-emissions_home-heating} = true',
              title: {
                default:
                  'Which heat sources best describe how you heat the room in your home that you usually work from?',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              isRequired: true,
              choicesByUrl: {
                url: 'choices/home-heating-sources.json',
                valueName: 'id',
                titleName: 'title',
              },
              colCount: 4,
              showOtherItem: true,
              otherPlaceholder: {
                default: 'Different heating source',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              otherText: {
                default: 'Other (please specify)',
                es: '',
                fr: '',
                'pt-BR': '',
              },
            },
            {
              type: 'panel',
              name: 'wfh-emissions_home-heating-sources-during-months-of-year-group',
              visible: false,
              visibleIf: '{wfh-emissions_home-heating} = true',
              elements: [
                {
                  type: 'html',
                  name: 'wfh-emissions_home-heating-sources-during-months-of-year-explanation',
                  html: {
                    default: `
                      <br/>
                      <p>Select all the heating sources you use in the room you usually work in. Then specify how many hours <em>of the working day</em> you use each heat source for on average within each month.</p>
                      <p>E.g. if your gas furnace is typically on for 4 hours of your working day from Dec-Jan, select "gas furnace" and "4" in December and January in the question below. If you also use an electric throw for 2 hours of your working day in Jan, select "electric blanket / throw" and "2" in January.</p>
                      <h4>Note:</h4>
                      <ul>
                        <li>If your usage or working room varies, please give your best estimate.</li>
                        <li>You can add as many sources as applicable.</li>
                        <li>If your heating is controlled automatically (e.g. "always-on" thermostat / centrally controlled system), select "auto" in the months your system is on.</li>
                      </ul>
                    `,
                    es: `
                      <br/>
                      <p></p>
                      <p></p>
                      <h4></h4>
                      <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    `,
                    fr: `
                      <br/>
                      <p></p>
                      <p></p>
                      <h4></h4>
                      <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    `,
                    'pt-BR': `
                      <br/>
                      <p></p>
                      <p></p>
                      <h4></h4>
                      <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    `,
                  },
                },
                {
                  type: 'matrixdynamic',
                  name: 'wfh-emissions_home-heating-sources-during-months-of-year-gas',
                  visible: false,
                  visibleIf: '{wfh-emissions_home-heating-sources} contains "Gas (natural gas, propane, LPG)"',
                  title: {
                    default: 'Tell us about the gas heating sources you use *in the room you usually work in at home*.',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  description: {
                    default:
                      'Add all applicable heating sources and the number of hours you typically use them for *during a working day* in each month.',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  isRequired: true,
                  verticalAlign: 'top',
                  columns: [
                    {
                      name: 'source',
                      title: {
                        default: 'Heating source',
                        es: '',
                        fr: '',
                        'pt-BR': '',
                      },
                      cellType: 'dropdown',
                      choicesByUrl: {
                        url: 'choices/home-heating-sources-gas.json',
                        valueName: 'id',
                        titleName: 'title',
                      },
                      allowClear: false,
                    },
                    {
                      name: 'January',
                      title: {
                        default: 'January',
                        es: 'Enero',
                        fr: 'Janvier',
                        'pt-BR': 'Janeiro',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'February',
                      title: {
                        default: 'February',
                        es: 'Febrero',
                        fr: 'Février',
                        'pt-BR': 'Fevereiro',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'March',
                      title: {
                        default: 'March',
                        es: 'Marzo',
                        fr: 'Mars',
                        'pt-BR': 'Marchar',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'April',
                      title: {
                        default: 'April',
                        es: 'Abril',
                        fr: 'Avril',
                        'pt-BR': 'Abril',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'May',
                      title: {
                        default: 'May',
                        es: 'Puede',
                        fr: 'Peut',
                        'pt-BR': 'Poderia',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'June',
                      title: {
                        default: 'June',
                        es: 'Junio',
                        fr: 'Juin',
                        'pt-BR': 'Junho',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'July',
                      title: {
                        default: 'July',
                        es: 'Julio',
                        fr: 'Juillet',
                        'pt-BR': 'Julho',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'August',
                      title: {
                        default: 'August',
                        es: 'Agosto',
                        fr: 'Août',
                        'pt-BR': 'Agosto',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'September',
                      title: {
                        default: 'September',
                        es: 'Septiembre',
                        fr: 'Septembre',
                        'pt-BR': 'Setembro',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'October',
                      title: {
                        default: 'October',
                        es: 'Octubre',
                        fr: 'Octobre',
                        'pt-BR': 'Outubro',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'November',
                      title: {
                        default: 'November',
                        es: 'Noviembre',
                        fr: 'Novembre',
                        'pt-BR': 'Novembro',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'December',
                      title: {
                        default: 'December',
                        es: 'Diciembre',
                        fr: 'Décembre',
                        'pt-BR': 'Dezembro',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                  ],
                  choices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'Auto'],
                  rowCount: 1,
                  minRowCount: 1,
                  maxRowCount: 10,
                  addRowText: {
                    default: 'Add heating source',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  removeRowText: {
                    default: 'Remove heating source',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  type: 'matrixdynamic',
                  name: 'wfh-emissions_home-heating-sources-during-months-of-year-oil',
                  visible: false,
                  visibleIf: '{wfh-emissions_home-heating-sources} contains "Oil (diesel, kerosene, heating oil)"',
                  title: {
                    default:
                      'Tell us more about the oil heating sources you use *in the room you usually work in at home*.',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  description: {
                    default:
                      'Add all applicable heating sources and the number of hours you typically use them for *during a working day* in each month. ',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  isRequired: true,
                  verticalAlign: 'top',
                  columns: [
                    {
                      name: 'source',
                      title: {
                        default: 'Heating source',
                        es: '',
                        fr: '',
                        'pt-BR': '',
                      },
                      cellType: 'dropdown',
                      choicesByUrl: {
                        url: 'choices/home-heating-sources-oil.json',
                        valueName: 'id',
                        titleName: 'title',
                      },
                      allowClear: false,
                    },
                    {
                      name: 'January',
                      title: {
                        default: 'January',
                        es: 'Enero',
                        fr: 'Janvier',
                        'pt-BR': 'Janeiro',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'February',
                      title: {
                        default: 'February',
                        es: 'Febrero',
                        fr: 'Février',
                        'pt-BR': 'Fevereiro',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'March',
                      title: {
                        default: 'March',
                        es: 'Marzo',
                        fr: 'Mars',
                        'pt-BR': 'Marchar',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'April',
                      title: {
                        default: 'April',
                        es: 'Abril',
                        fr: 'Avril',
                        'pt-BR': 'Abril',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'May',
                      title: {
                        default: 'May',
                        es: 'Puede',
                        fr: 'Peut',
                        'pt-BR': 'Poderia',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'June',
                      title: {
                        default: 'June',
                        es: 'Junio',
                        fr: 'Juin',
                        'pt-BR': 'Junho',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'July',
                      title: {
                        default: 'July',
                        es: 'Julio',
                        fr: 'Juillet',
                        'pt-BR': 'Julho',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'August',
                      title: {
                        default: 'August',
                        es: 'Agosto',
                        fr: 'Août',
                        'pt-BR': 'Agosto',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'September',
                      title: {
                        default: 'September',
                        es: 'Septiembre',
                        fr: 'Septembre',
                        'pt-BR': 'Setembro',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'October',
                      title: {
                        default: 'October',
                        es: 'Octubre',
                        fr: 'Octobre',
                        'pt-BR': 'Outubro',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'November',
                      title: {
                        default: 'November',
                        es: 'Noviembre',
                        fr: 'Novembre',
                        'pt-BR': 'Novembro',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'December',
                      title: {
                        default: 'December',
                        es: 'Diciembre',
                        fr: 'Décembre',
                        'pt-BR': 'Dezembro',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                  ],
                  choices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'Auto'],
                  rowCount: 1,
                  minRowCount: 1,
                  maxRowCount: 10,
                  addRowText: {
                    default: 'Add heating source',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  removeRowText: {
                    default: 'Remove heating source',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  type: 'matrixdynamic',
                  name: 'wfh-emissions_home-heating-sources-during-months-of-year-electricity',
                  visible: false,
                  visibleIf: '{wfh-emissions_home-heating-sources} contains "Electricity"',
                  title: {
                    default:
                      'Tell us more about the electricity heating sources you use *in the room you usually work in at home*.',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  description: {
                    default:
                      'Add all applicable heating sources and the number of hours you typically use them for *during a working day* in each month.',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  isRequired: true,
                  verticalAlign: 'top',
                  columns: [
                    {
                      name: 'source',
                      title: {
                        default: 'Heating source',
                        es: '',
                        fr: '',
                        'pt-BR': '',
                      },
                      cellType: 'dropdown',
                      choicesByUrl: {
                        url: 'choices/home-heating-sources-electricity.json',
                        valueName: 'id',
                        titleName: 'title',
                      },
                      allowClear: false,
                    },
                    {
                      name: 'January',
                      title: {
                        default: 'January',
                        es: 'Enero',
                        fr: 'Janvier',
                        'pt-BR': 'Janeiro',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'February',
                      title: {
                        default: 'February',
                        es: 'Febrero',
                        fr: 'Février',
                        'pt-BR': 'Fevereiro',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'March',
                      title: {
                        default: 'March',
                        es: 'Marzo',
                        fr: 'Mars',
                        'pt-BR': 'Marchar',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'April',
                      title: {
                        default: 'April',
                        es: 'Abril',
                        fr: 'Avril',
                        'pt-BR': 'Abril',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'May',
                      title: {
                        default: 'May',
                        es: 'Puede',
                        fr: 'Peut',
                        'pt-BR': 'Poderia',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'June',
                      title: {
                        default: 'June',
                        es: 'Junio',
                        fr: 'Juin',
                        'pt-BR': 'Junho',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'July',
                      title: {
                        default: 'July',
                        es: 'Julio',
                        fr: 'Juillet',
                        'pt-BR': 'Julho',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'August',
                      title: {
                        default: 'August',
                        es: 'Agosto',
                        fr: 'Août',
                        'pt-BR': 'Agosto',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'September',
                      title: {
                        default: 'September',
                        es: 'Septiembre',
                        fr: 'Septembre',
                        'pt-BR': 'Setembro',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'October',
                      title: {
                        default: 'October',
                        es: 'Octubre',
                        fr: 'Octobre',
                        'pt-BR': 'Outubro',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'November',
                      title: {
                        default: 'November',
                        es: 'Noviembre',
                        fr: 'Novembre',
                        'pt-BR': 'Novembro',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'December',
                      title: {
                        default: 'December',
                        es: 'Diciembre',
                        fr: 'Décembre',
                        'pt-BR': 'Dezembro',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                  ],
                  choices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'Auto'],
                  rowCount: 1,
                  minRowCount: 1,
                  maxRowCount: 10,
                  addRowText: {
                    default: 'Add heating source',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  removeRowText: {
                    default: 'Remove heating source',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  type: 'matrixdynamic',
                  name: 'wfh-emissions_home-heating-sources-during-months-of-year-renewable',
                  visible: false,
                  visibleIf: '{wfh-emissions_home-heating-sources} contains "Renewable / biomass"',
                  title: {
                    default:
                      'Tell us more about the renewable / biomass heating sources you use *in the room you usually work in at home*.',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  description: {
                    default:
                      'Add all applicable heating sources and the number of hours you typically use them for *during a working day* in each month.',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  isRequired: true,
                  verticalAlign: 'top',
                  columns: [
                    {
                      name: 'source',
                      title: {
                        default: 'Heating source',
                        es: '',
                        fr: '',
                        'pt-BR': '',
                      },
                      cellType: 'dropdown',
                      choicesByUrl: {
                        url: 'choices/home-heating-sources-renewable.json',
                        valueName: 'id',
                        titleName: 'title',
                      },
                      allowClear: false,
                    },
                    {
                      name: 'January',
                      title: {
                        default: 'January',
                        es: 'Enero',
                        fr: 'Janvier',
                        'pt-BR': 'Janeiro',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'February',
                      title: {
                        default: 'February',
                        es: 'Febrero',
                        fr: 'Février',
                        'pt-BR': 'Fevereiro',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'March',
                      title: {
                        default: 'March',
                        es: 'Marzo',
                        fr: 'Mars',
                        'pt-BR': 'Marchar',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'April',
                      title: {
                        default: 'April',
                        es: 'Abril',
                        fr: 'Avril',
                        'pt-BR': 'Abril',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'May',
                      title: {
                        default: 'May',
                        es: 'Puede',
                        fr: 'Peut',
                        'pt-BR': 'Poderia',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'June',
                      title: {
                        default: 'June',
                        es: 'Junio',
                        fr: 'Juin',
                        'pt-BR': 'Junho',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'July',
                      title: {
                        default: 'July',
                        es: 'Julio',
                        fr: 'Juillet',
                        'pt-BR': 'Julho',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'August',
                      title: {
                        default: 'August',
                        es: 'Agosto',
                        fr: 'Août',
                        'pt-BR': 'Agosto',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'September',
                      title: {
                        default: 'September',
                        es: 'Septiembre',
                        fr: 'Septembre',
                        'pt-BR': 'Setembro',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'October',
                      title: {
                        default: 'October',
                        es: 'Octubre',
                        fr: 'Octobre',
                        'pt-BR': 'Outubro',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'November',
                      title: {
                        default: 'November',
                        es: 'Noviembre',
                        fr: 'Novembre',
                        'pt-BR': 'Novembro',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'December',
                      title: {
                        default: 'December',
                        es: 'Diciembre',
                        fr: 'Décembre',
                        'pt-BR': 'Dezembro',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                  ],
                  choices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'Auto'],
                  rowCount: 1,
                  minRowCount: 1,
                  maxRowCount: 10,
                  addRowText: {
                    default: 'Add heating source',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  removeRowText: {
                    default: 'Remove heating source',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  type: 'matrixdynamic',
                  name: 'wfh-emissions_home-heating-sources-during-months-of-year-coal',
                  visible: false,
                  visibleIf: '{wfh-emissions_home-heating-sources} contains "Coal"',
                  title: {
                    default:
                      'Tell us more about the coal heating sources you use *in the room you usually work in at home*.',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  description: {
                    default:
                      'Add all applicable heating sources and the number of hours you typically use them for *during a working day* in each month.',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  isRequired: true,
                  verticalAlign: 'top',
                  columns: [
                    {
                      name: 'source',
                      title: {
                        default: 'Heating source',
                        es: '',
                        fr: '',
                        'pt-BR': '',
                      },
                      cellType: 'dropdown',
                      choicesByUrl: {
                        url: 'choices/home-heating-sources-coal.json',
                        valueName: 'id',
                        titleName: 'title',
                      },
                      allowClear: false,
                    },
                    {
                      name: 'January',
                      title: {
                        default: 'January',
                        es: 'Enero',
                        fr: 'Janvier',
                        'pt-BR': 'Janeiro',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'February',
                      title: {
                        default: 'February',
                        es: 'Febrero',
                        fr: 'Février',
                        'pt-BR': 'Fevereiro',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'March',
                      title: {
                        default: 'March',
                        es: 'Marzo',
                        fr: 'Mars',
                        'pt-BR': 'Marchar',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'April',
                      title: {
                        default: 'April',
                        es: 'Abril',
                        fr: 'Avril',
                        'pt-BR': 'Abril',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'May',
                      title: {
                        default: 'May',
                        es: 'Puede',
                        fr: 'Peut',
                        'pt-BR': 'Poderia',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'June',
                      title: {
                        default: 'June',
                        es: 'Junio',
                        fr: 'Juin',
                        'pt-BR': 'Junho',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'July',
                      title: {
                        default: 'July',
                        es: 'Julio',
                        fr: 'Juillet',
                        'pt-BR': 'Julho',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'August',
                      title: {
                        default: 'August',
                        es: 'Agosto',
                        fr: 'Août',
                        'pt-BR': 'Agosto',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'September',
                      title: {
                        default: 'September',
                        es: 'Septiembre',
                        fr: 'Septembre',
                        'pt-BR': 'Setembro',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'October',
                      title: {
                        default: 'October',
                        es: 'Octubre',
                        fr: 'Octobre',
                        'pt-BR': 'Outubro',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'November',
                      title: {
                        default: 'November',
                        es: 'Noviembre',
                        fr: 'Novembre',
                        'pt-BR': 'Novembro',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'December',
                      title: {
                        default: 'December',
                        es: 'Diciembre',
                        fr: 'Décembre',
                        'pt-BR': 'Dezembro',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                  ],
                  choices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'Auto'],
                  rowCount: 1,
                  minRowCount: 1,
                  maxRowCount: 10,
                  addRowText: {
                    default: 'Add heating source',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  removeRowText: {
                    default: 'Remove heating source',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  type: 'matrixdynamic',
                  name: 'wfh-emissions_home-heating-sources-during-months-of-year-district-heating',
                  visible: false,
                  visibleIf: '{wfh-emissions_home-heating-sources} contains "District heating"',
                  title: {
                    default:
                      'Tell us more about the district heating sources you use *in the room you usually work in at home*, during working hours.',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  description: {
                    default:
                      'Add all applicable heating sources and the number of hours you typically use them for *during a working day* in each month.',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  isRequired: true,
                  verticalAlign: 'top',
                  columns: [
                    {
                      name: 'January',
                      title: {
                        default: 'January',
                        es: 'Enero',
                        fr: 'Janvier',
                        'pt-BR': 'Janeiro',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'February',
                      title: {
                        default: 'February',
                        es: 'Febrero',
                        fr: 'Février',
                        'pt-BR': 'Fevereiro',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'March',
                      title: {
                        default: 'March',
                        es: 'Marzo',
                        fr: 'Mars',
                        'pt-BR': 'Marchar',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'April',
                      title: {
                        default: 'April',
                        es: 'Abril',
                        fr: 'Avril',
                        'pt-BR': 'Abril',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'May',
                      title: {
                        default: 'May',
                        es: 'Puede',
                        fr: 'Peut',
                        'pt-BR': 'Poderia',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'June',
                      title: {
                        default: 'June',
                        es: 'Junio',
                        fr: 'Juin',
                        'pt-BR': 'Junho',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'July',
                      title: {
                        default: 'July',
                        es: 'Julio',
                        fr: 'Juillet',
                        'pt-BR': 'Julho',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'August',
                      title: {
                        default: 'August',
                        es: 'Agosto',
                        fr: 'Août',
                        'pt-BR': 'Agosto',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'September',
                      title: {
                        default: 'September',
                        es: 'Septiembre',
                        fr: 'Septembre',
                        'pt-BR': 'Setembro',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'October',
                      title: {
                        default: 'October',
                        es: 'Octubre',
                        fr: 'Octobre',
                        'pt-BR': 'Outubro',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'November',
                      title: {
                        default: 'November',
                        es: 'Noviembre',
                        fr: 'Novembre',
                        'pt-BR': 'Novembro',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'December',
                      title: {
                        default: 'December',
                        es: 'Diciembre',
                        fr: 'Décembre',
                        'pt-BR': 'Dezembro',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                  ],
                  choices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'Auto'],
                  allowAddRows: false,
                  allowRemoveRows: false,
                  rowCount: 1,
                },
              ],
            },
          ],
        },
        {
          type: 'panel',
          name: 'wfh-emissions_home-cooling-group',
          title: {
            default: "We're now going to ask you about if and how you *cool* your home.",
            es: '',
            fr: '',
            'pt-BR': '',
          },
          elements: [
            {
              type: 'boolean',
              name: 'wfh-emissions_home-cooling',
              title: {
                default: 'Do you ever use any source of cooling in your home during working hours?',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              isRequired: true,
            },
            {
              type: 'matrixdynamic',
              name: 'wfh-emissions_home-cooling-sources-during-months-of-year',
              visible: false,
              visibleIf: '{wfh-emissions_home-cooling} = true',
              title: {
                default:
                  'Tell us more about the cooling sources you use *in the room you usually work in at home*, during working hours.',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              description: {
                default:
                  'Add all applicable cooling sources and the number of hours you typically use them for *during a working day* in each month.\n\n**Note:**\n- If your usage or working room varies, please give your best estimate.\n- You can add as many sources as applicable.\n- If your cooling is controlled automatically (e.g. "always-on" thermostat / centrally controlled system), select "auto" in the months your system is on.',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              isRequired: true,
              verticalAlign: 'top',
              columns: [
                {
                  name: 'source',
                  title: {
                    default: 'Cooling source',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  cellType: 'dropdown',
                  choicesByUrl: {
                    url: 'choices/home-cooling-sources.json',
                    valueName: 'id',
                    titleName: 'title',
                  },
                  allowClear: false,
                  placeholder: ' ',
                },
                {
                  name: 'January',
                  title: {
                    default: 'January',
                    es: 'Enero',
                    fr: 'Janvier',
                    'pt-BR': 'Janeiro',
                  },
                  cellType: 'dropdown',
                  allowClear: false,
                  placeholder: ' ',
                },
                {
                  name: 'February',
                  title: {
                    default: 'February',
                    es: 'Febrero',
                    fr: 'Février',
                    'pt-BR': 'Fevereiro',
                  },
                  cellType: 'dropdown',
                  allowClear: false,
                  placeholder: ' ',
                },
                {
                  name: 'March',
                  title: {
                    default: 'March',
                    es: 'Marzo',
                    fr: 'Mars',
                    'pt-BR': 'Marchar',
                  },
                  cellType: 'dropdown',
                  allowClear: false,
                  placeholder: ' ',
                },
                {
                  name: 'April',
                  title: {
                    default: 'April',
                    es: 'Abril',
                    fr: 'Avril',
                    'pt-BR': 'Abril',
                  },
                  cellType: 'dropdown',
                  allowClear: false,
                  placeholder: ' ',
                },
                {
                  name: 'May',
                  title: {
                    default: 'May',
                    es: 'Puede',
                    fr: 'Peut',
                    'pt-BR': 'Poderia',
                  },
                  cellType: 'dropdown',
                  allowClear: false,
                  placeholder: ' ',
                },
                {
                  name: 'June',
                  title: {
                    default: 'June',
                    es: 'Junio',
                    fr: 'Juin',
                    'pt-BR': 'Junho',
                  },
                  cellType: 'dropdown',
                  allowClear: false,
                  placeholder: ' ',
                },
                {
                  name: 'July',
                  title: {
                    default: 'July',
                    es: 'Julio',
                    fr: 'Juillet',
                    'pt-BR': 'Julho',
                  },
                  cellType: 'dropdown',
                  allowClear: false,
                  placeholder: ' ',
                },
                {
                  name: 'August',
                  title: {
                    default: 'August',
                    es: 'Agosto',
                    fr: 'Août',
                    'pt-BR': 'Agosto',
                  },
                  cellType: 'dropdown',
                  allowClear: false,
                  placeholder: ' ',
                },
                {
                  name: 'September',
                  title: {
                    default: 'September',
                    es: 'Septiembre',
                    fr: 'Septembre',
                    'pt-BR': 'Setembro',
                  },
                  cellType: 'dropdown',
                  allowClear: false,
                  placeholder: ' ',
                },
                {
                  name: 'October',
                  title: {
                    default: 'October',
                    es: 'Octubre',
                    fr: 'Octobre',
                    'pt-BR': 'Outubro',
                  },
                  cellType: 'dropdown',
                  allowClear: false,
                  placeholder: ' ',
                },
                {
                  name: 'November',
                  title: {
                    default: 'November',
                    es: 'Noviembre',
                    fr: 'Novembre',
                    'pt-BR': 'Novembro',
                  },
                  cellType: 'dropdown',
                  allowClear: false,
                  placeholder: ' ',
                },
                {
                  name: 'December',
                  title: {
                    default: 'December',
                    es: 'Diciembre',
                    fr: 'Décembre',
                    'pt-BR': 'Dezembro',
                  },
                  cellType: 'dropdown',
                  allowClear: false,
                  placeholder: ' ',
                },
              ],
              choices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'Auto'],
              rowCount: 1,
              minRowCount: 1,
              maxRowCount: 10,
              addRowText: {
                default: 'Add cooling source',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              removeRowText: {
                default: 'Remove cooling source',
                es: '',
                fr: '',
                'pt-BR': '',
              },
            },
          ],
        },
        {
          type: 'panel',
          name: 'wfh-emissions_equipment-group',
          title: {
            default: "We're now going to ask you about the electronic equipment you use to help you work at home.",
            es: '',
            fr: '',
            'pt-BR': '',
          },
          elements: [
            {
              type: 'checkbox',
              name: 'wfh-emissions_equipment',
              title: {
                default: 'Which of the equipment below do you use on a typical day when working from home?',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              description: {
                default:
                  'This equipment may be owned by you or by Valtech. We only need to know about what you use to do your job.',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              isRequired: true,
              choicesByUrl: {
                url: 'choices/equipment.json',
                valueName: 'id',
                titleName: 'title',
              },
              colCount: 4,
              showOtherItem: true,
              otherPlaceholder: {
                default: 'Different electronic equipment',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              otherText: {
                default: 'Other (please specify)',
                es: '',
                fr: '',
                'pt-BR': '',
              },
            },
            {
              type: 'boolean',
              name: 'wfh-emissions_equipment-dark-mode',
              visible: false,
              visibleIf:
                '{wfh-emissions_equipment} contains "Laptop" || {wfh-emissions_equipment} contains "Desktop PC"',
              title: {
                default: 'Do you use dark mode on your main work device (e.g. laptop / desktop PC) most of the time?',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              description: {
                default:
                  '"Dark mode" is a display setting for user interfaces where light-coloured text is shown against a dark screen, which may use less energy.',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: 'commuting-section',
      title: {
        default: 'Commuting',
        es: '',
        fr: '',
        'pt-BR': '',
      },
      description: {
        default: "We're now going to ask you about your commuting habits.",
        es: '',
        fr: '',
        'pt-BR': '',
      },
      visibleIf:
        '{employment_working-pattern-split.baseOffice.sharePercentage} > 0 || {employment_working-pattern-split.otherOffice.sharePercentage} > 0 ',
      elements: [
        {
          type: 'panel',
          name: 'commuting-emissions_office-commute-group',
          elements: [
            {
              type: 'text',
              name: 'commuting-emissions_office-commute-distance',
              title: {
                default:
                  'In 2022, how long was your standard commute from home to your base / normal Valtech office one way in {localized-distance-unit}? ',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              isRequired: true,
              inputType: 'number',
              min: 0,
            },
            {
              type: 'matrixdynamic',
              name: 'commuting-emissions_office-commute-method',
              title: {
                default:
                  'Please complete this table to tell us more about your standard commute from home to your base / normal Valtech office in 2022.',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              description: {
                default:
                  'Just give the details for the outward journey: we will assume you do the same in reverse to get home. Select all relevant transport methods you normally used to commute, (including walking) and the distance travelled on each for your standard commute. \n\nNote that the distances you give here must sum to the distance you gave in the previous question!',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              isRequired: true,
              validators: [
                {
                  type: 'expression',
                  text: {
                    default: 'Total must be the same as your commute distance!',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  expression:
                    '{commuting-emissions_office-commute-method-total-distance} = {commuting-emissions_office-commute-distance}',
                },
              ],
              columns: [
                {
                  name: 'commute-transportation-mode',
                  title: {
                    default: 'Transportation mode',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  cellType: 'dropdown',
                  choicesByUrl: {
                    url: 'choices/transportation-modes.json',
                    valueName: 'id',
                    titleName: 'title',
                  },
                  placeholder: {
                    default: 'Select transportation mode...',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  isUnique: true,
                },
                {
                  name: 'commute-transport-mode-distance',
                  title: {
                    default: 'Distance in {localized-distance-unit}',
                    es: 'Distancia en {localized-distance-unit}',
                    fr: 'Distance en {localized-distance-unit}',
                    'pt-BR': 'Distância em {localized-distance-unit}',
                  },
                  cellType: 'text',
                  totalType: 'sum',
                  totalFormat: {
                    default: 'Total {0}', // NOTE: Using the localized distance unit here does not work (bug in SurveyJS?), so it has been deliberately omitted.
                    es: 'Total {0}',
                    fr: 'Total {0}',
                    'pt-BR': 'Total de {0}',
                  },
                  totalDisplayStyle: 'decimal',
                  inputType: 'number',
                  min: 0,
                },
              ],
              keyDuplicationError: {
                default: 'The chosen modes should be unique.',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              rowCount: 1,
              minRowCount: 1,
              maxRowCount: 10,
              addRowText: {
                default: 'Add transportation mode',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              removeRowText: {
                default: 'Remove transportation mode',
                es: '',
                fr: '',
                'pt-BR': '',
              },
            },
            {
              type: 'expression',
              name: 'commuting-emissions_office-commute-method-total-distance',
              visible: false,
              expression: "sumInArray({commuting-emissions_office-commute-method}, 'commute-transport-mode-distance')",
              format: '{0}',
            },
          ],
        },
        {
          type: 'boolean',
          name: 'commuting-emissions_office-alternative-commute',
          title: {
            default: 'In 2022, did you have an *alternative* method to commute to your base office?',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          description: {
            default: 'For example, when the weather was bad you might have driven rather than cycling.',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          isRequired: true,
        },
        {
          type: 'panel',
          name: 'commuting-emissions_office-alternative-commute-group',
          visible: false,
          visibleIf: '{commuting-emissions_office-alternative-commute} = true',
          elements: [
            {
              type: 'text',
              name: 'commuting-emissions_office-alternative-commute-distance',
              title: {
                default:
                  'In 2022, how long was your *alternative* commute from home to your base / normal Valtech office one way {localized-distance-unit}?',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              description: {
                default:
                  'This may be the same as the distance in your standard commute, but sometimes people take different routes e.g. by road the commute might be 10km longer than on the train.',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              isRequired: true,
              inputType: 'number',
              min: 0,
            },
            {
              type: 'matrixdynamic',
              name: 'commuting-emissions_office-alternative-commute-method',
              title: {
                default:
                  'Please complete this table to tell us more about your *alternative* commute from home to your base / normal Valtech office in 2022.',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              description: {
                default:
                  'Please just give the details for the outward journey: we will assume you do the same in reverse to get home. Select all relevant transport methods you used in this *alternative* commute (including walking) and the distance travelled on each. Note that the distances you give here must sum to the distance you gave in the question regarding total distance for your alternative commute!',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              isRequired: true,
              validators: [
                {
                  type: 'expression',
                  text: {
                    default: 'Total must be the same as your alternative commute distance!',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  expression:
                    '{commuting-emissions_office-alternative-commute-method-total-distance} = {commuting-emissions_office-alternative-commute-distance}',
                },
              ],
              columns: [
                {
                  name: 'commute-transportation-mode',
                  title: {
                    default: 'Transportation mode',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  cellType: 'dropdown',
                  choicesByUrl: {
                    url: 'choices/transportation-modes.json',
                    valueName: 'id',
                    titleName: 'title',
                  },
                  placeholder: {
                    default: 'Select transportation mode...',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  isUnique: true,
                },
                {
                  name: 'commute-transport-mode-distance',
                  title: {
                    default: 'Distance in {localized-distance-unit}',
                    es: 'Distancia en {localized-distance-unit}',
                    fr: 'Distance en {localized-distance-unit}',
                    'pt-BR': 'Distância em {localized-distance-unit}',
                  },
                  cellType: 'text',
                  totalType: 'sum',
                  totalFormat: {
                    default: 'Total {0}', // NOTE: Using the localized distance unit here does not work (bug in SurveyJS?), so it has been deliberately omitted.
                    es: 'Total {0}',
                    fr: 'Total {0}',
                    'pt-BR': 'Total de {0}',
                  },
                  totalDisplayStyle: 'decimal',
                  inputType: 'number',
                  min: 0,
                },
              ],
              keyDuplicationError: {
                default: 'The chosen modes should be unique.',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              rowCount: 1,
              minRowCount: 1,
              maxRowCount: 10,
              addRowText: {
                default: 'Add transportation mode',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              removeRowText: {
                default: 'Remove transportation mode',
                es: '',
                fr: '',
                'pt-BR': '',
              },
            },
            {
              type: 'expression',
              name: 'commuting-emissions_office-alternative-commute-method-total-distance',
              visible: false,
              expression:
                "sumInArray({commuting-emissions_office-alternative-commute-method}, 'commute-transport-mode-distance')",
              format: '{0}',
            },
            {
              type: 'dropdown',
              name: 'commuting-emissions_office-alternative-commute-percentage',
              title: {
                default:
                  'Of the total days you commuted to the office in 2022, please estimate the % of days on which you used this *alternative* way of commuting instead of your standard commute.',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              isRequired: true,
              choicesByUrl: {
                url: 'choices/percentages-step-5-range-5-50.json',
                valueName: 'id',
                titleName: 'title',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'client-commuting-section',
      title: {
        default: 'Client commuting',
        es: '',
        fr: '',
        'pt-BR': '',
      },
      description: {
        default:
          'We\'re now going to ask you about the regular commuting you have done to work at client offices. \nThis is different from "business travel" which refers to one-off or infrequent trips. Here we\'re talking about working regularly from a specific client site, probably on a project.',
        es: '',
        fr: '',
        'pt-BR': '',
      },
      visibleIf: '{employment_working-pattern-split.client.sharePercentage} > 0',
      elements: [
        {
          type: 'text',
          name: 'client-commuting-emissions_client-office-commute-distance',
          title: {
            default:
              'In 2022, how long was your standard commute from home to your client office one way in {localized-distance-unit}?',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          description: {
            default:
              'If you commuted to more than one client office regularly in 2022, please select the commute you did for the longest period of time.',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          isRequired: true,
          inputType: 'number',
          min: 0,
        },
        {
          type: 'matrixdynamic',
          name: 'client-commuting-emissions_client-office-commute-method',
          title: {
            default:
              "Please complete this table to tell us more about your standard commute from home to your client's office in 2022.",
            es: '',
            fr: '',
            'pt-BR': '',
          },
          description: {
            default:
              'Just give the details for the outward journey: we will assume you do the same in reverse to get home. Select all relevant transport methods you normally used to commute, (including walking) and the distance travelled on each for your standard client office commute. The distances you give here must sum to the distance you gave in the question regarding total distance for your alternative client commute!',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          isRequired: true,
          validators: [
            {
              type: 'expression',
              text: {
                default: 'Total must be the same as your standard client commute distance!',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              expression:
                '{client-commuting-emissions_client-office-commute-method-total-distance} = {client-commuting-emissions_client-office-commute-distance}',
            },
          ],
          columns: [
            {
              name: 'client-commute-transportation-mode',
              title: {
                default: 'Transportation mode',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              cellType: 'dropdown',
              choicesByUrl: {
                url: 'choices/transportation-modes.json',
                valueName: 'id',
                titleName: 'title',
              },
              placeholder: {
                default: 'Select transportation mode...',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              isUnique: true,
            },
            {
              name: 'client-commute-transport-mode-distance',
              title: {
                default: 'Distance in {localized-distance-unit}',
                es: 'Distancia en {localized-distance-unit}',
                fr: 'Distance en {localized-distance-unit}',
                'pt-BR': 'Distância em {localized-distance-unit}',
              },
              cellType: 'text',
              totalType: 'sum',
              totalFormat: {
                default: 'Total {0}', // NOTE: Using the localized distance unit here does not work (bug in SurveyJS?), so it has been deliberately omitted.
                es: 'Total {0}',
                fr: 'Total {0}',
                'pt-BR': 'Total de {0}',
              },
              totalDisplayStyle: 'decimal',
              inputType: 'number',
              min: 0,
            },
          ],
          keyDuplicationError: {
            default: 'The chosen modes should be unique.',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          rowCount: 1,
          minRowCount: 1,
          maxRowCount: 10,
          addRowText: {
            default: 'Add transportation mode',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          removeRowText: {
            default: 'Remove transportation mode',
            es: '',
            fr: '',
            'pt-BR': '',
          },
        },
        {
          type: 'expression',
          name: 'client-commuting-emissions_client-office-commute-method-total-distance',
          visible: false,
          expression:
            "sumInArray({client-commuting-emissions_client-office-commute-method}, 'client-commute-transport-mode-distance')",
          format: '{0}',
        },
        {
          type: 'boolean',
          name: 'client-commuting-emissions_alternative-client-office-commute',
          title: {
            default: "In 2022, did you have an *alternative* method to commute to your client's office?",
            es: '',
            fr: '',
            'pt-BR': '',
          },
          description: {
            default: 'For example, when the weather was bad you might have driven rather than cycling.',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          isRequired: true,
        },
        {
          type: 'panel',
          visible: false,
          visibleIf: '{client-commuting-emissions_alternative-client-office-commute} = true',
          elements: [
            {
              type: 'text',
              name: 'client-commuting-emissions_alternative-client-office-commute-distance',
              title: {
                default:
                  "In 2022, how long was your *alternative* commute from home to your client's office one way in {localized-distance-unit}?",
                es: '',
                fr: '',
                'pt-BR': '',
              },
              description: {
                default:
                  'This may be the same as the distance in your standard commute, but sometimes people take different routes e.g. by road the commute might be 10km longer than on the train.',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              isRequired: true,
              inputType: 'number',
              min: 0,
            },
            {
              type: 'matrixdynamic',
              name: 'client-commuting-emissions_alternative-client-office-commute-method',
              title: {
                default:
                  "Please complete this table to tell us more about your *alternative* commute from home to your client's office in 2022.",
                es: '',
                fr: '',
                'pt-BR': '',
              },
              description: {
                default:
                  'Just give the details for the outward journey: we will assume you do the same in reverse to get home. Select all relevant transport methods you used in this *alternative* client commute (including walking) and the distance travelled on each. The distances you give here must sum to the distance you gave in the question regarding total distance for your alternative client commute!',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              isRequired: true,
              validators: [
                {
                  type: 'expression',
                  text: {
                    default: 'Total must be the same as your alternative client commute distance!',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  expression:
                    '{client-commuting-emissions_alternative-client-office-commute-method-total-distance} = {client-commuting-emissions_alternative-client-office-commute-distance}',
                },
              ],
              columns: [
                {
                  name: 'alternative-client-commute-transportation-mode',
                  title: {
                    default: 'Transportation mode',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  cellType: 'dropdown',
                  choicesByUrl: {
                    url: 'choices/transportation-modes.json',
                    valueName: 'id',
                    titleName: 'title',
                  },
                  placeholder: {
                    default: 'Select transportation mode...',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  isUnique: true,
                },
                {
                  name: 'alternative-client-commute-transport-mode-distance',
                  title: {
                    default: 'Distance in {localized-distance-unit}',
                    es: 'Distancia en {localized-distance-unit}',
                    fr: 'Distance en {localized-distance-unit}',
                    'pt-BR': 'Distância em {localized-distance-unit}',
                  },
                  cellType: 'text',
                  totalType: 'sum',
                  totalFormat: {
                    default: 'Total {0}', // NOTE: Using the localized distance unit here does not work (bug in SurveyJS?), so it has been deliberately omitted.
                    es: 'Total {0}',
                    fr: 'Total {0}',
                    'pt-BR': 'Total de {0}',
                  },
                  totalDisplayStyle: 'decimal',
                  inputType: 'number',
                  min: 0,
                },
              ],
              keyDuplicationError: {
                default: 'The chosen modes should be unique.',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              rowCount: 1,
              minRowCount: 1,
              maxRowCount: 10,
              addRowText: {
                default: 'Add transportation mode',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              removeRowText: {
                default: 'Remove transportation mode',
                es: '',
                fr: '',
                'pt-BR': '',
              },
            },
            {
              type: 'expression',
              name: 'client-commuting-emissions_alternative-client-office-commute-method-total-distance',
              visible: false,
              expression:
                "sumInArray({client-commuting-emissions_alternative-client-office-commute-method}, 'alternative-client-commute-transport-mode-distance')",
              format: '{0}',
            },
            {
              type: 'dropdown',
              name: 'client-commuting-emissions_alternative-client-office-commute-percentage',
              title: {
                default:
                  "Of the total days you commuted to the client's office in 2022, please estimate the % of days on which you used this *alternative* way of commuting instead of your standard client commute. ",
                es: '',
                fr: '',
                'pt-BR': '',
              },
              isRequired: true,
              choicesByUrl: {
                url: 'choices/percentages-step-5-range-5-50.json',
                valueName: 'id',
                titleName: 'title',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'business-travel-section',
      title: {
        default: 'Business travel',
        es: '',
        fr: '',
        'pt-BR': '',
      },
      description: {
        default: "We're now going to ask you about any business trips you may have taken for Valtech purposes.",
        es: '',
        fr: '',
        'pt-BR': '',
      },
      visibleIf: '{employment_working-pattern-split.businessTravel.sharePercentage} > 0',
      elements: [
        {
          type: 'checkbox',
          name: 'business-travel-emissions_transport-modes',
          title: {
            default: 'Which methods of transport did you use when taking business trips for Valtech in 2022?',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          description: {
            default:
              'Here we\'re referring to any business trips outside of your regular commute(s) to your base / normal Valtech office and / or client offices. For example, travel to conferences and other events, travel to other Valtech offices, client meetings and pitches. \n\nWe know it can be hard to remember everything in minute detail! Please give your best estimate for the business travel you did in 2022. \n\nN.b. When we refer to "car", we mean one that you lease or own privately. For any taxis you\'ve taken where you were not sure what fuel type they used, please select "petrol / diesel taxi".',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          isRequired: true,
          choicesByUrl: {
            url: 'choices/transportation-modes-business-travel.json',
            valueName: 'id',
            titleName: 'title',
          },
          colCount: 4,
          showOtherItem: true,
          otherPlaceholder: {
            default: 'Different transport mode',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          otherText: {
            default: 'Other (please specify)',
            es: '',
            fr: '',
            'pt-BR': '',
          },
        },
        {
          type: 'panel',
          name: 'business-travel-emissions_flights',
          visible: false,
          visibleIf: '{business-travel-emissions_transport-modes} contains "Plane"',
          elements: [
            {
              type: 'matrixdropdown',
              name: 'business-travel-emissions_flights-overview',
              title: {
                default: 'Please tell us a bit more about the flights you took for Valtech in 2022.',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              isRequired: true,
              validators: [
                {
                  type: 'expression',
                  text: {
                    default: 'Total short-haul share can not exceed 100%!',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  expression:
                    '{business-travel-emissions_flights-overview.short-haul.single-flights-count} == null || {business-travel-emissions_flights-overview.short-haul.single-flights-count} < 1 || {business-travel-emissions_flights-overview.short-haul.economy-class-percentage} + {business-travel-emissions_flights-overview.short-haul.business-class-percentage} + {business-travel-emissions_flights-overview.short-haul.first-class-percentage} <= 100',
                },
                {
                  type: 'expression',
                  text: {
                    default: 'Total short-haul share should be 100%!',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  expression:
                    '{business-travel-emissions_flights-overview.short-haul.single-flights-count} == null || {business-travel-emissions_flights-overview.short-haul.single-flights-count} < 1 || {business-travel-emissions_flights-overview.short-haul.economy-class-percentage} + {business-travel-emissions_flights-overview.short-haul.business-class-percentage} + {business-travel-emissions_flights-overview.short-haul.first-class-percentage} > 99',
                },
                {
                  type: 'expression',
                  text: {
                    default: 'Total medium-haul share can not exceed 100%!',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  expression:
                    '{business-travel-emissions_flights-overview.medium-haul.single-flights-count} == null || {business-travel-emissions_flights-overview.medium-haul.single-flights-count} < 1 || {business-travel-emissions_flights-overview.medium-haul.economy-class-percentage} + {business-travel-emissions_flights-overview.medium-haul.business-class-percentage} + {business-travel-emissions_flights-overview.medium-haul.first-class-percentage} <= 100',
                },
                {
                  type: 'expression',
                  text: {
                    default: 'Total medium-haul share should be 100%!',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  expression:
                    '{business-travel-emissions_flights-overview.medium-haul.single-flights-count} == null || {business-travel-emissions_flights-overview.medium-haul.single-flights-count} < 1 || {business-travel-emissions_flights-overview.medium-haul.economy-class-percentage} + {business-travel-emissions_flights-overview.medium-haul.business-class-percentage} + {business-travel-emissions_flights-overview.medium-haul.first-class-percentage} > 99',
                },
                {
                  type: 'expression',
                  text: {
                    default: 'Total long-haul share can not exceed 100%!',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  expression:
                    '{business-travel-emissions_flights-overview.long-haul.single-flights-count} == null || {business-travel-emissions_flights-overview.long-haul.single-flights-count} < 1 || {business-travel-emissions_flights-overview.long-haul.economy-class-percentage} + {business-travel-emissions_flights-overview.long-haul.business-class-percentage} + {business-travel-emissions_flights-overview.long-haul.first-class-percentage} <= 100',
                },
                {
                  type: 'expression',
                  text: {
                    default: 'Total long-haul share should be 100%!',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  expression:
                    '{business-travel-emissions_flights-overview.long-haul.single-flights-count} == null || {business-travel-emissions_flights-overview.long-haul.single-flights-count} < 1 || {business-travel-emissions_flights-overview.long-haul.economy-class-percentage} + {business-travel-emissions_flights-overview.long-haul.business-class-percentage} + {business-travel-emissions_flights-overview.long-haul.first-class-percentage} > 99',
                },
                {
                  type: 'expression',
                  text: {
                    default: 'Total ultra-long-haul share can not exceed 100%!',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  expression:
                    '{business-travel-emissions_flights-overview.ultra-long-haul.single-flights-count} == null || {business-travel-emissions_flights-overview.ultra-long-haul.single-flights-count} < 1 || {business-travel-emissions_flights-overview.ultra-long-haul.economy-class-percentage} + {business-travel-emissions_flights-overview.ultra-long-haul.business-class-percentage} + {business-travel-emissions_flights-overview.ultra-long-haul.first-class-percentage} <= 100',
                },
                {
                  type: 'expression',
                  text: {
                    default: 'Total ultra-long-haul share should be 100%!',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  expression:
                    '{business-travel-emissions_flights-overview.ultra-long-haul.single-flights-count} == null || {business-travel-emissions_flights-overview.ultra-long-haul.single-flights-count} < 1 || {business-travel-emissions_flights-overview.ultra-long-haul.economy-class-percentage} + {business-travel-emissions_flights-overview.ultra-long-haul.business-class-percentage} + {business-travel-emissions_flights-overview.ultra-long-haul.first-class-percentage} > 99',
                },
              ],
              columns: [
                {
                  name: 'single-flights-count',
                  title: {
                    default: 'Number of single flights',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  cellType: 'dropdown',
                  allowClear: false,
                  choicesMax: 200,
                },
                {
                  name: 'economy-class-percentage',
                  title: {
                    default: '% of these flights in economy class (including premium economy)',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  cellType: 'dropdown',
                  choicesByUrl: {
                    url: 'choices/percentages-step-10.json',
                    valueName: 'id',
                    titleName: 'title',
                  },
                  allowClear: false,
                },
                {
                  name: 'business-class-percentage',
                  title: {
                    default: '% of these flights in business class',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  cellType: 'dropdown',
                  choicesByUrl: {
                    url: 'choices/percentages-step-10.json',
                    valueName: 'id',
                    titleName: 'title',
                  },
                  allowClear: false,
                },
                {
                  name: 'first-class-percentage',
                  title: {
                    default: '% of these flights in first class',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  cellType: 'dropdown',
                  choicesByUrl: {
                    url: 'choices/percentages-step-10.json',
                    valueName: 'id',
                    titleName: 'title',
                  },
                  allowClear: false,
                },
              ],
              rows: [
                {
                  value: 'short-haul',
                  text: {
                    default: 'Short-haul (under 3 hours)',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  value: 'medium-haul',
                  text: {
                    default: 'Medium-haul (3–6 hours)',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  value: 'long-haul',
                  text: {
                    default: 'Long haul (6–16 hours)',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  value: 'ultra-long-haul',
                  text: {
                    default: 'Ultra-long-haul (16 hours+)',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
              ],
            },
            {
              type: 'panel',
              name: 'business-travel-emissions_flights',
              visible: false,
              visibleIf: '{business-travel-emissions_transport-modes} contains "plane"',
              title: {
                default:
                  'When taking the plane for Valtech in 2022, how did you typically travel to the airport and then from the arrival airport to your final destination?',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              description: {
                default:
                  "It's fine to give a guess / average here, and if you used more than one method of transport for each section of the journey, please just tell us about the one that covered the highest proportion of the journey.",
                es: '',
                fr: '',
                'pt-BR': '',
              },
              elements: [
                {
                  type: 'matrixdynamic',
                  name: 'business-travel-emissions_flights-journey-home-to-airport',
                  title: {
                    default: 'Journey from home to airport',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  isRequired: true,
                  columns: [
                    {
                      name: 'commute-transportation-mode',
                      title: {
                        default: 'Transportation mode',
                        es: '',
                        fr: '',
                        'pt-BR': '',
                      },
                      cellType: 'dropdown',
                      choicesByUrl: {
                        url: 'choices/transportation-modes.json',
                        valueName: 'id',
                        titleName: 'title',
                      },
                      choicesVisibleIf: '{item} != "plane"',
                      placeholder: {
                        default: 'Select transportation mode...',
                        es: '',
                        fr: '',
                        'pt-BR': '',
                      },
                      isUnique: true,
                    },
                    {
                      name: 'commute-transport-mode-distance',
                      title: {
                        default: 'Distance in {localized-distance-unit}',
                        es: 'Distancia en {localized-distance-unit}',
                        fr: 'Distance en {localized-distance-unit}',
                        'pt-BR': 'Distância em {localized-distance-unit}',
                      },
                      cellType: 'dropdown',
                      choicesByUrl: {
                        url: 'choices/distance-ranges.json',
                        valueName: 'id',
                        titleName: 'title',
                      },
                      placeholder: {
                        default: 'Select distance range...',
                        es: '',
                        fr: '',
                        'pt-BR': '',
                      },
                    },
                  ],
                  keyDuplicationError: {
                    default: 'The chosen modes should be unique.',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  rowCount: 1,
                  minRowCount: 1,
                  maxRowCount: 10,
                  addRowText: {
                    default: 'Add transportation mode',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  removeRowText: {
                    default: 'Remove transportation mode',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  type: 'matrixdynamic',
                  name: 'business-travel-emissions_flights-journey-airport-to-final-destination',
                  title: {
                    default: 'Journey from airport to final destination',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  isRequired: true,
                  columns: [
                    {
                      name: 'commute-transportation-mode',
                      title: {
                        default: 'Transportation mode',
                        es: '',
                        fr: '',
                        'pt-BR': '',
                      },
                      cellType: 'dropdown',
                      choicesByUrl: {
                        url: 'choices/transportation-modes.json',
                        valueName: 'id',
                        titleName: 'title',
                      },
                      choicesVisibleIf: '{item} != "plane"',
                      placeholder: {
                        default: 'Select transportation mode...',
                        es: '',
                        fr: '',
                        'pt-BR': '',
                      },
                      isUnique: true,
                    },
                    {
                      name: 'commute-transport-mode-distance',
                      title: {
                        default: 'Distance in {localized-distance-unit}',
                        es: 'Distancia en {localized-distance-unit}',
                        fr: 'Distance en {localized-distance-unit}',
                        'pt-BR': 'Distância em {localized-distance-unit}',
                      },
                      cellType: 'dropdown',
                      choicesByUrl: {
                        url: 'choices/distance-ranges.json',
                        valueName: 'id',
                        titleName: 'title',
                      },
                      placeholder: {
                        default: 'Select distance range...',
                        es: '',
                        fr: '',
                        'pt-BR': '',
                      },
                    },
                  ],
                  keyDuplicationError: {
                    default: 'The chosen modes should be unique.',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  rowCount: 1,
                  minRowCount: 1,
                  maxRowCount: 10,
                  addRowText: {
                    default: 'Add transportation mode',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  removeRowText: {
                    default: 'Remove transportation mode',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
              ],
            },
          ],
        },
        {
          type: 'matrixdynamic',
          name: 'business-travel-emissions_train-journeys-overview',
          title: {
            default: 'Please tell us a bit more about the train journeys you took for Valtech in 2022.',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          visible: false,
          visibleIf: '{business-travel-emissions_transport-modes} contains "Train"',
          isRequired: true,
          columns: [
            {
              name: 'duration-range',
              title: {
                default: 'Number of hours per journey',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              cellType: 'dropdown',
              choicesByUrl: {
                url: 'choices/duration-ranges.json',
                valueName: 'id',
                titleName: 'title',
              },
              allowClear: false,
            },
            {
              name: 'single-train-journeys-count',
              title: {
                default: 'Number of single train journeys',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              cellType: 'dropdown',
              allowClear: false,
              choicesMax: 200,
            },
            {
              name: 'national-trains-percentage',
              title: {
                default: '% national trains',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              cellType: 'dropdown',
              choicesByUrl: {
                url: 'choices/percentages-step-10.json',
                valueName: 'id',
                titleName: 'title',
              },
              allowClear: false,
            },
            {
              name: 'international-trains-percentage',
              title: {
                default: '% of these journeys on international trains',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              cellType: 'dropdown',
              choicesByUrl: {
                url: 'choices/percentages-step-10.json',
                valueName: 'id',
                titleName: 'title',
              },
              allowClear: false,
            },
            {
              name: 'light-rail-tram-percentage',
              title: {
                default: '% of these journeys on light rail/tram',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              cellType: 'dropdown',
              choicesByUrl: {
                url: 'choices/percentages-step-10.json',
                valueName: 'id',
                titleName: 'title',
              },
              allowClear: false,
            },
            {
              name: 'metro-underground-subway-percentage',
              title: {
                default: '% of these journeys on metro/underground/subway',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              cellType: 'dropdown',
              choicesByUrl: {
                url: 'choices/percentages-step-10.json',
                valueName: 'id',
                titleName: 'title',
              },
              allowClear: false,
            },
          ],
          addRowText: {
            default: 'Add journey',
          },
          removeRowText: {
            default: 'Remove journey',
          },
          rowCount: 1,
          minRowCount: 1,
        },
        {
          type: 'matrixdynamic',
          name: 'business-travel-emissions_car-journeys-overview',
          title: {
            default: 'Please tell us a bit more about the car journeys you took for Valtech in 2022.',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          visible: false,
          visibleIf:
            '{business-travel-emissions_transport-modes} contains "Petrol / diesel car" || {business-travel-emissions_transport-modes} contains "Hybrid car" || {business-travel-emissions_transport-modes} contains "Electric car" || {business-travel-emissions_transport-modes} contains "Biodiesel car" || {business-travel-emissions_transport-modes} contains "Bioethanol car" || {business-travel-emissions_transport-modes} contains "LPG car"',
          isRequired: true,
          columns: [
            {
              name: 'duration-range',
              title: {
                default: 'Number of hours travelled',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              cellType: 'dropdown',
              choicesByUrl: {
                url: 'choices/duration-ranges.json',
                valueName: 'id',
                titleName: 'title',
              },
              allowClear: false,
            },
            {
              name: 'conventional-fuel-car-journeys-count',
              visibleIf: '{business-travel-emissions_transport-modes} contains "Petrol / diesel car"',
              title: {
                default: 'Number of single conventional fuel car journeys (petrol (gasoline), diesel)',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              cellType: 'dropdown',
              allowClear: false,
              choicesMax: 200,
            },
            {
              name: 'hybrid-car-journeys-count',
              visibleIf: '{business-travel-emissions_transport-modes} contains "Hybrid car"',
              title: {
                default: 'Number of single hybrid car journeys (petrol (gasoline) & electric)',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              cellType: 'dropdown',
              allowClear: false,
              choicesMax: 200,
            },
            {
              name: 'electric-car-journeys-count',
              visibleIf: '{business-travel-emissions_transport-modes} contains "Electric car"',
              title: {
                default: 'Number of single electric vehicle (EV) car journeys',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              cellType: 'dropdown',
              allowClear: false,
              choicesMax: 200,
            },
            {
              name: 'bioethanol-powered-car-journeys-count',
              visibleIf: '{business-travel-emissions_transport-modes} contains "Bioethanol car"',
              title: {
                default: 'Number of single bioethanol-powered car journeys',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              cellType: 'dropdown',
              allowClear: false,
              choicesMax: 200,
            },
            {
              name: 'biodiesel-powered-car-journeys-count',
              visibleIf: '{business-travel-emissions_transport-modes} contains "Biodiesel car"',
              title: {
                default: 'Number of single biodiesel-powered car journeys',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              cellType: 'dropdown',
              allowClear: false,
              choicesMax: 200,
            },
            {
              name: 'lpg-powered-car-journeys-count',
              visibleIf: '{business-travel-emissions_transport-modes} contains "LPG car"',
              title: {
                default: 'Number of single LPG-powered car journeys (liquefied petroleum gas)',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              cellType: 'dropdown',
              allowClear: false,
              choicesMax: 200,
            },
          ],
          addRowText: {
            default: 'Add journey',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          removeRowText: {
            default: 'Remove journey',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          rowCount: 1,
          minRowCount: 1,
        },
        {
          type: 'matrixdynamic',
          name: 'business-travel-emissions_taxi-journeys-overview',
          title: {
            default: 'Please tell us a bit more about the taxi journeys you took for Valtech in 2022.',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          visible: false,
          visibleIf:
            '{business-travel-emissions_transport-modes} contains "Petrol / diesel taxi" || {business-travel-emissions_transport-modes} contains "Hybrid taxi" || {business-travel-emissions_transport-modes} contains "Electric taxi"',
          isRequired: true,
          columns: [
            {
              name: 'duration-range',
              title: {
                default: 'Number of hours travelled',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              cellType: 'dropdown',
              choicesByUrl: {
                url: 'choices/duration-ranges.json',
                valueName: 'id',
                titleName: 'title',
              },
              allowClear: false,
            },
            {
              name: 'conventional-fuel-taxi-journeys-count',
              visibleIf: '{business-travel-emissions_transport-modes} contains "Petrol / diesel taxi"',
              title: {
                default: 'Number of single conventional fuel taxi journeys (petrol (gasoline), diesel)',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              cellType: 'dropdown',
              allowClear: false,
              choicesMax: 200,
            },
            {
              name: 'hybrid-taxi-journeys-count',
              visibleIf: '{business-travel-emissions_transport-modes} contains "Hybrid taxi"',
              title: {
                default: 'Number of hybrid taxi journeys (petrol (gasoline) & electric)',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              cellType: 'dropdown',
              allowClear: false,
              choicesMax: 200,
            },
            {
              name: 'electric-taxi-journeys-count',
              visibleIf: '{business-travel-emissions_transport-modes} contains "Electric taxi"',
              title: {
                default: 'Number of electric vehicle (EV) taxi journeys',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              cellType: 'dropdown',
              allowClear: false,
              choicesMax: 200,
            },
          ],
          addRowText: {
            default: 'Add journey',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          removeRowText: {
            default: 'Remove journey',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          rowCount: 1,
          minRowCount: 1,
        },
        {
          type: 'matrixdynamic',
          name: 'business-travel-emissions_coach-journeys-overview',
          title: {
            default: 'Please tell us a bit more about the coach journeys you took for Valtech in 2022.',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          visible: false,
          visibleIf: '{business-travel-emissions_transport-modes} contains "Coach"',
          isRequired: true,
          columns: [
            {
              name: 'duration-range',
              title: {
                default: 'Number of hours travelled',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              cellType: 'dropdown',
              choicesByUrl: {
                url: 'choices/duration-ranges.json',
                valueName: 'id',
                titleName: 'title',
              },
              allowClear: false,
            },
            {
              name: 'single-coach-journeys-count',
              title: {
                default: 'Number of single coach journeys',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              cellType: 'dropdown',
              allowClear: false,
              choicesMax: 200,
            },
          ],
          addRowText: {
            default: 'Add journey',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          removeRowText: {
            default: 'Remove journey',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          rowCount: 1,
          minRowCount: 1,
        },
        {
          type: 'matrixdynamic',
          name: 'business-travel-emissions_bus-journeys-overview',
          title: {
            default: 'Please tell us a bit more about the bus journeys you took for Valtech in 2022.',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          visible: false,
          visibleIf: '{business-travel-emissions_transport-modes} contains "Bus"',
          isRequired: true,
          columns: [
            {
              name: 'duration-range',
              title: {
                default: 'Number of hours travelled',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              cellType: 'dropdown',
              choicesByUrl: {
                url: 'choices/duration-ranges.json',
                valueName: 'id',
                titleName: 'title',
              },
              allowClear: false,
            },
            {
              name: 'single-bus-journeys-count',
              title: {
                default: 'Number of single bus journeys',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              cellType: 'dropdown',
              allowClear: false,
              choicesMax: 200,
            },
          ],
          addRowText: {
            default: 'Add journey',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          removeRowText: {
            default: 'Remove journey',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          rowCount: 1,
          minRowCount: 1,
        },
        {
          type: 'matrixdynamic',
          name: 'business-travel-emissions_ferry-journeys-overview',
          title: {
            default: 'Please tell us a bit more about the ferry journeys you took for Valtech in 2022.',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          visible: false,
          visibleIf: '{business-travel-emissions_transport-modes} contains "Ferry / Ship"',
          isRequired: true,
          columns: [
            {
              name: 'duration-range',
              title: {
                default: 'Number of hours travelled',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              cellType: 'dropdown',
              choicesByUrl: {
                url: 'choices/duration-ranges.json',
                valueName: 'id',
                titleName: 'title',
              },
              allowClear: false,
            },
            {
              name: 'single-bus-journeys-count',
              title: {
                default: 'Number of single ferry journeys',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              cellType: 'dropdown',
              allowClear: false,
              choicesMax: 200,
            },
          ],
          addRowText: {
            default: 'Add journey',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          removeRowText: {
            default: 'Remove journey',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          rowCount: 1,
          minRowCount: 1,
        },
        {
          type: 'panel',
          name: 'business-travel-emissions_overnight-stay-group',
          elements: [
            {
              type: 'boolean',
              name: 'business-travel-emissions_overnight-stay',
              title: {
                default: 'Did you stay overnight, away from home for Valtech purposes in 2022?',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              description: {
                default:
                  'This may have been in a hotel, in other accommodation such as an Airbnb, or with friends / family.',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              isRequired: true,
            },
            {
              type: 'matrixdynamic',
              name: 'business-travel-emissions_overnight-stay-details',
              title: {
                default:
                  'Please tell us some more detail on the approximate number of nights you stayed, which countries you stayed in and the type of accommodation you used in the table below.',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              visible: false,
              visibleIf: '{business-travel-emissions_overnight-stay} = true',
              isRequired: true,
              columns: [
                {
                  cellType: 'dropdown',
                  name: 'overnight-stay-country',
                  title: {
                    default: 'Country of stay',
                  },
                  choicesByUrl: {
                    url: 'choices/countries-of-the-world.json',
                    valueName: 'id',
                    titleName: 'title',
                  },
                  placeholder: {
                    default: 'Select your country...',
                  },
                },
                {
                  name: 'nights-count',
                  title: {
                    default: 'Number of nights',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  cellType: 'dropdown',
                  allowClear: false,
                  choicesMax: 50,
                },
                {
                  name: 'nights-in-hotels-percentage',
                  title: {
                    default: '% of these nights in hotels',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  cellType: 'dropdown',
                  choicesByUrl: {
                    url: 'choices/percentages-step-10.json',
                    valueName: 'id',
                    titleName: 'title',
                  },
                  allowClear: false,
                },
                {
                  name: 'nights-in-airbnbs-guesthouses-percentage',
                  title: {
                    default: '% of these nights in Airbnbs / guesthouses',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  cellType: 'dropdown',
                  choicesByUrl: {
                    url: 'choices/percentages-step-10.json',
                    valueName: 'id',
                    titleName: 'title',
                  },
                  allowClear: false,
                },
                {
                  name: 'nights-staying-with-friends-family-percentage',
                  title: {
                    default: '% of these nights staying with friends / family',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                  cellType: 'dropdown',
                  choicesByUrl: {
                    url: 'choices/percentages-step-10.json',
                    valueName: 'id',
                    titleName: 'title',
                  },
                  allowClear: false,
                },
              ],
              addRowText: {
                default: 'Add stay',
              },
              removeRowText: {
                default: 'Remove stay',
              },
              rowCount: 1,
              minRowCount: 1,
            },
          ],
        },
      ],
    },
    {
      name: 'general-sustainability_section',
      title: {
        default: 'General sustainability',
        es: '',
        fr: '',
        'pt-BR': '',
      },
      description: {
        default:
          "We're now going to ask you a few additional questions on your feelings about Sustainability at Valtech and your own emissions reduction efforts. We would LOVE your feedback, but feel free to skip this section. As there are some free text answers we'd like to remind you not to say anything that could identify you or any colleagues personally (e.g. names, roles, etc.).",
        es: '',
        fr: '',
        'pt-BR': '',
      },
      elements: [
        {
          type: 'boolean',
          name: 'general-sustainability_champion',
          title: {
            default: 'Do you know who the Sustainability Champion is for your entity?',
            es: '',
            fr: '',
            'pt-BR': '',
          },
        },
        {
          type: 'boolean',
          name: 'general-sustainability_targets',
          title: {
            default:
              'Before completing this survey, were you aware that Valtech is committing to emissions reduction targets?',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          description: {
            default:
              'Our emissions target is to be Net Zero by 2040, pending validation by the Science Based Targets initiative.',
            es: '',
            fr: '',
            'pt-BR': '',
          },
        },
        {
          type: 'panel',
          name: 'general-sustainability_local-initiatives-group',
          elements: [
            {
              type: 'radiogroup',
              name: 'general-sustainability_local-initiatives',
              title: {
                default:
                  'Are you aware of any initiatives in your base / normal Valtech office to help reduce our emissions?',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              choices: [
                {
                  value: 'yes',
                  text: {
                    default: 'Yes',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  value: 'no',
                  text: {
                    default: 'No',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  value: 'not-available',
                  text: {
                    default: "N/A (I don't have a base Valtech office)",
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
              ],
            },
            {
              type: 'text',
              name: 'general-sustainability_local-initiatives-details',
              title: {
                default: 'Please share what these initiatives are.',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              visible: false,
              visibleIf: "{general-sustainability_local-initiatives} = 'yes'",
            },
          ],
        },
        {
          type: 'panel',
          name: 'general-sustainability_personal-reduction-group',
          elements: [
            {
              type: 'checkbox',
              name: 'general-sustainability_personal-reduction',
              title: {
                default:
                  'Have you already started making a personal effort to reduce your emissions in any of these areas?',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              choices: [
                {
                  value: 'commuting-emissions',
                  text: {
                    default: "Yes, I'm reducing my commuting emissions",
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  value: 'business-travel-emissions',
                  text: {
                    default: "Yes, I'm reducing my business travel emissions",
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  value: 'home-emissions',
                  text: {
                    default: "Yes, I'm reducing my home emissions",
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  value: 'none',
                  text: {
                    default: "No, I haven't started trying to reduce my emissions in any of these areas yet",
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
              ],
            },
            {
              type: 'comment',
              name: 'general-sustainability_personal-reduction-details',
              title: {
                default:
                  "Please can you share more details on what you're doing to reduce your emissions in these areas?",
                es: '',
                fr: '',
                'pt-BR': '',
              },
              visible: false,
              visibleIf:
                "{general-sustainability_personal-reduction} contains 'commuting-emissions' || {general-sustainability_personal-reduction} contains 'business-travel-emissions' || {general-sustainability_personal-reduction} contains 'home-emissions'",
            },
          ],
        },
        {
          type: 'checkbox',
          name: 'general-sustainability_personal-reduction-support',
          title: {
            default: 'How could Valtech best support you to reduce your personal emissions as an employee?',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          description: {
            default: 'Select 1–3 options.',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          validators: [
            {
              type: 'answercount',
              text: {
                default: 'Select 1–3 options.',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              maxCount: 3,
            },
          ],
          choices: [
            {
              value: 'learn-about-greener-choices',
              text: {
                default: 'Helping me learn about how I can make greener choices.',
                es: '',
                fr: '',
                'pt-BR': '',
              },
            },
            {
              value: 'employee-benefits',
              text: {
                default:
                  'Introducing formal employee benefits that help me reduce my footprint (e.g. tax-free bicycle lease schemes).',
                es: '',
                fr: '',
                'pt-BR': '',
              },
            },
            {
              value: 'employee-groups',
              text: {
                default: 'Setting up more employee groups so we can share ideas and learn from each other.',
                es: '',
                fr: '',
                'pt-BR': '',
              },
            },
            {
              value: 'negotiating-discounts',
              text: {
                default:
                  'Negotiating discounts for employees on green solutions (e.g. discounts with solar panel suppliers).',
                es: '',
                fr: '',
                'pt-BR': '',
              },
            },
            {
              value: 'more-frequent-communication',
              text: {
                default: 'Communicating more frequently on our emissions reduction targets and initiatives.',
                es: '',
                fr: '',
                'pt-BR': '',
              },
            },
            {
              value: 'local-initiatives-and-events',
              text: {
                default: 'Introducing more **local** initiatives and events focussed on emissions reduction.',
                es: '',
                fr: '',
                'pt-BR': '',
              },
            },
            {
              value: 'global-initiatives-and-events',
              text: {
                default: 'Introducing more **global** initiatives and events focussed on emissions reduction.',
                es: '',
                fr: '',
                'pt-BR': '',
              },
            },
          ],
          showOtherItem: true,
          otherPlaceholder: {
            default: 'Different support',
            es: '',
            fr: '',
            'pt-BR': '',
          },
          otherText: {
            default: 'Other (please specify)',
            es: '',
            fr: '',
            'pt-BR': '',
          },
        },
        {
          type: 'panel',
          name: 'general-sustainability_personal-reduction-challenging-group',
          elements: [
            {
              type: 'radiogroup',
              name: 'general-sustainability_personal-reduction-challenging',
              title: {
                default:
                  'Thinking as an individual within the Valtech context, which area do you find the most challenging when it comes to reducing your emissions?',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              choices: [
                {
                  value: 'office-commute',
                  text: {
                    default: 'Commuting to my base Valtech office',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  value: 'client-commute',
                  text: {
                    default: 'Commuting to client site(s)',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  value: 'working-from-home',
                  text: {
                    default: 'Working from home',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  value: 'business-travel',
                  text: {
                    default: 'Travelling on business',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  value: 'none',
                  text: {
                    default: 'I find it easy to reduce my emissions in all of these categories!',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
              ],
            },
            {
              type: 'checkbox',
              name: 'general-sustainability_personal-reduction-challenging-reasons-for-commuting',
              title: {
                default: 'Why do you find it hard to reduce your commuting emissions?',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              description: {
                default: 'Select as many options as you like.',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              visible: false,
              visibleIf:
                "{general-sustainability_personal-reduction-challenging} contains 'office-commute' || {general-sustainability_personal-reduction-challenging} contains 'client-commute'",
              clearIfInvisible: 'onHidden',
              choices: [
                {
                  value: 'already-using',
                  text: {
                    default:
                      "There is no greener way for me to get there because I'm already using the greenest available method.",
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  value: 'no-way',
                  text: {
                    default:
                      "There is no greener way for me to get there because there's no way to get to the site by walking / cycling or using public transport.",
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  value: 'too-difficult',
                  text: {
                    default:
                      "In theory the distance could be walked or cycled but it's too difficult (e.g. it's too hot / there are no cycle lanes).",
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  value: 'not-practical',
                  text: {
                    default:
                      "It's not *practical* for me to use a greener method (e.g. taking the train rather than driving would take 6x longer).",
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  value: 'drive-options-difficult',
                  text: {
                    default:
                      "I have to drive and it's hard to find people to car share with and / or an electric vehicle is not an option for me.",
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
              ],
              showOtherItem: true,
              otherPlaceholder: {
                default: 'Different reasons',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              otherText: {
                default: 'Other (please specify)',
                es: '',
                fr: '',
                'pt-BR': '',
              },
            },
            {
              type: 'checkbox',
              name: 'general-sustainability_personal-reduction-challenging-reasons-for-working-from-home',
              title: {
                default: 'Why do you find it hard to reduce your working from home emissions?',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              description: {
                default: 'Select as many options as you like.',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              visible: false,
              visibleIf: "{general-sustainability_personal-reduction-challenging} contains 'working-from-home'",
              clearIfInvisible: 'onHidden',
              choices: [
                {
                  value: 'already-using',
                  text: {
                    default:
                      "I can't reduce my emissions any more because I'm already using all the low-carbon options available to me (e.g. solar panels etc.).",
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  value: 'no-practical-ways',
                  text: {
                    default:
                      'In my country there are no practical / affordable ways I can reduce my home emissions, aside from simply reducing my usage.',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  value: 'too-expensive',
                  text: {
                    default:
                      "The bigger changes I'd need to make (e.g. installing solar panels) are too **expensive** for me right now.",
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  value: 'not-practical',
                  text: {
                    default: "The bigger changes I'd need to make are not **practical** for me right now.",
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  value: 'not-within-direct-control',
                  text: {
                    default: "The bigger changes I'd need to make are **not within my direct control**.",
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  value: 'help-needed',
                  text: {
                    default: "I don't know where to start and I'd like some help.",
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  value: 'no-exploring',
                  text: {
                    default: "I don't have time and / or inclination to explore this.",
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  value: 'resistant-household',
                  text: {
                    default: "I'd like to make changes but others in my household are resistant.",
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
              ],
              showOtherItem: true,
              otherPlaceholder: {
                default: 'Different reasons',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              otherText: {
                default: 'Other (please specify)',
                es: '',
                fr: '',
                'pt-BR': '',
              },
            },
            {
              type: 'checkbox',
              name: 'general-sustainability_personal-reduction-challenging-reasons-for-business-travel',
              title: {
                default: 'Why do you find it hard to reduce your business travel emissions?',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              description: {
                default: 'Select as many options as you like.',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              visible: false,
              visibleIf: "{general-sustainability_personal-reduction-challenging} contains 'business-travel'",
              clearIfInvisible: 'onHidden',
              choices: [
                {
                  value: 'as-green-as-possible',
                  text: {
                    default:
                      "I already travel in as green a way as possible and I can't see how I can make this any greener.",
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  value: 'affecting-business-outcomes',
                  text: {
                    default:
                      "I can't see how I could reduce my travel for Valtech without adversely affecting business outcomes.",
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  value: 'little-influence',
                  text: {
                    default:
                      "Others in Valtech make decisions about my travel and there's little I can do to influence this.",
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  value: 'client-expectation',
                  text: {
                    default:
                      "There's a client expectation that I will attend meetings / events in person and this is hard to challenge.",
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  value: 'no-greener-alternative',
                  text: {
                    default:
                      "There's often no greener alternative for me (e.g. I travel a lot across oceans and I can't reasonably take a greener option than the plane).",
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  value: 'unknown-options',
                  text: {
                    default: "I don't know what options are available / don't have time to research other methods.",
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  value: 'can-not-afford',
                  text: {
                    default: "I can't afford the extra time that a greener option would take.",
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
              ],
              showOtherItem: true,
              otherPlaceholder: {
                default: 'Different reasons',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              otherText: {
                default: 'Other (please specify)',
                es: '',
                fr: '',
                'pt-BR': '',
              },
            },
            {
              type: 'text',
              name: 'general-sustainability_personal-reduction-challenging-reasons-details',
              title: {
                default: 'Please feel free to share more information on your response to the previous question.',
                es: '',
                fr: '',
                'pt-BR': '',
              },
            },
          ],
        },
        {
          type: 'panel',
          name: 'general-sustainability_carbon-tax-group',
          elements: [
            {
              type: 'radiogroup',
              name: 'general-sustainability_carbon-tax',
              title: {
                default: 'Would you be in favour of Valtech introducing a carbon tax or carbon budget?',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              description: {
                default:
                  'A carbon budget would involve setting more granular targets on specific carbon emitting activities. For example, limiting the number of flights each person or team was permitted to take per month / year. \n\nA carbon tax would be an internal levy added to specific carbon emitting activities such as flights. The money generated from this could be reinvested into emissions reduction initiatives.',
                es: '',
                fr: '',
                'pt-BR': '',
              },
              choices: [
                {
                  value: 'yes',
                  text: {
                    default: 'Yes',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  value: 'no',
                  text: {
                    default: 'No',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
                {
                  value: 'not-sure',
                  text: {
                    default: 'Not sure',
                    es: '',
                    fr: '',
                    'pt-BR': '',
                  },
                },
              ],
            },
            {
              type: 'text',
              name: 'general-sustainability_carbon-tax-reasons',
              title: {
                default: 'Why is this?',
                es: '',
                fr: '',
                'pt-BR': '',
              },
            },
          ],
        },
        {
          type: 'text',
          name: 'general-sustainability_open-comments',
          title: {
            default:
              "Are there any final thoughts or ideas you'd like to add on the topic of emissions reduction and sustainability at Valtech?",
            es: '',
            fr: '',
            'pt-BR': '',
          },
        },
      ],
    },
  ],
  calculatedValues: [
    {
      name: 'distance-unit',
      expression: '{distance-unit}',
      includeIntoResult: true,
    },
    {
      name: 'localized-distance-unit',
      expression: '{localized-distance-unit}',
      includeIntoResult: false,
    },
  ],
  triggers: [
    {
      type: 'runexpression',
      expression: '{employment_home-country} notempty or {employment_home-country} empty',
      runExpression: "setDistanceUnit({employment_home-country}, 'distance-unit')",
    },
    {
      type: 'runexpression',
      expression: '{employment_home-country} notempty or {employment_home-country} empty',
      runExpression: "setLocalizedDistanceUnit({employment_home-country}, 'localized-distance-unit')",
    },
  ],
}


console.log(JSON.stringify(surveyJson))