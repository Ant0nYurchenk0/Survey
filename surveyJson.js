export const surveyJson = {
  title: {
    default: 'Global Employee Emissions Survey: 2022 calendar year',
    es: 'Encuesta mundial sobre las emisiones de los empleados: Año natural 2022',
    fr: 'Enquête annuelle sur les émissions - 2022',
    'pt-BR': 'Pesquisa global sobre as emissões dos funcionários: Ano civil de 2022',
  },
  description: {
    default: "Let's help Valtech become more sustainable!",
    es: '¡Ayudemos a Valtech a ser más sostenible!',
    fr: 'Aidons Valtech à devenir plus durable !',
    'pt-BR': 'Vamos ajudar a Valtech ser mais sustentável!',
  },
  logoPosition: 'right',
  completedHtml: {
    default: `
    <h3>Thank you so much for your input on this survey.</h3>
    <p>Your time is appreciated by us - and the planet!</p>
    <p>Curious about how you can step up your efforts to reduce our emissions, or have an idea you'd like to share? Get in touch with your local Sustainability Champion, or join the conversation in the <a href="https://teams.microsoft.com/l/team/19%3a9c0f62e17e1e47fcb66e550eaf0062fc%40thread.tacv2/conversations?groupId=f97b959c-751c-4b45-93f8-e15596ffb2c5&tenantId=139f0669-cebb-42df-b9e3-415009ddb690" target="_blank">GL.Sustainability Team</a>.</p>
  `,
    es: `<h3>Muchas gracias por sus aportaciones a esta encuesta. </h3>
    <p>Su tiempo es muy valioso para nosotros, ¡y para el planeta!</p>
    <p>¿Tienes curiosidad por saber cómo puedes intensificar tus esfuerzos para reducir nuestras emisiones, tienes alguna idea que te gustaría compartir o quieres darnos tu opinión sobre cómo podemos mejorar esta encuesta la próxima vez? Ponte en contacto con tu responsable de sostenibilidad local, únete a la conversación en <a href="https://teams.microsoft.com/l/team/19%3a9c0f62e17e1e47fcb66e550eaf0062fc%40thread.tacv2/conversations?groupId=f97b959c-751c-4b45-93f8-e15596ffb2c5&tenantId=139f0669-cebb-42df-b9e3-415009ddb690" target="_blank">GL.Sustainability Team</a>.</p>
  `,
    fr: `<h3>Merci beaucoup pour votre contribution à cette enquête.</h3>
    <p>Your time is appreciated by us - and the planet!</p>
    <p>Vous êtes curieux de savoir comment vous pouvez intensifier vos efforts pour réduire nos émissions, vous avez une idée que vous aimeriez partager, ou vous voulez donner votre avis sur la façon dont nous pouvons améliorer cette enquête la prochaine fois ? Contactez votre référent local du développement durable, participez à la conversation au sein de l'équipe <a href="https://teams.microsoft.com/l/team/19%3a9c0f62e17e1e47fcb66e550eaf0062fc%40thread.tacv2/conversations?groupId=f97b959c-751c-4b45-93f8-e15596ffb2c5&tenantId=139f0669-cebb-42df-b9e3-415009ddb690" target="_blank">GL.Sustainability Team</a>.</p>
  `,
  'pt-BR': `<h3>Muito obrigado por sua opinião sobre esta pesquisa. </h3>
  <p>Seu tempo é muito importante para nós - e para o planeta!</p>
  <p>Está curioso para saber como você pode intensificar seus esforços para reduzir nossas emissões, tem uma ideia que gostaria de compartilhar ou quer dar um feedback sobre como podemos melhorar esta pesquisa da próxima vez? Entre em contato com o seu Campeão de Sustentabilidade local, participe da conversa no <a href="https://teams.microsoft.com/l/team/19%3a9c0f62e17e1e47fcb66e550eaf0062fc%40thread.tacv2/conversations?groupId=f97b959c-751c-4b45-93f8-e15596ffb2c5&tenantId=139f0669-cebb-42df-b9e3-415009ddb690" target="_blank">GL.Sustainability Team</a>.</p>
  `,
},
  showProgressBar: 'top',
  showPageNumbers: false,
  showQuestionNumbers: 'onPage',
  textUpdateMode: 'onBlur',
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
            default:
              `
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
            es: `<h2>Hola, ¡qué bueno verte por aquí!</h2>
            <p>Gracias por participar en el Programa Global Net Zero de Valtech. Al rellenar esta encuesta sobre su consumo de energía y sus desplazamientos en 2022, nos está ayudando a recopilar datos sobre las emisiones globales de Valtech.</p>
            <p>Tardarás entre 15 y 30 minutos en completarla. </p>
            <h4>Deberá proporcionar:</h4>
            <ul>
              <li>Si es posible, alguna información básica sobre el consumo de energía de su hogar, incluido su contrato de electricidad y su proveedor (por ejemplo, nombre del proveedor; si tiene un contrato de energía renovable).</li>
              <li>La ubicación o ubicaciones de su oficina Valtech en 2022 (si tenía una).</li>
              <li>Datos sobre tus desplazamientos en 2022.</li>
              <li>Datos sobre sus viajes de trabajo en 2022 (puede ser útil consultar las declaraciones de gastos o las reservas de viajes para recordarlo).</li>
            </ul>
            <h4>Tenga en cuenta lo siguiente:</h4>
            <ul>
              <li>Esta encuesta se basa en la plataforma SurveyJS, sobre la que Valtech ha creado una encuesta personalizada. </li>
              <li>Completar la encuesta no es obligatorio, pero cuantas más personas la completen, más precisa será nuestra huella de emisiones. </li>
              <li>Valtech te pedirá que inicies sesión para garantizar que solamente los Valtechies puedan acceder a la encuesta. </li>
              <li>Solo debe rellenar esta encuesta una vez. Si la envía por error, vuelva a rellenarla y envíela de nuevo. Esto sobrescribirá su respuesta original. </li>
              <li>Valtech no almacenará su nombre ni su dirección de correo electrónico junto con su respuesta. </li>
              <li>Aunque la encuesta pretende ser anónima, es posible que determinadas respuestas (por ejemplo, el mes de llegada) *nos permitan* determinar quién ha enviado una respuesta. Sin embargo, no atribuiremos las respuestas a personas concretas: el objetivo de esta encuesta es determinar nuestra huella global de emisiones y ayudarnos a entender dónde deberíamos centrar nuestros esfuerzos de reducción de emisiones. </li>
              <li>Asegúrese de no identificarse ni identificar a otros: evite mencionar nombres u otra información personal identificable en los campos de texto libre. </li>
              <li>Las preguntas marcadas con un asterisco rojo (*) requieren respuesta. </li>
              <li>Algunas preguntas pueden parecer granulares o un poco extrañas, pero toda esta información es necesaria para ayudar a calcular nuestras emisiones. </li>
              <li>Sus respuestas se almacenarán de forma segura en Microsoft SharePoint y se conservarán en Excel a efectos de análisis y contabilidad de emisiones. </li>
              <li>Para cumplir nuestros compromisos de la iniciativa Objetivos Científicos (SBTi), necesitamos hacer un seguimiento y gestionar nuestra huella de emisiones durante un largo periodo de tiempo. Por ello, las respuestas (excepto el mes concreto de llegada) se archivarán de forma segura al cabo de cinco (5) años, utilizando medidas de seguridad técnicas y organizativas. La necesidad de conservar los datos se evaluará al cabo de tres (3) años. </li>
              <li>Si tiene alguna pregunta sobre la encuesta o el Programa Net Zero, únase al equipo <a href="https://teams.microsoft.com/l/team/19%3a9c0f62e17e1e47fcb66e550eaf0062fc%40thread.tacv2/conversations?groupId=f97b959c-751c-4b45-93f8-e15596ffb2c5&tenantId=139f0669-cebb-42df-b9e3-415009ddb690" target="_blank">GL.Sustainability channel</a> y participe en el chat (puede ser útil para otras personas). También puede ponerse en contacto con el Defensor de la Sostenibilidad de su entidad o con nuestro Director Global de Sostenibilidad: <a href="mailto:kirstin.howard@valtech.com">kirstin.howard@valtech.com</a>.</li>
            </ul>
            <p></p>`,
            fr: `<h2>Bonjour - content de vous voir ici!</h2>
            <p>Merci de participer au programme Global Net Zero de Valtech. En répondant à cette enquête sur votre consommation d'énergie et vos habitudes de déplacement en 2022, vous nous aidez à recueillir des données sur les émissions globales de Valtech.</p>
            <p>Il vous faudra 15 à 30 minutes pour répondre à ce questionnaire. </p>
            <h4>Vous devrez fournir :</h4>
            <ul>
              <li>Si possible, quelques informations de base sur votre consommation d'énergie à la maison, y compris votre contrat d'électricité et votre fournisseur (par exemple, le nom du fournisseur ; si vous avez un contrat d'énergie renouvelable).</li>
              li>L'emplacement de votre bureau Valtech en 2022 (si vous en avez un).</li>
              <li> Les détails de votre trajet domicile-travail en 2022.</li>
              <li>Les détails de vos déplacements professionnels en 2022 (il peut être utile de consulter vos demandes de remboursement de frais ou vos réservations de voyage pour vous en souvenir).</li>
            </ul>
            <h4>Veuillez noter :</h4>
            <ul>
              <li> Cette enquête est basée sur la plateforme SurveyJS, sur laquelle Valtech a créé une enquête personnalisée. </li>
              <li> Il n'est pas obligatoire de répondre à l'enquête, mais plus il y aura de personnes qui y répondront, plus l'empreinte de nos émissions sera précise. </li>
              <li> Valtech vous demandera de vous connecter pour s'assurer que seuls les Valtech peuvent accéder à l'enquête. </li>
              <li> Vous ne devez répondre à cette enquête qu'une seule fois. Si vous la soumettez par erreur, veuillez la remplir à nouveau et la soumettre à nouveau. Votre réponse initiale sera alors écrasée. </li>
              <li> Valtech ne conservera pas votre nom ou votre adresse électronique avec votre réponse. </li>
              <li> Bien que l'enquête se veuille anonyme, il est possible que certaines réponses (par exemple le mois d'arrivée) *puissent* nous permettre de déterminer qui a soumis une réponse. Cependant, nous n'attribuerons pas les réponses à des individus : l'objectif de cette enquête est de déterminer notre empreinte globale en matière d'émissions et de nous aider à comprendre où nous devrions concentrer nos efforts de réduction des émissions. </li>
              <li> Veillez à ne pas vous identifier ou à identifier d'autres personnes : évitez de mentionner des noms ou d'autres informations personnellement identifiables dans les champs de texte libre. </li>
              <li> Les questions marquées d'un astérisque rouge (*) appellent des réponses. </li>\n<li> Certaines questions peuvent sembler granulaires ou un peu étranges, mais ces informations sont nécessaires pour calculer nos émissions. </li>
              <li> Vos réponses seront stockées en toute sécurité sur Microsoft SharePoint et conservées dans Excel à des fins d'analyse et de comptabilisation des émissions. </li>
              <li> Pour respecter nos engagements dans le cadre de l'initiative Science Based Targets (SBTi), nous devons suivre et gérer l'empreinte de nos émissions sur une longue période. Les réponses (à l'exception du mois d'arrivée spécifique) seront donc archivées en toute sécurité après cinq (5) ans, à l'aide de mesures de sécurité techniques et organisationnelles. La nécessité de conserver les données sera évaluée après trois (3) ans. </li>
              <li>Si vous avez des questions sur l'enquête ou le programme Net Zero, veuillez rejoindre l'équipe <a href="https://teams.microsoft.com/l/team/19%3a9c0f62e17e1e47fcb66e550eaf0062fc%40thread.tacv2/conversations?groupId=f97b959c-751c-4b45-93f8-e15596ffb2c5&tenantId=139f0669-cebb-42df-b9e3-415009ddb690" target="_blank">GL.Sustainability channel</a> et poster dans le chat (cela peut être utile à d'autres). Vous pouvez également contacter le champion du développement durable de votre entité ou notre directeur mondial du développement durable :  <a href="mailto:kirstin.howard@valtech.com">kirstin.howard@valtech.com</a>.</li>
            </ul>
            <p></p>`,
            'pt-BR':
              `<h2>Olá - bom ver você aqui!</h2>
              <p>Obrigado por fazer sua parte do Programa Global Net Zero da Valtech. Ao preencher esta pesquisa sobre seu uso de energia e práticas de viagem em 2022, você está nos ajudando a coletar dados sobre as emissões globais da Valtech.</p>
              <p>A pesquisa levará de 15 a 30 minutos para ser concluída. </p>
              <h4>Você precisará fornecer:</h4>
              <ul>
                <li>Se possível, algumas informações básicas sobre o uso de energia em sua residência, incluindo seu contrato de eletricidade e fornecedor (por exemplo, nome do fornecedor; se você tem um contrato de energia renovável).</li>
                <li>O(s) local(is) do seu escritório da Valtech em 2022 (se você tiver um).</li>
                <li>Detalhes sobre seu deslocamento para o trabalho em 2022.</li>
                <li>Detalhes sobre sua viagem de negócios em 2022 (pode ser útil consultar os pedidos de reembolso de despesas ou suas reservas de viagem para se lembrar).</li>
              </ul>
              <h4>Observação:</h4>
              <ul>
                <li> Esta pesquisa é baseada na plataforma SurveyJS, sobre a qual a Valtech criou uma pesquisa personalizada. </li>
                <li> O preenchimento da pesquisa não é obrigatório, mas quanto mais pessoas a preencherem, mais precisa será a nossa pegada de emissões. </li>
                <li> A Valtech solicitará que você faça login para garantir que somente os Valtechies possam acessar a pesquisa. </li>
                <li> Você só deve responder a esta pesquisa uma vez. Se você a enviar acidentalmente, preencha novamente e envie-a de novo. Isso substituirá sua resposta original. </li>
                <li> A Valtech não armazenará seu nome ou endereço de e-mail com sua resposta. </li>
                <li> Embora a pesquisa tenha a intenção de ser anônima, é possível que certas respostas (por exemplo, mês de chegada) *possam* nos permitir determinar quem enviou uma resposta. No entanto, não atribuiremos respostas a indivíduos: o objetivo desta pesquisa é determinar nossa pegada de emissões globais e nos ajudar a entender onde devemos concentrar nossos esforços de redução de emissões. </li>
                <li> Certifique-se de não identificar a si mesmo ou a outras pessoas: evite mencionar nomes ou outras informações de identificação pessoal nos campos de texto livre. </li>
                <li> As perguntas marcadas com um asterisco vermelho (*) exigem respostas. </li>\n<li> Algumas perguntas podem parecer granulares ou um pouco estranhas, mas todas essas informações são necessárias para ajudar a calcular nossas emissões. </li>
                <li> Suas respostas serão armazenadas com segurança no Microsoft SharePoint e mantidas no Excel para fins de análise e contabilidade de emissões. </li>
                <li> Para cumprir nossos compromissos da iniciativa Science Based Targets (SBTi), precisamos rastrear e gerenciar nossa pegada de emissões por um longo período de tempo. As respostas (exceto o mês específico de chegada) serão, portanto, arquivadas com segurança após cinco (5) anos, usando medidas de segurança técnicas e organizacionais. A necessidade de retenção dos dados será avaliada após três (3) anos. </li>
                <li>Se tiver alguma dúvida sobre a pesquisa ou o Programa Net Zero, junte-se à Equipe <a href="https://teams.microsoft.com/l/team/19%3a9c0f62e17e1e47fcb66e550eaf0062fc%40thread.tacv2/conversations?groupId=f97b959c-751c-4b45-93f8-e15596ffb2c5&tenantId=139f0669-cebb-42df-b9e3-415009ddb690" target="_blank">GL.Sustainability channel</a> e poste no chat (pode ser útil para outras pessoas). Como alternativa, entre em contato com o Campeão de Sustentabilidade da sua entidade ou com o nosso Diretor Global de Sustentabilidade: <a href="mailto:kirstin.howard@valtech.com">kirstin.howard@valtech.com</a>.</li>
              </ul>
              <p></p>`,
          },
        },
        {
          type: 'html',
          html: {
            default:
              `<h4>The small print:</h4>
              <p><small>We’re collaborating with an external consultancy, Avon Energy Partners (AEP), on this work. We are not gathering any personally identifiable information in this survey. For privacy reasons, be careful not to identify yourself unintentionally, or reference any clients or colleagues by name in your responses to the survey.</small></p>`,
            es: `<h4>La letra pequeña:</h4>
            <p>Valtech colabora en este trabajo con una consultora externa, Avon Energy Partners (AEP). Por razones de privacidad, le rogamos que no se identifique ni haga referencia a ningún cliente o colega por su nombre en las áreas de texto libre de la encuesta.</p>`,
            fr: `<h4>Les petits caractères :</h4>
            <p>Valtech collabore avec un consultant externe, Avon Energy Partners (AEP), sur ce travail. Pour des raisons de confidentialité, nous vous demandons de ne pas vous identifier ni de mentionner le nom de vos clients ou collègues dans les zones de texte libre de l'enquête.</p>`,
            'pt-BR':
            `<h4>As letras pequenas:</h4>
            <p>A Valtech está colaborando com uma consultoria externa, a Avon Energy Partners (AEP), neste trabalho. Por motivos de privacidade, não se identifique nem faça referência a nenhum cliente ou colega pelo nome nas áreas de texto livre da pesquisa.</p>`,
          },
        },
      ],
    },
    {
      name: 'valtech-employment-section',
      title: {
        default: 'Valtech employment',
        es: 'Sección de empleo de Valtech',
        fr: 'Section emploi Valtech',
        'pt-BR': 'Seção: o trabalho na Valtech',
      },
      description: {
        default:
          "Firstly, we're going to ask you about your working patterns and location in 2022. These are key inputs to emissions calculations!",
        es: 'En primer lugar, le preguntaremos sobre sus patrones de trabajo y ubicación en 2022. ¡Estos son insumos clave para los cálculos de emisiones!',
        fr: "Tout d'abord, nous allons vous poser des questions sur vos habitudes et vos lieux de travail en 2022. Ce sont des données clés pour le calcul des émissions !",
        'pt-BR':
          'Em primeiro lugar, vamos perguntar sobre seus padrões de trabalho e localização em 2022. Estes são os principais insumos para os cálculos de emissões!',
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
                es: '¿Cuándo empezó a trabajar en Valtech?',
                fr: 'Quand avez-vous commencé à travailler chez Valtech ?',
                'pt-BR': 'Quando você começou a trabalhar na Valtech?',
              },
              description: {
                default:
                  'If your company was acquired by Valtech, please answer according to when you started working at your original company.',
                es: 'Si su empresa fue adquirida por Valtech, responda de acuerdo con cuando comenzó a trabajar en su empresa original.',
                fr: "Si votre entreprise a été acquise par Valtech, veuillez répondre en fonction du moment où vous avez commencé à travailler dans votre entreprise d'origine.",
                'pt-BR':
                  'Se sua empresa foi adquirida pela Valtech, responda de acordo com quando você começou a trabalhar em sua empresa original.',
              },
              isRequired: true,
              choices: [
                {
                  value: 'Before 2022',
                  text: {
                    default: 'Before 2022',
                    es: 'Antes de 2022',
                    fr: 'Avant 2022',
                    'pt-BR': 'Antes de 2022',
                  },
                },
                {
                  value: 'During 2022',
                  text: {
                    default: 'During 2022',
                    es: 'Durante 2022',
                    fr: 'Courant 2022',
                    'pt-BR': 'Durante 2022',
                  },
                },
                {
                  value: 'During 2023',
                  text: {
                    default: 'During 2023',
                    es: 'Durante 2023',
                    fr: 'Courant 2023',
                    'pt-BR': 'Durante 2023',
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
                es: '¿En qué mes comenzó a trabajar en Valtech en ese año?',
                fr: 'En quel mois avez-vous commencé à travailler chez Valtech cette année-là ?',
                'pt-BR': 'Em que mês você começou a trabalhar na Valtech naquele ano?',
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
                es: '¿Trasladó su oficina base / normal de Valtech en 2022?',
                fr: 'Avez-vous changé de bureau "de base" Valtech en 2022 ?',
                'pt-BR': 'Você mudou seu escritório base / normal da Valtech em 2022?',
              },
              description: {
                default:
                  'By "base / normal office", we mean the Valtech office you officially formed a part of in 2022. This may or may not have been your closest office, geographically, but it should be the main Valtech office you went to in 2022 if / when you commuted.\n\nIf you don\'t havea base office, please select "No".',
                es: 'Por "oficina base / normal", nos referimos a la oficina de Valtech de la que formaste parte oficialmente en 2022. Esta puede o no haber sido su oficina más cercana, geográficamente, pero debería ser la oficina principal de Valtech a la que fue en 2022 si / cuando viajó.\n\nSi no tienes una oficina base, seleccione "No".',
                fr: 'Par "bureau de base", nous entendons le bureau de Valtech dont vous faisiez officiellement partie en 2022. Il s\'agit du bureau Valtech où vous vous êtes rendu le plus souvent en 2022.\n\nSi vous n\'avez pas de bureau de base, veuillez sélectionner "Non".',
                'pt-BR':
                  'Por "escritório base / normal", queremos dizer o escritório da Valtech do qual você fez parte oficialmente em 2022. Este pode ou não ter sido o seu escritório mais próximo, geograficamente, mas deve ser o escritório principal da Valtech que você visitou em 2022 se / quando você comutou.\n\nSe você não tiver um escritório base, selecione "Não".',
              },
              defaultValue: 'false',
              isRequired: true,
            },
            {
              type: 'dropdown',
              name: 'employment_base-office-location',
              title: {
                default: 'Which was your base / normal Valtech office in 2022?',
                es: '¿Cuál era su oficina base / normal de Valtech en 2022?',
                fr: 'Quel était votre bureau "de base" Valtech en 2022 ?',
                'pt-BR': 'Qual era o seu escritório base / normal da Valtech em 2022?',
              },
              description: {
                default:
                  'If your contract shows that you are based 100% at home, please select "I don\'t have a base office"',
                es: 'Si su contrato muestra que usted está basado 100% en casa, por favor seleccione "No tengo una oficina base"',
                fr: 'Si votre contrat montre que vous êtes 100% en télétravail (full remote), veuillez sélectionner "Je n\'ai pas de bureau de base".',
                'pt-BR':
                  'Se o seu contrato disser que você está 100% em casa, selecione "Eu não tenho um escritório base"',
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
                es: 'Oficina diferente',
                fr: 'Bureau différent',
                'pt-BR': 'escritório diferente',
              },
              otherText: {
                default: 'Other (please specify)',
                es: 'Otro (especifique)',
                fr: 'Autre (veuillez préciser)',
                'pt-BR': 'Outro (especifique)',
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
                    es: '¿Cuál era la oficina de Valtech base / normal que tenía a principios de 2022?',
                    fr: 'Quel était le bureau de base de Valtech que vous aviez au début de 2022 ?',
                    'pt-BR': 'Qual era o escritório base / normal da Valtech que você tinha no início de 2022?',
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
                    es: 'Oficina diferente',
                    fr: 'Bureau différent',
                    'pt-BR': 'escritório diferente',
                  },
                  otherText: {
                    default: 'Other (please specify)',
                    es: 'Otro (especifique)',
                    fr: 'Autre (veuillez préciser)',
                    'pt-BR': 'Outro (especifique)',
                  },
                },
                {
                  type: 'dropdown',
                  name: 'employment_base-office-location-new',
                  title: {
                    default: 'Which was the base / normal Valtech office you moved to during the course of 2022?',
                    es: '¿Cuál fue la oficina base / normal de Valtech a la que se mudó durante el transcurso de 2022?',
                    fr: "Quel était le bureau de base Valtech dans lequel vous avez déménagé au cours de l'année 2022 ?",
                    'pt-BR':
                      'Qual foi o escritório base / normal da Valtech para o qual você se mudou durante o ano de 2022?',
                  },
                  description: {
                    default:
                      'If you moved offices more than once in 2022, please select the office you ended the year in.',
                    es: 'Si mudó oficinas más de una vez en 2022, seleccione la oficina en la que terminó el año.',
                    fr: "Si vous avez déménagé plus d'une fois en 2022, veuillez sélectionner le bureau dans lequel vous avez terminé l'année.",
                    'pt-BR':
                      'Se você mudou de escritório mais de uma vez em 2022, selecione o escritório em que terminou o ano.',
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
                    es: 'Oficina diferente',
                    fr: 'Bureau différent',
                    'pt-BR': 'escritório diferente',
                  },
                  otherText: {
                    default: 'Other (please specify)',
                    es: 'Otro (especifique)',
                    fr: 'Autre (veuillez préciser)',
                    'pt-BR': 'Outro (especifique)',
                  },
                },
              ],
            },
            {
              type: 'dropdown',
              name: 'employment_business-unit',
              title: {
                default: 'Which Valtech business unit / service line / team do you work for?',
                es: '¿Para qué unidad de negocio / línea de servicio / equipo de Valtech trabaja?',
                fr: 'Pour quelle unité commerciale/ligne de service/ équipe Valtech travaillez-vous ?',
                'pt-BR': 'Para qual unidade de negócios / linha de serviço / equipe da Valtech você trabalha?',
              },
              description: {
                default:
                  'This is the team you work for, day-to-day, irrespective of where you live. For example, you might live in Germany but work for Valtech France. Please look at the whole list before answering.',
                es: 'Este es el equipo para el que trabajas, día a día, independientemente de dónde vivas. Por ejemplo, puedes vivir en Alemania, pero trabajar para Valtech Francia. Por favor, mire toda la lista antes de responder.',
                fr: "C'est l'équipe pour laquelle vous travaillez, au jour le jour, quel que soit l'endroit où vous vivez. Par exemple, vous pourriez vivre en Allemagne mais travailler pour Valtech France. Veuillez consulter la liste complète avant de répondre.",
                'pt-BR':
                  'Esta é a equipe para a qual você trabalha, no dia-a-dia, independentemente de onde você mora. Por exemplo, você pode morar na Alemanha, mas trabalhar para a Valtech França. Veja a lista completa antes de responder.',
              },
              isRequired: true,
              choicesByUrl: {
                url: 'choices/business-units.json',
                valueName: 'id',
                titleName: 'title',
              },
              placeholder: {
                default: 'Select your business unit...',
                es: 'Seleccione su unidad de negocio...',
                fr: "Sélectionnez votre unité d'affaires...",
                'pt-BR': 'Selecione sua unidade de negócios...',
              },
            },
            {
              type: 'dropdown',
              name: 'employment_home-country',
              title: {
                default: 'Which country did you live in, in 2022?',
                es: '¿En qué país vivió en 2022?',
                fr: 'Dans quel pays avez-vous vécu en 2022 ?',
                'pt-BR': 'Em que país você morou, em 2022?',
              },
              description: {
                default:
                  'This will help us to determine the emission intensity of your local grid. If you split your working time between houses in different areas / countries, or moved area / country during 2022, please answer according to the location in which you spent the majority of the year.',
                es: 'Esto nos ayudará a determinar la intensidad de emisión de su red local. Si dividió su tiempo de trabajo entre casas en diferentes áreas / países, o se mudó de área / país durante 2022, responda de acuerdo con la ubicación en la que pasó la mayor parte del año.',
                fr: "Cela nous aidera à déterminer l'intensité des émissions de votre réseau électrique local. Si vous partagez votre temps de travail entre des maisons situées dans différentes zones / pays ou vous avez démenagé dans une zone / un pays différent(e) en 2022, veuillez répondre en fonction du lieu où vous avez passé la majeure partie de l'année.",
                'pt-BR':
                  'Isso nos ajudará a determinar a intensidade de emissão de sua rede local. Se você dividir seu tempo de trabalho entre casas em diferentes áreas / países ou mudou de área / país durante 2022, responda de acordo com o local em que passou a maior parte do ano.',
              },
              isRequired: true,
              choicesByUrl: {
                url: 'choices/countries-for-regions.json',
                valueName: 'id',
                titleName: 'title',
              },
              placeholder: {
                default: 'Select your country...',
                es: 'Seleccione su país…',
                fr: 'Sélectionnez votre pays...',
                'pt-BR': 'Selecione seu país...',
              },
              showOtherItem: true,
              otherPlaceholder: {
                default: 'Different country',
                es: 'Oficina diferente',
                fr: 'Bureau différent',
                'pt-BR': 'escritório diferente',
              },
              otherText: {
                default: 'Other (please specify)',
                es: 'Otro (especifique)',
                fr: 'Autre (veuillez préciser)',
                'pt-BR': 'Outro (especifique)',
              },
            },
            {
              type: 'dropdown',
              name: 'employment_home-region',
              visible: false,
              visibleIf: '{employment_home-country} != "" && {employment_home-country} != "other"',
              title: {
                default: 'Which province / state / county / region did you live in in 2022, within your country?',
                es: '¿En qué provincia / estado / condado / región vivió en 2022, dentro de su país?',
                fr: 'Dans quelle province / état/comté / région viviez-vous en 2022, dans votre pays ?',
                'pt-BR': 'Em que província / estado / condado / região você morou em 2022, dentro do seu país?',
              },
              description: {
                default:
                  'This helps us calculate your emissions with greater accuracy, as energy mixes can vary significantly between areas of a country. If you split your working time between houses in different areas / countries, or moved area / country during 2022, please answer according to the location in which you spent the majority of the year.',
                es: 'Esto nos ayuda a calcular sus emisiones con mayor precisión, ya que las mezclas de energía pueden variar significativamente entre las áreas de un país. Si dividió su tiempo de trabajo entre casas en diferentes áreas / países, o se mudó de área / país durante 2022, responda de acuerdo con la ubicación en la que pasó la mayor parte del año.',
                fr: "Cela nous aide à calculer vos émissions avec une plus grande précision, car les mix énergétiques peuvent varier considérablement d'une région à l'autre d'un pays. Si vous partagez votre temps de travail entre des maisons situées dans différentes zones / pays ou vous avez démenagé dans une zone / un pays différent(e) en 2022, veuillez répondre en fonction du lieu où vous avez passé la majeure partie de l'année.",
                'pt-BR':
                  'Isso nos ajuda a calcular suas emissões com maior precisão, pois a mistura de energias pode variar significativamente entre as áreas de um país. Se você dividir seu tempo de trabalho entre casas em diferentes áreas / países ou mudou de área / país durante 2022, responda de acordo com o local em que passou a maior parte do ano.',
              },
              isRequired: true,
              choicesByUrl: {
                url: 'choices/regions-{employment_home-country}.json',
                valueName: 'id',
                titleName: 'title',
              },
              placeholder: {
                default: 'Select your region...',
                es: 'Seleccione su región...',
                fr: 'Sélectionnez votre région...',
                'pt-BR': 'Selecione sua região...',
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
            es: 'En 2022, en promedio, ¿cuántos días trabajó por semana, en una semana típica?',
            fr: 'En 2022, en moyenne, combien de jours avez-vous travaillés par semaine, dans une semaine typique ?',
            'pt-BR': 'Em 2022, em média, quantos dias você trabalhou por semana, em uma semana típica?',
          },
          description: {
            default:
              "Please **don't** factor in any significant periods of time off work here (e.g. on sick leave). Just give your standard working pattern. If your working pattern changed during 2022, please just give your best estimate as to the average number of days you worked per week that year.",
            es: 'Por favor, **no** tenga en cuenta los períodos significativos de tiempo fuera del trabajo aquí (por ejemplo, con licencia por enfermedad). Simplemente dé su patrón de trabajo estándar. Si su patrón de trabajo cambió durante 2022, simplemente dé su mejor estimación en cuanto a la cantidad promedio de días que trabajó por semana ese año.',
            fr: 'Veuillez **ne pas** tenir compte des périodes de congé importantes (par exemple, un congé de maladie). Donnez simplement votre modèle de travail standard. Si votre rythme de travail a changé en 2022, veuillez simplement donner votre meilleure estimation du nombre moyen de jours de travail par semaine cette année-là.',
            'pt-BR':
              'Por favor, **não** considere quaisquer períodos significativos de afastamento do trabalho aqui (por exemplo, em licença médica). Forneça apenas seu padrão de modelo de trabalho. Se o seu modelo de trabalho mudou durante 2022, forneça sua melhor estimativa quanto ao número médio de dias que você trabalhou por semana naquele ano.',
          },
          isRequired: true,
          rateMin: 0.5,
          rateMax: 5,
          rateStep: 0.5,
          maxRateDescription: {
            default: 'days per week',
            es: 'días por semana',
            fr: 'jours par semaine',
            'pt-BR': 'dias por semana',
          },
        },
        {
          type: 'rating',
          name: 'employment_working-hours-per-day',
          visibleIf: '{employment_start-date-year} != "During 2023"',
          title: {
            default: 'On an average working day in 2022, how many hours did you work?',
            es: 'En un día laboral promedio en 2022, ¿cuántas horas trabajó?',
            fr: "Sur une journée de travail moyenne en 2022, combien d'heures travailliez-vous ?",
            'pt-BR': 'Em um dia de trabalho médio em 2022, quantas horas você trabalhou?',
          },
          description: {
            default:
              'Please estimate the number of hours you worked on a normal working day. If your working pattern changed substantially during the year (e.g. you went from working 8 hours each day for the first half of 2022 to 4 hours each day for the second half of 2022), please do your best to work out a rough average (in this example, it would be 6 hours a day).',
            es: 'Por favor, calcule el número de horas que trabajó en un día normal de trabajo. Si su patrón de trabajo cambió sustancialmente durante el año (por ejemplo, pasó de trabajar 8 horas al día durante la primera mitad de 2022 a 4 horas al día durante la segunda mitad de 2022), haga todo lo posible para calcular un promedio aproximado (en este ejemplo, serían 6 horas al día).',
            fr: "Veuillez estimer le nombre d'heures que vous avez travaillé au cours d'une journée de travail normal. Si votre rythme de travail a considérablement changé au cours de l'année (par exemple, vous êtes passé de 8 heures de travail par jour au premier semestre 2022 à 4 heures par jour au second semestre 2022), veuillez faire de votre mieux pour calculer une moyenne approximative (dans cet exemple, il s'agirait de 6 heures par jour).",
            'pt-BR':
              'Por favor, estime o número de horas que você trabalhou em um dia normal de trabalho. Se o seu modelo de trabalho mudou substancialmente durante o ano (por exemplo, você passou de 8 horas por dia no primeiro semestre de 2022 para 4 horas por dia no segundo semestre de 2022), por favor faça o seu melhor para calcular uma média aproximada (neste exemplo, seriam 6 horas por dia).',
          },
          isRequired: true,
          rateMax: 12,
          maxRateDescription: {
            default: 'hours per day',
            es: 'horas por día',
            fr: 'heures par jour',
            'pt-BR': 'horas por dia',
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
                es: '¿Tomó una cantidad significativa de tiempo libre (un total de 1 mes o más) en 2022, que no formó parte de sus vacaciones anuales?',
                fr: 'Avez-vous pris un congé important (totalisant 1 mois ou plus) en 2022, qui ne faisait pas partie de votre congé annuel ?',
                'pt-BR':
                  'Você tirou um período significativo de folga do trabalho (totalizando 1 mês ou mais) em 2022, que não fazia parte de suas férias anuais?',
              },
              description: {
                default:
                  "This might have been for maternity / paternity / shared parental leave, sick leave, sabbatical etc. We're asking this because we're trying to understand the overall picture of emissions generated when working from home. Significant periods of absence need to be deducted from our total individual emissions. \n\nPlease account for any substantial time cumulatively (e.g. you took 3 weeks in January and 2 weeks in June = 5 weeks total, which you'd round down to 1 month, or you took 6 months in one block).",
                es: 'Esto podría haber sido por maternidad / paternidad / licencia parental compartida, licencia por enfermedad, año sabático, etc. Estamos preguntando esto porque estamos tratando de comprender el panorama general de las emisiones generadas cuando se trabaja desde casa. Los períodos significativos de ausencia deben deducirse de nuestras emisiones individuales totales.\n\nPor favor, tenga en cuenta cualquier tiempo sustancial acumulado (por ejemplo, tomó 3 semanas en enero y 2 semanas en junio = 5 semanas en total, que redondearía a 1 mes, o tomó 6 meses en un bloque).',
                fr: "Il peut s'agir d'un congé de maternité / paternité /parental partagé, d'un congé de maladie, d'un congé sabbatique, etc. Nous posons cette question parce que nous essayons de comprendre l'image globale des émissions générées par le travail à domicile. Des périodes d'absence importantes doivent être déduites de nos émissions individuelles totales.\n\nVeuillez tenir compte de tout temps important cumulé (par exemple, vous avez pris 3 semaines en janvier et 2 semaines en juin = 5 semaines au total, que vous arrondiriez à 1 mois).",
                'pt-BR':
                  'Isso pode ter sido para licença maternidade / paternidade / parental compartilhada, licença médica, licença sabática, etc. Estamos perguntando isso porque estamos tentando entender o quadro geral das emissões geradas quando se trabalha em casa. Períodos significativos de ausência precisam ser deduzidos de nossas emissões individuais totais.\n\nPor favor, contabilize qualquer tempo substancial cumulativamente (por exemplo, você tirou 3 semanas em janeiro e 2 semanas em junho = 5 semanas no total, o que você arredondaria para 1 mês, ou você tirou 6 meses em um bloco).',
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
                es: '¿Cuántos meses tomó fuera del trabajo en total en 2022, *no* incluidas sus vacaciones anuales?',
                fr: 'Combien de mois avez-vous pris comme congé au total en 2022, *sans* compter vos congés annuels ?',
                'pt-BR':
                  'Quantos meses de folga você tirou do trabalho no total em 2022, *não* incluindo suas férias anuais?',
              },
              description: {
                default: 'Please estimate this to the nearest whole month.',
                es: 'Por favor, calcule esto al mes entero más cercano.',
                fr: 'Veuillez arrondir au mois entier le plus proche.',
                'pt-BR': 'Por favor, estime isso para o mês inteiro mais próximo.',
              },
              isRequired: true,
              rateMax: 12,
              maxRateDescription: {
                default: 'months',
                es: 'meses',
                fr: 'mois',
                'pt-BR': 'meses',
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
            es: 'Pensando solo en los días que *trabajó* en 2022, ¿cómo dividió su tiempo de trabajo entre estas actividades?',
            fr: 'En pensant uniquement aux jours où vous *avez* travaillé en 2022, comment avez-vous réparti votre temps de travail entre ces activités ?',
            'pt-BR':
              'Pensando apenas nos dias em que você *trabalhou* em 2022, como você dividiu seu tempo de trabalho entre essas atividades?',
          },
          description: {
            default:
              'The total must sum to 100%. Please round up to the nearest 5%. For example, even if you only took one flight for business in 2022, please put 5% against business travel.',
            es: 'El total debe sumar 100%. Por favor redondee al 5% más cercano. Por ejemplo, incluso si solo tomaste un vuelo de negocios en 2022, pon un 5% en contra de los viajes de negocios.',
            fr: "Le total doit être de 100%. Veuillez arrondir à 5% près. Par exemple, même si vous n'avez pris qu'un seul vol pour affaires en 2022, veuillez mettre 5% en voyages d'affaires.",
            'pt-BR':
              'O total deve somar 100%. Arredonde para os 5% mais próximos. Por exemplo, mesmo que você tenha pegado apenas um voo para negócios em 2022, liste 5% em viagens de negócios.',
          },
          isRequired: true,
          validators: [
            {
              type: 'expression',
              text: {
                default: 'Total share can not exceed 100%!',
                es: '¡La participación total no puede exceder el 100%!    * TEXTO DE ERROR INFERIOR AL 100%',
                fr: "la part totale ne peut pas dépasser 100% !* TEXTE D'ERREUR INFÉRIEUR à 100%",
                'pt-BR': 'A participação total não pode exceder 100%!* TEXTO DE ERRO ABAIXO de 100%',
              },
              expression:
                '{employment_working-pattern-split.home.sharePercentage} + {employment_working-pattern-split.baseOffice.sharePercentage} + {employment_working-pattern-split.otherOffice.sharePercentage} + {employment_working-pattern-split.client.sharePercentage} + {employment_working-pattern-split.businessTravel.sharePercentage} <= 100',
            },
            {
              type: 'expression',
              text: {
                default: 'Total share should be 100%!',
                es: '¡La participación total debe ser del 100%!',
                fr: 'la part totale doit être de 100% !',
                'pt-BR': 'A participação total deve ser de 100%!',
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
                es: 'Porcentaje de división',
                fr: 'Répartition en pourcentage',
                'pt-BR': 'Porcentagem dividida',
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
                es: 'Trabajar desde casa',
                fr: 'Travail à domicile (remote)',
                'pt-BR': 'Trabalhar em casa',
              },
            },
            {
              value: 'baseOffice',
              text: {
                default: 'Working from your base Valtech office',
                es: 'Trabajando desde su oficina base de Valtech',
                fr: 'Travail dans votre bureau de base Valtech',
                'pt-BR': 'Trabalhar em seu escritório base da Valtech',
              },
            },
            {
              value: 'otherOffice',
              text: {
                default: 'Working from a different Valtech office (not your base / normal office)',
                es: 'Trabajar desde una oficina de Valtech diferente (no su oficina base / normal)',
                fr: 'Travail dans un autre bureau Valtech',
                'pt-BR': 'Trabalhar em um escritório da Valtech diferente (não em sua base /escritório normal)',
              },
            },
            {
              value: 'client',
              text: {
                default: 'Working from a client office as part of your standard working pattern',
                es: 'Trabajar desde una oficina del cliente como parte de su patrón de trabajo estándar',
                fr: "Travail à partir d'un bureau client",
                'pt-BR': 'Trabalhar no escritório do cliente como parte de seu modelo de trabalho padrão',
              },
            },
            {
              value: 'businessTravel',
              text: {
                default: 'Travelling on business (e.g. to an event)',
                es: '',
                fr: "Voyage d'affaires (ex. pour un événement)",
                'pt-BR': 'Viajar a negócios (por exemplo, para um evento)',
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
        es: 'Sección Trabajar desde casa',
        fr: 'Section Travail à domicile',
        'pt-BR': 'Seção trabalhar em casa',
      },
      description: {
        default: "We're now going to ask you a bit about your working from home patterns in 2022.",
        es: 'Ahora vamos a preguntarle un poco sobre sus patrones de trabajo desde casa en 2022.',
        fr: 'Nous allons maintenant vous poser quelques questions sur vos habitudes de travail à domicile en 2022.',
        'pt-BR': 'Agora vamos perguntar um pouco sobre seus modelos de trabalho em casa em 2022.',
      },
      visibleIf: '{employment_working-pattern-split.home.sharePercentage} > 0',
      elements: [
        {
          type: 'dropdown',
          name: 'wfh-emissions_home-type',
          title: {
            default: 'What type of home do you live in?',
            es: '¿En qué tipo de vivienda vive?',
            fr: 'Quel est votre type de domicile ?',
            'pt-BR': 'Em que tipo de casa você mora?',
          },
          description: {
            default:
              'If you moved home in 2022, please tell us about the home you were in at the end of the year. If you split your time between more than one home, please tell us about the one you spent the most time in, in 2022.',
            es: 'Si se mudó a casa en 2022, cuéntenos sobre la casa en la que se encontraba al final del año. Si dividiste tu tiempo entre más de un alojamiento, cuéntanos cuál fue en el que pasaste más tiempo, en 2022.',
            fr: "Si vous avez déménagé en 2022, parlez-nous de la maison où vous avez passé le plus de temps. Si vous partagez votre temps entre plus d'un logement, veuillez nous parler de celui dans lequel vous avez passé le plus de temps en 2022.",
            'pt-BR':
              'Se você se mudou de casa em 2022, conte-nos sobre a casa em que estava no final do ano. Se você dividiu seu tempo entre mais de uma casa, conte-nos sobre a que você passou mais tempo em 2022.',
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
            es: 'Cuando trabajaba desde casa en 2022, en promedio, ¿cuántas personas tendían a trabajar desde casa en su hogar (*incluido* usted)?',
            fr: 'En 2022, combien de personnes en moyenne travaillaient à votre domicile chaque jour (vous compris) ?',
            'pt-BR':
              'Quando você estava trabalhando em casa em 2022, em média, quantas pessoas costumavam trabalhar em casa na sua casa (*incluindo* você)?',
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
            es: 'persona(s)',
            fr: 'personne(s)',
            'pt-BR': 'pessoa(s)',
          },
        },
        {
          type: 'text',
          name: 'wfh-emissions_electricity-supplier-name',
          title: {
            default: 'What is the name of the current electricity supplier for your home?',
            es: '¿Cuál es el nombre del proveedor de electricidad actual para su hogar?',
            fr: "Quel est le nom du fournisseur d'électricité actuel pour votre maison ?",
            'pt-BR': 'Qual é o nome do atual fornecedor de eletricidade da sua casa?',
          },
          description: {
            default:
              "Please let us know the name of the company or state provider that supplies you with your home electricity. You should be able to find this on your electricity bill. If you don't know or don't want to say, please leave this blank. If you're not connected to mains electricity at all, please type \"off grid\".",
            es: 'Por favor, háganos saber el nombre de la compañía o proveedor estatal que le suministra la electricidad de su hogar. Usted debe ser capaz de encontrar esto en su factura de electricidad. Si usted no sabe o no quiere decir, por favor deje esto en blanco. Si no está conectado a la red eléctrica, escriba "fuera de la red".',
            fr: "Veuillez nous indiquer le nom de l'entreprise ou du fournisseur d'État qui vous fournit l'électricité à domicile. Vous devriez pouvoir le trouver sur votre facture d'électricité. Si vous ne savez pas ou ne voulez pas le dire, veuillez laisser ce champ vide. Si vous n'êtes pas connecté au réseau électrique du tout, veuillez taper \"hors réseau\".",
            'pt-BR':
              'Por favor, informe-nos o nome da empresa ou provedor estadual que lhe fornece a eletricidade de sua casa. Você deve conseguir encontrar esta informação em sua conta de luz. Se você não sabe ou não quer dizer, por favor, deixe em branco. Se você não estiver conectado à rede elétrica, digite "off grid".',
          },
        },
        {
          type: 'panel',
          name: 'wfh-emissions_electricity-supplier-renewable-group',
          title: {
            default: "We're now going to ask you about whether your electricity supply is renewable.",
            es: 'Ahora le preguntaremos si usa energía renovable.',
            fr: 'Nous allons maintenant vous demander si vous utilisez des énergies renouvelables.',
            'pt-BR': 'Agora vamos perguntar se você o seu suprimento de energia é renovável.',
          },
          description: {
            default:
              'Renewable energy is energy produced from sources like the sun and wind that are naturally replenished and do not run out.',
            es: 'La energía renovable es energía producida a partir de fuentes como el sol y el viento que se reponen naturalmente y no se agotan.',
            fr: "L'énergie renouvelable est l'énergie produite à partir de sources comme le soleil et le vent qui sont naturellement reconstitués et ne s'épuisent pas.",
            'pt-BR':
              'A energia renovável é a energia produzida a partir de fontes como o sol e o vento, que são naturalmente reabastecidas e não se esgotam.',
          },
          elements: [
            {
              type: 'radiogroup',
              name: 'wfh-emissions_electricity-supplier-renewable',
              title: {
                default: 'Is the electricity you receive from your electricity supplier certified 100% renewable?',
                es: '¿La electricidad que recibe de su proveedor de electricidad está certificada como 100% renovable?',
                fr: "L'électricité que vous recevez de votre fournisseur d'électricité est-elle certifiée 100% renouvelable ?",
                'pt-BR':
                  'A eletricidade que você recebe do seu fornecedor de eletricidade é certificada 100% renovável?',
              },
              description: {
                default:
                  'If you have an electricity bill, check to see whether you\'re on a renewable electricity (or "green") contract. Some suppliers may **only** provide renewable electricity while others offer specific contracts which are based on renewable electricity. If you don\'t know, please say "no"',
                es: 'Si tiene una factura de electricidad, verifique si tiene un contrato de electricidad renovable (o "verde"). Algunos proveedores pueden **solo** proporcionar electricidad renovable, mientras que otros ofrecen contratos específicos basados en electricidad renovable. Si no lo sabe, por favor diga "no".',
                fr: "Si vous avez une facture d'électricité, vérifiez si vous êtes sur un contrat d'électricité renouvelable (ou \"vert\"). Certains fournisseurs peuvent **seulement** fournir de l'électricité renouvelable, tandis que d'autres proposent des contrats spécifiques basés sur l'électricité renouvelable. Si vous ne le savez pas, dites \"non\".",
                'pt-BR':
                  'Se você tiver uma conta de eletricidade, verifique se você está em um contrato de eletricidade renovável (ou "verde"). Alguns fornecedores podem **apenas** fornecer eletricidade renovável, enquanto outros oferecem contratos específicos baseados em eletricidade renovável. Se você não sabe, por favor diga "não".',
              },
              isRequired: true,
              choices: [
                {
                  value: 'Yes',
                  text: {
                    default: 'Yes',
                    es: 'Sí',
                    fr: 'Oui',
                    'pt-BR': 'Sim',
                  },
                },
                {
                  value: 'No',
                  text: {
                    default: 'No',
                    es: 'No',
                    fr: 'Non',
                    'pt-BR': 'Não',
                  },
                },
                {
                  value: "I don't know",
                  text: {
                    default: "I don't know",
                    es: 'No lo sé',
                    fr: 'Je ne sais pas',
                    'pt-BR': 'Não sei',
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
                    es: '¿Cambió su proveedor de electricidad o contrato a esta opción renovable ("energía verde") dentro del año calendario 2022?',
                    fr: 'Avez-vous changé votre fournisseur d\'électricité ou votre contrat pour cette option renouvelable ("énergie verte") au cours de l\'année civile 2022 ?',
                    'pt-BR':
                      'Você mudou seu fornecedor de eletricidade ou contrato para esta opção renovável ("energia verde") dentro do ano civil de 2022?',
                  },
                  description: {
                    default:
                      'If you swapped between two or more 100% renewable energy contracts / providers within 2022, please select "no", as the emissions will not change.',
                    es: 'Si intercambió entre dos o más contratos / proveedores de energía 100% renovable dentro de 2022, seleccione "no", ya que las emisiones no cambiarán.',
                    fr: 'Si vous avez échangé entre deux contrats ou fournisseurs d’énergie 100 % renouvelable ou plus en 2022, veuillez sélectionner « non », car les émissions ne changeront pas.',
                    'pt-BR':
                      'Se você trocou entre dois ou mais contratos / provedores de energia 100% renovável dentro de 2022, selecione "não", pois as emissões não mudarão.',
                  },
                  isRequired: true,
                  choices: [
                    {
                      value:
                        'Yes, I started on my renewable electricity contract / supplier **within** the 2022 calendar year.',
                      text: {
                        default:
                          'Yes, I started on my renewable electricity contract / supplier **within** the 2022 calendar year.',
                        es: 'Sí, comencé con mi contrato / proveedor de electricidad renovable **dentro del** año calendario 2022.',
                        fr: "Oui, j'ai commencé mon contrat / fournisseur d'électricité renouvelable **dans** l'année civile 2022.",
                        'pt-BR':
                          'Sim, iniciei meu contrato / fornecedor de eletricidade renovável **dentro** do ano civil de 2022.',
                      },
                    },
                    {
                      value: 'No, I started on my renewable electricity contract / supplier **before** 2022.',
                      text: {
                        default: 'No, I started on my renewable electricity contract / supplier **before** 2022.',
                        es: 'No, comencé con mi contrato / proveedor de electricidad renovable **antes de** 2022.',
                        fr: "Non, j'ai commencé sur mon contrat / fournisseur d'électricité renouvelable **avant** 2022.",
                        'pt-BR': 'Não, iniciei meu contrato / fornecedor de eletricidade renovável **antes** de 2022.',
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
                    es: '¿En qué mes de 2022 cambió a un proveedor / contrato de electricidad renovable?',
                    fr: "Au cours de quel mois de 2022 êtes-vous passé à un fournisseur / contrat d'électricité renouvelable ?",
                    'pt-BR': 'Em que mês de 2022 você mudou para um fornecedor / contrato de eletricidade renovável?',
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
            es: 'Ahora le preguntaremos si genera alguna de su propia electricidad en casa.',
            fr: 'Nous allons maintenant vous demander si vous produisez votre propre électricité à la maison',
            'pt-BR': 'Agora nós vamos perguntar se você gerou alguma da sua própria eletricidade em casa.',
          },
          elements: [
            {
              type: 'boolean',
              name: 'wfh-emissions_electricity-generation',
              title: {
                default: 'Did you generate any of your own electricity at home in 2022?',
                es: '¿Generó alguna de su propia electricidad en casa en 2022?',
                fr: 'Avez-vous produit votre propre électricité à la maison en 2022 ?',
                'pt-BR': 'Você gerou alguma da sua própria electricidade em casa em 2022?',
              },
              description: {
                default:
                  'This means any electricity generated at your home / building. E.g. solar or a diesel generator. This is  separate from your energy supply from a provider (the grid).',
                es: 'Esto significa cualquier electricidad generada en su casa / edificio. Ej. solar o un generador diésel. Esto es independiente de su suministro de energía de un proveedor (la red).',
                fr: 'Cela inclut toute forme d’électricité produite chez vous. Par exemple, solaire ou via un générateur au diesel. Excluant tout approvisionnement d’énergie via un fournisseur (réseau électrique).',
                'pt-BR':
                  'Isso quer dizer qualquer eletricidade gerada na sua casa / prédio. Por exemplo, gerador solar ou diesel. Isto é separado do seu suprimento de energia do provedor (da rede).',
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
                es: '¿Qué opciones describen mejor cómo genera electricidad desde su casa o edificio?',
                fr: "Quelles options décrivent le mieux la façon dont vous produisez de l'électricité depuis de votre maison ?",
                'pt-BR': 'Quais opções melhor descrevem como você gera eletricidade da sua casa ou prédio?',
              },
              description: {
                default:
                  'Select the options that best describe how you generate your electricity (both renewable and non-renewable). If "other", please describe your generation method. Note: we also need to know about any back-up generators used occasionally over the course of the year.',
                es: 'Seleccione las opciones que mejor describan cómo genera su electricidad (renovable y no renovable). Si es "otro", por favor describa su método de generación. Nota: también necesitamos saber sobre cualquier generador de respaldo utilizado ocasionalmente a lo largo del año.',
                fr: 'Sélectionnez les options qui décrivent le mieux la façon dont vous produisez votre électricité (renouvelable et non renouvelable). Si vous avez choisi "autre", veuillez décrire votre méthode de production. Remarque : nous avons également besoin de connaître les générateurs de secours utilisés occasionnellement au cours de l\'année.',
                'pt-BR':
                  'Selecione as opções que descrevem melhor como você gera sua eletricidade (ambas renováveis e não-renováveis). Se "outra", por favor descreva seu métodos de geração. Nota: nós também precisamos saber sobre qualquer gerador de back-up usado ocasionalmente ao longo do ano.',
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
                es: '¿Cómo se dividió su consumo de electricidad entre la electricidad suministrada desde la red, la electricidad generada a partir de fuentes renovables y la electricidad generada a partir de fuentes no renovables?',
                fr: "Comment votre consommation d'électricité se répartit-elle entre l'électricité fournie par le réseau, l'électricité que vous produisez à partir de sources renouvelables et l'électricité que vous produisez à partir de sources non renouvelables ?",
                'pt-BR':
                  'Como foi a divisão do seu uso de energia entre eletricidade fornecida pela rede, eletricidade que você gerou de fontes renovávceis e eletricidade que você gerou de fontes não-renováveis?',
              },
              description: {
                default:
                  'Estimate as best you can the split of electricity used over 2022. Ensure it adds up to 100%. "Renewables" refers to electricity generated from solar, wind, biomass, and water."Non-renewables" refers to electricity generated from fossil fuels.',
                es: 'Estime lo mejor que pueda la división de la electricidad utilizada durante 2022. Asegúrese de que se suma al 100%. "Renovables" se refiere a la electricidad generada a partir de la energía solar, eólica, biomasa y agua." No renovables" se refiere a la electricidad generada a partir de combustibles fósiles.',
                fr: "Estimez au mieux la répartition de la consommation d'électricité sur 2022. Veillez à ce que la somme soit égale à 100 %. Les \"énergies renouvelables\" désignent l'électricité produite à partir de l'énergie solaire, de l'énergie éolienne, de la biomasse et de l'eau. Les \"énergies non renouvelables\" désignent l'électricité produite à partir de combustibles fossiles.",
                'pt-BR':
                  'Estime o melhor que puder a divisão da eletricidade usada em 2022. Certifique-se que some 100%. "Renováveis" refere-se à eletricidade gerada pelo sol, vento, biomassa/resíduos, e água. "Não-renováveis" refere-se à eletricidade gerada por combustíveis fósseis.',
              },
              isRequired: true,
              validators: [
                {
                  type: 'expression',
                  text: {
                    default: 'Total share can not exceed 100%!',
                    es: '¡La participación no puede exceder el 100%!',
                    fr: 'La part totale devrait être de 100% !',
                    'pt-BR': 'A participação total não pode exceder 100%!',
                  },
                  expression:
                    '{wfh-emissions_electricity-generation-overview.gridSupplier.sharePercentage} + {wfh-emissions_electricity-generation-overview.homeRenewables.sharePercentage} + {wfh-emissions_electricity-generation-overview.homeNonRenewables.sharePercentage} <= 100',
                },
                {
                  type: 'expression',
                  text: {
                    default: 'Total share should be 100%!',
                    es: '¡La participación total debe ser 100%!',
                    fr: '',
                    'pt-BR': 'A participação total deve ser de 100%!',
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
                    es: 'Fracción porcentual',
                    fr: 'Pourcentage de répartition',
                    'pt-BR': 'Divisão da porcentagem',
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
                    es: 'Electricidad de un proveedor (a través de la red)',
                    fr: "Électricité provenant d'un fournisseur (via le réseau)",
                    'pt-BR': 'Eletricidade de um fornecedor (via rede)',
                  },
                },
                {
                  value: 'homeRenewables',
                  text: {
                    default: 'Electricity generated from renewables at your home',
                    es: 'Electricidad generada a partir de energías renovables en su casa',
                    fr: "Électricité produite à partir de sources d'énergie renouvelables à votre domicile",
                    'pt-BR': 'Eletricidade gerada de renováveis na sua casa',
                  },
                },
                {
                  value: 'homeNonRenewables',
                  text: {
                    default: 'Electricity generated from non-renewables at your home',
                    es: 'Electricidad generada a partir de no renovables en su casa',
                    fr: "Électricité produite à partir de sources d'énergie non renouvelables à votre domicile",
                    'pt-BR': 'Eletricidade gerada de não-renováveis na sua casa',
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
            es: 'Ahora le preguntaremos si y cómo *calienta* su casa',
            fr: 'Nous allons maintenant vous demander si et comment vous *chauffez* votre maison',
            'pt-BR': 'Agora vamos perguntar se e como você *aquece* sua casa',
          },
          elements: [
            {
              type: 'boolean',
              name: 'wfh-emissions_home-heating',
              title: {
                default:
                  'Do you ever use any source of heat in the room you usually work in at home, during working hours?',
                es: '¿Alguna vez usa alguna fuente de calor en la habitación en la que trabaja habitualmente en casa, durante las horas de trabajo?',
                fr: "Vous arrive-t-il d'utiliser quelconque moyen de chauffage dans la pièce dans laquelle vous télétravaillez habituellement, pendant les heures de travail ?",
                'pt-BR':
                  'Você já usou alguma fonte de calor no cômodo em que costuma trabalhar em casa, durante o horário de trabalho?',
              },
              description: {
                default:
                  'This includes **any** source of heat. For example, you might use central heating or district heating. Or you may use something smaller-scale such as infrared panels or an electric blanket / throw that goes on your knees.',
                es: 'Esto incluye **cualquier** fuente de calor. Por ejemplo, puede usar calefacción central o calefacción urbana. O puede usar algo de menor escala, como paneles infrarrojos o una manta eléctrica que se pone de rodillas.',
                fr: "Cela inclut **toute** source de chaleur. Par exemple, vous pouvez utiliser le chauffage central ou un chauffage d'appoint.",
                'pt-BR':
                  'Isso inclui **qualquer** fonte de calor. Por exemplo, você pode usar aquecimento central ou aquecimento urbano. Ou você pode usar algo em menor escala, como painéis infravermelhos ou um cobertor elétrico que coloca sobre as pernas.',
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
                es: 'Seleccione las fuentes de calor que mejor describan cómo calienta la habitación de su hogar desde la que normalmente trabaja.',
                fr: 'Quelles sources de chaleur utilisez-vous le plus souvent pour chauffez la pièce de votre maison dans laquelle vous travaillez habituellement ?',
                'pt-BR':
                  'Quais fontes de calor descrevem melhor como você aquece o cômodo da sua sua casa do qual você geralmente trabalha?',
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
                    default:
                      `<br/>
                      <p>Select all the heating sources you use in the room you usually work in. Then specify how many hours <em>of the working day</em> you use each heat source for on average within each month.</p>
                      <p>E.g. if your gas furnace is typically on for 4 hours of your working day from Dec-Jan, select "gas furnace" and "4" in December and January in the question below. If you also use an electric throw for 2 hours of your working day in Jan, select "electric blanket / throw" and "2" in January.</p>
                      <h4>Note:</h4>
                      <ul>
                        <li>If your usage or working room varies, please give your best estimate.</li>
                        <li>You can add as many sources as applicable.</li>
                        <li>If your heating is controlled automatically (e.g. "always-on" thermostat / centrally controlled system), select "auto" in the months your system is on.</li>
                      </ul>`,
                    es: `<br/>
                    <p>Seleccione todas las fuentes de calefacción que utiliza en la habitación en la que normalmente trabaja. A continuación, especifique cuántas horas *del día hábil* utiliza cada fuente de calor en promedio dentro de cada mes.</p>
                    <p>Por ejemplo, si su horno de gas está normalmente encendido durante 4 horas de su día de trabajo desde diciembre-enero, seleccione "horno de gas" y "4" en diciembre y enero en la siguiente pregunta. Si también utiliza un tiro eléctrico durante 2 horas de su día de trabajo en enero, seleccione "manta eléctrica" y "2" en enero.</p>
                    <h4>Nota</h4>
                    <ul>
                      <li>Si su uso o sala de trabajo varía, por favor dé su mejor estimación de su uso promedio.</li>
                      <li>Puede agregar tantas fuentes como sea necesario.</li>
                      <li>Si su fuente de calefacción se controla automáticamente (por ejemplo, en un termostato "siempre encendido" o un sistema controlado centralmente), seleccione "automático" en los menús desplegables en los meses en que su sistema está encendido.</li>
                      </ul>`,
                    fr: `<br/>
                    <p>Sélectionnez toutes les sources de chauffage que vous utilisez dans la pièce où vous travaillez habituellement. Précisez ensuite combien d'heures *de la journée de travail* vous utilisez chaque source de chaleur en moyenne au cours de chaque mois.</p>
                    <p>Par exemple, si votre chaudière à gaz fonctionne généralement pendant 4 heures de votre journée de travail de décembre à janvier, sélectionnez "chaudière à gaz" et "4" en décembre et janvier dans la question ci-dessous. Si vous utilisez également une couverture chauffante pendant 2 heures de votre journée de travail en janvier, sélectionnez "couverture chauffante" et "2" en janvier.</p>
                    <h4>Note:</h4>
                    <ul>
                      <li>Si votre utilisation ou votre espace de travail varie, veuillez donner votre meilleure estimation.</li>
                      <li>Vous pouvez ajouter autant de sources que nécessaire.</li>
                      <li>Si votre chauffage est contrôlé automatiquement (par exemple, thermostat "toujours allumé" / système à commande centralisée), sélectionnez "auto" pour les mois où votre système est en marche.</li>
                    </ul>`,
                    'pt-BR':
                    `<br/>  
                    <p>Selecione todas as fontes de aquecimento que você usa. Em seguida, especifique quantas horas *durante o dia útil* você usa cada fonte de calor, em média, em cada mês.</p>
                    <p>Por exemplo, se sua fornalha a gás está tipicamente ligada por 4 horas no seu dia de trabalho de Dez-Jan, selecione "fornalha a gás" e "4" em dezembro e Janeiro na questão abaixo. Se você também usar um cobertor elétrico por 2 horas por dia de trabalho em janeiro, selecione "cobertor elétrico" e depois "2" em dezembro e janeiro.</p>
                    <h4>Nota:</h4>
                    <ul>
                      <li>Se o seu uso ou sala de trabalho variar, forneça sua melhor estimativa do seu uso médio.    </li>
                      <li>Você pode adicionar quantas fontes forem necessárias.</li>
                      <li>Se sua fonte de aquecimento for controlada automaticamente (por exemplo, em um termostato "sempre ligado" ou sistema controlado centralmente), selecione "automático" nas listas suspensas nos meses em que seu sistema estiver ligado.</li>
                    </ul>`,
                  },
                },
                {
                  type: 'matrixdynamic',
                  name: 'wfh-emissions_home-heating-sources-during-months-of-year-gas',
                  visible: false,
                  visibleIf: '{wfh-emissions_home-heating-sources} contains "Gas (natural gas, propane, LPG)"',
                  title: {
                    default: 'Tell us about the gas heating sources you use *in the room you usually work in at home*.',
                    es: 'Cuéntenos más sobre las fuentes de calefacción de gas que usa *en la habitación en la que trabaja habitualmente en casa*.',
                    fr: 'Indiquez-nous les sources de chauffage au gaz que vous utilisez *dans la pièce où vous travaillez habituellement à la maison*.',
                    'pt-BR':
                      'Conte-nos mais sobre as fontes de aquecimento a gás que você usa *no cômodo em que você costuma trabalhar em casa*.',
                  },
                  description: {
                    default:
                      'Add all applicable heating sources and the number of hours you typically use them for *during a working day* in each month.',
                    es: 'Agregue todas las fuentes de calefacción aplicables y el número de horas que usualmente las utiliza *durante un día hábil* en cada mes.',
                    fr: "Ajoutez toutes les sources de chauffage concernées et le nombre d'heures pendant lesquelles vous les utilisez habituellement *pendant un jour de travail* au cours de chaque mois.",
                    'pt-BR':
                      'Adicione todas as fontes de calor aplicáveis e o número de horas que você tipicamente os utiliza *durante um dia de trabalho* em cada mês.',
                  },
                  isRequired: true,
                  verticalAlign: 'top',
                  columns: [
                    {
                      name: 'source',
                      title: {
                        default: 'Heating source',
                        es: 'Fuente de calefacción',
                        fr: 'Source de chauffage',
                        'pt-BR': 'Fonte de aquecimento',
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
                        'pt-BR': 'Março',
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
                        es: 'Mayo',
                        fr: 'Mai',
                        'pt-BR': 'Maio',
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
                    es: 'Añadir fuente de calefacción',
                    fr: 'Ajouter une source de chauffage',
                    'pt-BR': 'Adicionar fonte de aquecimento',
                  },
                  removeRowText: {
                    default: 'Remove heating source',
                    es: 'Eliminar fuente de calefacción',
                    fr: 'Supprimer la source de chauffage',
                    'pt-BR': 'Remover fonte de aquecimento',
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
                    es: 'Cuéntenos más sobre las fuentes de calefacción de aceite que usa *en la habitación en la que trabaja habitualmente en casa*.',
                    fr: "Veuillez nous en dire plus sur les sources de chauffage à l'huile que vous utilisez *dans la pièce où vous travaillez habituellement à la maison*.",
                    'pt-BR':
                      'Conte-nos mais sobre as fontes de aquecimento a óleo que você usa *no cômodo em que você costuma trabalhar em casa*, durante o horário de trabalho.',
                  },
                  description: {
                    default:
                      'Add all applicable heating sources and the number of hours you typically use them for*during a working day* in each month. ',
                    es: 'Agregue todas las fuentes de calefacción aplicables y el número de horas que usualmente las utiliza *durante un día hábil* en cada mes.',
                    fr: "Ajoutez toutes les sources de chauffage concernées et le nombre d'heures pendant lesquelles vous les utilisez habituellement *pendant un jour de travail* au cours de chaque mois.",
                    'pt-BR':
                      'Adicione todas as fontes de calor aplicáveis e o número de horas que você tipicamente os utiliza *durante um dia de trabalho* em cada mês.',
                  },
                  isRequired: true,
                  verticalAlign: 'top',
                  columns: [
                    {
                      name: 'source',
                      title: {
                        default: 'Heating source',
                        es: 'Fuente de calefacción',
                        fr: 'Source de chauffage',
                        'pt-BR': 'Fonte de aquecimento',
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
                        'pt-BR': 'janeiro',
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
                        'pt-BR': 'Março',
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
                        es: 'Mayo',
                        fr: 'Mai',
                        'pt-BR': 'Maio',
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
                    es: 'Añadir fuente de calefacción',
                    fr: 'Ajouter une source de chauffage',
                    'pt-BR': 'Adicionar fonte de aquecimento',
                  },
                  removeRowText: {
                    default: 'Remove heating source',
                    es: 'Eliminar fuente de calefacción',
                    fr: 'Supprimer la source de chauffage',
                    'pt-BR': 'Remover fonte de aquecimento',
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
                    es: 'Cuéntenos más sobre las fuentes de calefacción de electricidad que usa *en la habitación en la que trabaja habitualmente en casa*.',
                    fr: 'Veuillez nous en dire plus sur les sources de chauffage éléctriques que vous utilisez *dans la pièce où vous travaillez habituellement à la maison*.',
                    'pt-BR':
                      'Conte-nos mais sobre as fontes de aquecimento a eletricidade que você usa *no cômodo em que você costuma trabalhar em casa*.',
                  },
                  description: {
                    default:
                      'Add all applicable heating sources and the number of hours you typically use them for *during a working day* in each month.',
                    es: 'Agregue todas las fuentes de calefacción aplicables y el número de horas que usualmente las utiliza *durante un día hábil* en cada mes.',
                    fr: "Ajoutez toutes les sources de chauffage concernées et le nombre d'heures pendant lesquelles vous les utilisez habituellement *pendant un jour de travail* au cours de chaque mois.",
                    'pt-BR':
                      'Adicione todas as fontes de calor aplicáveis e o número de horas que você tipicamente os utiliza *durante um dia de trabalho* em cada mês.',
                  },
                  isRequired: true,
                  verticalAlign: 'top',
                  columns: [
                    {
                      name: 'source',
                      title: {
                        default: 'Heating source',
                        es: 'Fuente de calefacción',
                        fr: 'Source de chauffage',
                        'pt-BR': 'Fonte de aquecimento',
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
                        'pt-BR': 'janeiro',
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
                        'pt-BR': 'Março',
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
                        es: 'Mayo',
                        fr: 'Mai',
                        'pt-BR': 'Maio',
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
                    es: 'Añadir fuente de calefacción',
                    fr: 'Ajouter une source de chauffage',
                    'pt-BR': 'Adicionar fonte de aquecimento',
                  },
                  removeRowText: {
                    default: 'Remove heating source',
                    es: 'Eliminar fuente de calefacción',
                    fr: 'Supprimer la source de chauffage',
                    'pt-BR': 'Remover fonte de aquecimento',
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
                    es: 'Cuéntenos más sobre las fuentes de calefacción renovables bisomasa que usa *en la habitación en la que trabaja habitualmente en casa*.',
                    fr: 'Veuillez nous en dire plus sur les sources de chauffage renouvelables que vous utilisez *dans la pièce où vous travaillez habituellement à la maison*.',
                    'pt-BR':
                      'Conte-nos mais sobre as fontes de aquecimento renováveis / à biomassa que você usa *no cômodo em que você costuma trabalhar em casa*.',
                  },
                  description: {
                    default:
                      'Add all applicable heating sources and the number of hours you typically use them for *during a working day* in each month.',
                    es: 'Agregue todas las fuentes de calefacción aplicables y el número de horas que usualmente las utiliza *durante un día hábil* en cada mes.',
                    fr: "Ajoutez toutes les sources de chauffage concernées et le nombre d'heures pendant lesquelles vous les utilisez habituellement *pendant un jour de travail* au cours de chaque mois.",
                    'pt-BR':
                      'Adicione todas as fontes de calor aplicáveis e o número de horas que você tipicamente os utiliza *durante um dia de trabalho* em cada mês.',
                  },
                  isRequired: true,
                  verticalAlign: 'top',
                  columns: [
                    {
                      name: 'source',
                      title: {
                        default: 'Heating source',
                        es: 'Fuente de calefacción',
                        fr: 'Source de chauffage',
                        'pt-BR': 'Fonte de aquecimento',
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
                        'pt-BR': 'janeiro',
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
                        'pt-BR': 'Março',
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
                        es: 'Mayo',
                        fr: 'Mai',
                        'pt-BR': 'Maio',
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
                    es: 'Añadir fuente de calefacción',
                    fr: 'Ajouter une source de chauffage',
                    'pt-BR': 'Adicionar fonte de aquecimento',
                  },
                  removeRowText: {
                    default: 'Remove heating source',
                    es: 'Eliminar fuente de calefacción',
                    fr: 'Supprimer la source de chauffage',
                    'pt-BR': 'Remover fonte de aquecimento',
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
                    es: 'Cuéntenos más sobre las fuentes de calefacción de carbón que usa *en la habitación en la que trabaja habitualmente en casa*.',
                    fr: 'Veuillez nous en dire plus sur les sources de chauffage au charbon que vous utilisez *dans la pièce où vous travaillez habituellement à la maison*.',
                    'pt-BR':
                      'Conte-nos mais sobre as fontes de aquecimento a carvão que você usa *no cômodo em que você costuma trabalhar em casa*.',
                  },
                  description: {
                    default:
                      'Add all applicable heating sources and the number of hours you typically use them for *during a working day* in each month.',
                    es: 'Agregue todas las fuentes de calefacción aplicables y el número de horas que usualmente las utiliza *durante un día hábil* en cada mes.',
                    fr: "Ajoutez toutes les sources de chauffage concernées et le nombre d'heures pendant lesquelles vous les utilisez habituellement *pendant un jour de travail* au cours de chaque mois.",
                    'pt-BR':
                      'Adicione todas as fontes de calor aplicáveis e o número de horas que você tipicamente os utiliza *durante um dia de trabalho* em cada mês.',
                  },
                  isRequired: true,
                  verticalAlign: 'top',
                  columns: [
                    {
                      name: 'source',
                      title: {
                        default: 'Heating source',
                        es: 'Fuente de calefacción',
                        fr: 'Source de chauffage',
                        'pt-BR': 'Fonte de aquecimento',
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
                        'pt-BR': 'janeiro',
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
                        'pt-BR': 'Março',
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
                        es: 'Mayo',
                        fr: 'Mai',
                        'pt-BR': 'Maio',
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
                    es: 'Añadir fuente de calefacción',
                    fr: 'Ajouter une source de chauffage',
                    'pt-BR': 'Adicionar fonte de aquecimento',
                  },
                  removeRowText: {
                    default: 'Remove heating source',
                    es: 'Eliminar fuente de calefacción',
                    fr: 'Supprimer la source de chauffage',
                    'pt-BR': 'Remover fonte de aquecimento',
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
                    es: 'Cuéntenos más sobre las fuentes de calefacción urbana que usa *en la habitación en la que trabaja habitualmente en casa*, las horas de trabajo.',
                    fr: 'Veuillez nous en dire plus sur les sources de chauffage collectifs que vous utilisez *dans la pièce où vous travaillez habituellement à la maison*.',
                    'pt-BR':
                      'Conte-nos mais sobre as fontes de aquecimento urbano que você usa *no cômodo em que você costuma trabalhar em casa*, durante o horário de trabalho.',
                  },
                  description: {
                    default:
                      'Add all applicable heating sources and the number of hours you typically use them for *during a working day* in each month.',
                    es: 'Agregue todas las fuentes de calefacción aplicables y el número de horas que usualmente las utiliza *durante un día hábil* en cada mes.',
                    fr: "Ajoutez toutes les sources de chauffage concernées et le nombre d'heures pendant lesquelles vous les utilisez habituellement *pendant un jour de travail* au cours de chaque mois.",
                    'pt-BR':
                      'Adicione todas as fontes de calor aplicáveis e o número de horas que você tipicamente os utiliza *durante um dia de trabalho* em cada mês.',
                  },
                  isRequired: true,
                  verticalAlign: 'top',
                  columns: [
                    {
                      name: 'January',
                      title: {
                        default: 'January',
                        es: 'Fuente de calefacción',
                        fr: 'Source de chauffage',
                        'pt-BR': 'Fonte de aquecimento',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'February',
                      title: {
                        default: 'February',
                        es: 'Enero',
                        fr: 'Janvier',
                        'pt-BR': 'Janeiro',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'March',
                      title: {
                        default: 'March',
                        es: 'Febrero',
                        fr: 'Février',
                        'pt-BR': 'Fevereiro',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'April',
                      title: {
                        default: 'April',
                        es: 'Marzo',
                        fr: 'Mars',
                        'pt-BR': 'Março',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'May',
                      title: {
                        default: 'May',
                        es: 'Abril',
                        fr: 'Avril',
                        'pt-BR': 'Abril',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'June',
                      title: {
                        default: 'June',
                        es: 'Mayo',
                        fr: 'Mai',
                        'pt-BR': 'Maio',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'July',
                      title: {
                        default: 'July',
                        es: 'Junio',
                        fr: 'Juin',
                        'pt-BR': 'Junho',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'August',
                      title: {
                        default: 'August',
                        es: 'Julio',
                        fr: 'Juillet',
                        'pt-BR': 'Julho',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'September',
                      title: {
                        default: 'September',
                        es: 'Agosto',
                        fr: 'Août',
                        'pt-BR': 'Agosto',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'October',
                      title: {
                        default: 'October',
                        es: 'Septiembre',
                        fr: 'Septembre',
                        'pt-BR': 'Setembro',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'November',
                      title: {
                        default: 'November',
                        es: 'Octubre',
                        fr: 'Octobre',
                        'pt-BR': 'Outubro',
                      },
                      cellType: 'dropdown',
                      allowClear: false,
                      placeholder: ' ',
                    },
                    {
                      name: 'December',
                      title: {
                        default: 'December',
                        es: 'Noviembre',
                        fr: 'Novembre',
                        'pt-BR': 'Novembro',
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
            es: 'Ahora le preguntaremos si y cómo *enfría* su casa',
            fr: 'Nous allons maintenant vous demander si et comment vous *rafraichissez* votre maison.',
            'pt-BR': 'Agora vamos perguntar se e como você *resfria* sua casa.',
          },
          elements: [
            {
              type: 'boolean',
              name: 'wfh-emissions_home-cooling',
              title: {
                default: 'Do you ever use any source of cooling in your home during working hours?',
                es: '¿Alguna vez usa alguna fuente de enfriamiento en la habitación en la que trabaja habitualmente en casa, durante las horas de trabajo?',
                fr: 'Avez-vous déjà utilisé une source de refroidissement dans la pièce où vous travaillez habituellement à la maison, pendant les heures de travail ?',
                'pt-BR':
                  'Você já usou alguma fonte de resfriamento no cômodo em que costuma trabalhar em casa, durante o horário de trabalho?',
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
                es: 'Cuéntenos más sobre las fuentes de enfriamiento que utiliza *en la habitación en la que trabaja habitualmente en casa*, durante las horas de trabajo.',
                fr: 'Veuillez nous en dire plus sur les sources de refroidissement que vous utilisez *dans la pièce où vous travaillez habituellement à la maison*, pendant les heures de travail.',
                'pt-BR':
                  'Conte-nos mais sobre as fontes de resfriamento que você usa *no cômodo em que você costuma trabalhar em casa*, durante o horário de trabalho.',
              },
              description: {
                default:
                  'Add all applicable cooling sources and the number of hours you typically use them for *during a working day* in each month.\n\n**Note:**\n- If your usage or working room varies, please give your best estimate.\n- You can add as many sources as applicable.\n- If your cooling is controlled automatically (e.g. "always-on" thermostat / centrally controlled system), select "auto" in the months your system is on.',
                es: 'Agregue todas las fuentes de enfriamiento aplicables y el número de horas que normalmente las utiliza *durante un día hábil* en cada mes.\n\n**Nota:**\n - Si su uso o sala de trabajo varía, por favor dé su mejor estimación.\n - Puede añadir tantas fuentes como sea apropiado.\n - Si su enfriamiento se controla automáticamente (p. ej., "siempre encendido" termostato / sistema controlado centralmente), seleccione "auto" en los meses en que su sistema esté encendido."',
                fr: 'Ajoutez toutes les sources de refroidissement concernées et le nombre d\'heures pendant lesquelles vous les utilisez habituellement *pendant un jour de travail* au cours de chaque mois. \n\n*Note:*\n - Si votre utilisation ou votre espace de travail varie, veuillez donner votre meilleure estimation.\n - Vous pouvez ajouter autant de sources que nécessaire.\n - Si votre refroidissement est contrôlé automatiquement (par exemple, thermostat "toujours allumé" / système à commande centralisée), sélectionnez "auto" pour les mois où votre système est en marche.',
                'pt-BR':
                  'Adicione todas as fontes de resfriamento aplicáveis e o número de horas que você tipicamente os utiliza *durante um dia de trabalho* em cada mês.                                                                         \n                                                                                                                                                                      \n**Nota:**                                                                                                                                          \n- Se o seu uso ou cômodo de trabalho variar, por favor forneça sua melhor estimativa.       \n- Você pode adicionar quantas fontes forem aplicáveis.                                                            \n- Se o seu sistema de resfriamento é controlado automaticamente (por exemplo, termostato "sempre ligado" / sistema de controle central), selecione "auto" nos meses em que seu sistema estiver ligado.',
              },
              isRequired: true,
              verticalAlign: 'top',
              columns: [
                {
                  name: 'source',
                  title: {
                    default: 'Cooling source',
                    es: 'Fuente de calefacción',
                    fr: 'Source de chauffage',
                    'pt-BR': 'Fonte de aquecimento',
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
                    'pt-BR': 'Março',
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
                    es: 'Mayo',
                    fr: 'Mai',
                    'pt-BR': 'Maio',
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
                es: 'Añadir fuente de calefacción',
                fr: 'Ajouter une source de chauffage',
                'pt-BR': 'Adicionar fonte de aquecimento',
              },
              removeRowText: {
                default: 'Remove cooling source',
                es: 'Eliminar fuente de calefacción',
                fr: 'Supprimer la source de chauffage',
                'pt-BR': 'Remover fonte de aquecimento',
              },
            },
          ],
        },
        {
          type: 'panel',
          name: 'wfh-emissions_equipment-group',
          title: {
            default: "We're now going to ask you about the electronic equipment you use to help you work at home.",
            es: 'Ahora vamos a preguntarle acerca de los equipos electrónicos que utiliza para ayudarle a trabajar en casa.',
            fr: "Nous allons maintenant vous poser des questions sur l'équipement électronique que vous utilisez en télétravail.",
            'pt-BR':
              'Agora vamos perguntar sobre o equipamento eletrônico que você usa que o auxilia a trabalhar em casa.',
          },
          elements: [
            {
              type: 'checkbox',
              name: 'wfh-emissions_equipment',
              title: {
                default: 'Which of the equipment below do you use on a typical day when working from home?',
                es: '¿Cuál de los siguientes equipos usa en un día típico cuando trabaja desde casa?',
                fr: "Lesquels des équipements ci-dessous utilisez-vous lors d'une journée typique de travail à domicile ?",
                'pt-BR': 'Qual dos equipamentos abaixo você usa em um dia típico quando trabalha em casa?',
              },
              description: {
                default:
                  'This equipment may be owned by you or by Valtech. We only need to know about what you use to do your job.',
                es: 'Este equipo puede ser de su propiedad o de Valtech. Solo necesitamos saber qué usas para hacer tu trabajo.',
                fr: 'Ces équipements peuvent vous appartenir ou appartenir à Valtech.',
                'pt-BR':
                  'Este equipamento pode ser de sua propriedade ou da Valtech. Só precisamos saber o que você usa para fazer o seu trabalho.',
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
                es: 'equipo electrónico diferente',
                fr: 'Équipement électronique différent',
                'pt-BR': 'Equipamento eletrônico diferente',
              },
              otherText: {
                default: 'Other (please specify)',
                es: 'Otro (especifique)',
                fr: 'Autre (veuillez préciser)',
                'pt-BR': 'Outro (especifique)',
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
                es: '¿Usa el modo oscuro en su dispositivo de trabajo principal (p. ej., computadora portátil/ PC de escritorio) la mayor parte del tiempo?',
                fr: 'Utilisez-vous la plupart du temps le mode sombre sur votre principal appareil de travail (p. ex. ordinateur portable / ordinateur de bureau) ?',
                'pt-BR':
                  'Você usa o modo escuro no seu principal equipamento de trabalho (por exemplo laptop / computador desktop) na maior parte do tempo?',
              },
              description: {
                default:
                  '"Dark mode" is a display setting for user interfaces where light-coloured text is shown against a dark screen, which may use less energy.',
                es: 'Modo oscuro es un ajuste de visualización para interfaces de usuario donde el texto de color claro se muestra contra una pantalla oscura, que puede usar menos energía.',
                fr: 'Le "mode sombre" est un paramètre d\'affichage pour les interfaces utilisateur dans lequel le texte de couleur claire est affiché sur un écran sombre, ce qui permet de consommer moins d\'énergie.',
                'pt-BR':
                  '"Modo escuro" é uma configuração de exibição para interfaces de usuário onde o texto de cor clara é mostrado contra uma tela escura, que pode usar menos energia.',
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
        es: 'Sección de traslado diario',
        fr: 'Section des trajets domicile-travail',
        'pt-BR': 'Seção de deslocamento',
      },
      description: {
        default: "We're now going to ask you about your commuting habits.",
        es: 'Ahora vamos a preguntarle acerca de sus hábitos de viaje.',
        fr: 'Nous allons maintenant vous poser des questions sur vos habitudes de déplacement.',
        'pt-BR': 'Agora vamos perguntar sobre seus hábitos de deslocamento.',
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
                es: 'En 2022, ¿cuál fue la distancia de su viaje estándar desde su casa a su oficina base / normal de Valtech, de ida (en km / millas)?',
                fr: 'En 2022, quelle était la distance de votre trajet standard entre votre domicile et votre bureau Valtech de base / normal aller simple en (km / miles) ?',
                'pt-BR':
                  'Considerando somente a ida, qual foi a distância do seu trajeto padrão de casa até sua base / escritório normal da Valtech em km no ano de 2022?',
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
                es: 'Complete esta tabla para informarnos más sobre su viaje estándar desde su casa a su oficina base / normal de Valtech en 2022.',
                fr: 'Veuillez remplir ce tableau pour nous en dire plus sur votre trajet domicile-travail normal entre votre domicile et votre bureau de Valtech de base / normal en 2022.',
                'pt-BR':
                  'Preencha esta tabela para nos contar mais sobre a sua deslocação normal de casa para o seu escritório base / normal da Valtech em 2022.',
              },
              description: {
                default:
                  'Just give the details for the outward journey: we will assume you do the same in reverse to get home. Select all relevant transport methods you normally used to commute, (including walking) and the distance travelled on each for your standard commute. \n\nNote that the distances you give here must sum to the distance you gave in the previous question!',
                es: 'Solo dé los detalles del viaje de ida: asumiremos que hace lo mismo a la inversa para llegar a casa. Seleccione todos los métodos de transporte relevantes que utilizó normalmente para viajar (incluida la caminata) y la distancia recorrida en cada uno para su viaje estándar. ¡Tenga en cuenta que las distancias que usted da aquí deben sumar a la distancia que dio en la pregunta anterior!',
                fr: "Il suffit de donner les détails du voyage aller : nous supposerons que vous faites la même chose à l'envers pour rentrer chez vous. Sélectionnez tous les modes de transport pertinents que vous avez normalement utilisés pour vous déplacer (y compris la marche) et la distance parcourue sur chacun d'eux pour votre trajet standard. Notez que les distances que vous donnez ici doivent correspondre à la distance que vous avez donnée dans la question précédente !",
                'pt-BR':
                  'Apenas dê os detalhes da viagem de ida: vamos supor que você faça o mesmo inverso para chegar em casa. Selecione todos os métodos de transporte relevantes que você normalmente usou para se deslocar (incluindo caminhadas) e a distância percorrida em cada um deles para seu deslocamento padrão. Observe que as distâncias que você dá aqui devem somar a distância que você deu na pergunta anterior!',
              },
              isRequired: true,
              validators: [
                {
                  type: 'expression',
                  text: {
                    default: 'Total must be the same as your commute distance!',
                    es: '¡El total debe ser el mismo que su distancia de viaje!',
                    fr: 'Le total doit être le même que votre distance de trajet !',
                    'pt-BR': 'O total deve ser igual à sua distância de deslocamento!',
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
                    es: 'Modo de transporte',
                    fr: 'Mode de transport',
                    'pt-BR': 'Modo de transporte',
                  },
                  cellType: 'dropdown',
                  choicesByUrl: {
                    url: 'choices/transportation-modes.json',
                    valueName: 'id',
                    titleName: 'title',
                  },
                  placeholder: {
                    default: 'Select transportation mode...',
                    es: 'Seleccione el modo de transporte...',
                    fr: 'Sélectionnez le mode de transport...',
                    'pt-BR': 'Selecione o modo de transporte...',
                  },
                  isUnique: true,
                },
                {
                  name: 'commute-transport-mode-distance',
                  title: {
                    default: 'Distance in {localized-distance-unit}',
                    es: 'Distancia en [km/miles]',
                    fr: 'Distance en [km/miles]',
                    'pt-BR': 'Distância em [km/milhas]',
                  },
                  cellType: 'text',
                  totalType: 'sum',
                  totalFormat: {
                    default: 'Total {0}',
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
                es: 'Los modos elegidos deben ser únicos.',
                fr: 'Les modes choisis doivent être uniques.',
                'pt-BR': 'Os modos escolhidos devem ser únicos.',
              },
              rowCount: 1,
              minRowCount: 1,
              maxRowCount: 10,
              addRowText: {
                default: 'Add transportation mode',
                es: 'Agregar modo de transporte',
                fr: 'Ajouter un mode de transport',
                'pt-BR': 'Adicionar modo de transporte',
              },
              removeRowText: {
                default: 'Remove transportation mode',
                es: 'Eliminar modo de transporte',
                fr: 'Supprimer le mode de transport',
                'pt-BR': 'Remover modo de transporte',
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
            es: 'En 2022, ¿tenía un método *alternativo* para viajar a su oficina base?',
            fr: 'En 2022, aviez-vous une méthode *alternative* pour vous rendre à votre bureau de base ?',
            'pt-BR': 'Em 2022, você tinha um método *alternativo* para se deslocar para seu escritório base?',
          },
          description: {
            default: 'For example, when the weather was bad you might have driven rather than cycling.',
            es: 'Por ejemplo, cuando el clima era malo, es posible que haya conducido en lugar de andar en bicicleta.',
            fr: 'Par exemple, lorsque le temps était mauvais, vous auriez pu conduire plutôt que de faire du vélo.',
            'pt-BR': 'Por exemplo, quando o tempo estava ruim, você poderia ter dirigido em vez de andar de bicicleta.',
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
                es: 'En 2022, ¿cuál fue la distancia de su viaje *alternativo* desde su casa a su oficina base / normal de Valtech de ida (en km / millas)?',
                fr: 'En 2022, quelle était la distance de votre trajet *alternatif* entre votre domicile et votre bureau Valtech de base / normal aller simple (en km / miles) ?',
                'pt-BR':
                  'Considerando somente a ida, qual foi a distância do seu trajeto *alternativo* de casa para sua base/escritório normal da Valtech em km no ano de 2022?',
              },
              description: {
                default:
                  'This may be the same as the distance in your standard commute, but sometimes people take different routes e.g. by road the commute might be 10km longer than on the train.',
                es: 'Esto puede ser lo mismo que la distancia en su viaje estándar, pero a veces las personas toman diferentes rutas, por ejemplo, por carretera, el viaje puede ser 10 km más largo que en el tren.',
                fr: 'Cela peut être la même que la distance dans votre trajet standard, mais parfois les gens prennent différents itinéraires, par exemple par la route, le trajet peut-être 10 km plus long que dans le train.',
                'pt-BR':
                  'Isso pode ser o mesmo que a distância em seu trajeto padrão, mas às vezes as pessoas tomam rotas diferentes, por exemplo, por estrada, o trajeto pode ser 10 km mais longo do que no trem.',
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
                es: 'Complete esta tabla para informarnos más sobre su viaje *alternativo* desde su casa a su oficina base / normal de Valtech en 2022.',
                fr: 'Veuillez remplir ce tableau pour nous en dire plus sur votre trajet domicile-travail alternatif entre votre domicile et votre bureau de Valtech de base / normal en 2022.',
                'pt-BR':
                  'Preencha esta tabela para nos contar mais sobre o seu deslocamento *alternativo* de casa para o seu escritório base / normal da Valtech em 2022.',
              },
              description: {
                default:
                  'Please just give the details for the outward journey: we will assume you do the same in reverse to get home. Select all relevant transport methods you used in this *alternative* commute (including walking) and the distance travelled on each. Note that the distances you give here must sum to the distance you gave in the question regarding total distance for your alternative commute!',
                es: 'Solo dé los detalles del viaje de ida: asumiremos que hace lo mismo a la inversa para llegar a casa. Seleccione todos los métodos de transporte relevantes que utilizó en este viaje *alternativo* (incluido caminar) y la distancia recorrida en cada uno. ¡Tenga en cuenta que las distancias que da aquí deben sumar a la distancia que dio en la pregunta con respecto a la distancia total para su viaje alternativo!',
                fr: "Il suffit de donner les détails du voyage aller : nous supposerons que vous faites la même chose à l'envers pour rentrer chez vous. Sélectionnez toutes les méthodes de transport pertinentes que vous avez utilisées dans ce trajet *alternatif* (y compris la marche) et la distance parcourue sur chacune d'elles. Notez que les distances que vous donnez ici doivent correspondre à la distance que vous avez donnée dans la question concernant la distance totale pour votre trajet alternatif !",
                'pt-BR':
                  'Por favor, apenas dê os detalhes da viagem de ida: vamos supor que você faça o mesmo caminho inverso para chegar em casa. Selecione todos os métodos de transporte relevantes que você usou neste trajeto *alternativo* (incluindo caminhada) e a distância percorrida em cada um. Observe que as distâncias que você dá aqui devem somar a distância que você deu na pergunta sobre a distância total para o seu trajeto alternativo!',
              },
              isRequired: true,
              validators: [
                {
                  type: 'expression',
                  text: {
                    default: 'Total must be the same as your alternative commute distance!',
                    es: '¡El total debe ser el mismo que su distancia de viaje alternativo!',
                    fr: 'le total doit être le même que votre distance de navette alternative !',
                    'pt-BR': 'O total deve ser o mesmo que a distância de deslocamento alternativo!',
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
                    es: 'Modo de transporte',
                    fr: 'Mode de transport',
                    'pt-BR': 'Modo de transporte',
                  },
                  cellType: 'dropdown',
                  choicesByUrl: {
                    url: 'choices/transportation-modes.json',
                    valueName: 'id',
                    titleName: 'title',
                  },
                  placeholder: {
                    default: 'Select transportation mode...',
                    es: 'Seleccione el modo de transporte...',
                    fr: 'Sélectionnez le mode de transport...',
                    'pt-BR': 'Selecione o modo de transporte...',
                  },
                  isUnique: true,
                },
                {
                  name: 'commute-transport-mode-distance',
                  title: {
                    default: 'Distance in {localized-distance-unit}',
                    es: 'Distancia en [km/miles]',
                    fr: 'Distance en [km/miles]',
                    'pt-BR': 'Distância em [km/milhas]',
                  },
                  cellType: 'text',
                  totalType: 'sum',
                  totalFormat: {
                    default: 'Total {0}',
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
                es: 'Los modos elegidos deben ser únicos.',
                fr: 'Les modes choisis doivent être uniques.',
                'pt-BR': 'Os modos escolhidos devem ser únicos.',
              },
              rowCount: 1,
              minRowCount: 1,
              maxRowCount: 10,
              addRowText: {
                default: 'Add transportation mode',
                es: 'Agregar modo de transporte',
                fr: 'Ajouter un mode de transport',
                'pt-BR': 'Adicionar modo de transporte',
              },
              removeRowText: {
                default: 'Remove transportation mode',
                es: 'Eliminar modo de transporte',
                fr: 'Supprimer le mode de transport',
                'pt-BR': 'Remover modo de transporte',
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
        es: 'Sección de traslado diario del cliente',
        fr: 'Section trajets domicile-travail des clients',
        'pt-BR': 'Seção de deslocamento do cliente',
      },
      description: {
        default:
          'We\'re now going to ask you about the regular commuting you have done to work at client offices. \nThis is different from "business travel" which refers to one-off or infrequent trips. Here we\'re talking about working regularly from a specific client site, probably on a project.',
        es: 'Ahora vamos a preguntarle acerca de los desplazamientos regulares que ha hecho para trabajar en las oficinas de los clientes.\nEsto es diferente de "viajes de negocios", que se refiere a viajes únicos o poco frecuentes. Aquí estamos hablando de trabajar regularmente desde un sitio cliente específico, probablemente en un proyecto.',
        fr: 'Nous allons maintenant vous poser des questions sur les déplacements réguliers que vous avez effectués pour travailler dans les bureaux des clients.\nCeci est différent des  "voyages d\'affaires" qui se réfèrent à des voyages ponctuels ou peu fréquents. Ici, nous parlons de travailler régulièrement à partir d\'un site client spécifique, probablement sur un projet.',
        'pt-BR':
          'Agora vamos perguntar sobre o deslocamento regular que você fez para trabalhar nos escritórios dos clientes.\nIsso é diferente de "viagens de negócios", que se refere a viagens pontuais ou pouco frequentes. Aqui estamos falando sobre trabalhar regularmente a partir de um local específico do cliente, provavelmente em um projeto.',
      },
      visibleIf: '{employment_working-pattern-split.client.sharePercentage} > 0',
      elements: [
        {
          type: 'text',
          name: 'client-commuting-emissions_client-office-commute-distance',
          title: {
            default:
              'In 2022, how long was your standard commute from home to your client office one way in {localized-distance-unit}?',
            es: 'En 2022, ¿cuál fue la distancia de su viaje estándar desde su casa a la oficina de su cliente, de ida (en km / millas)?',
            fr: 'En 2022, quelle était la distance de votre trajet standard entre votre domicile et le bureau client, aller simple (en km / miles) ?',
            'pt-BR':
              'Considerando somente a ida, qual foi a distância do seu trajeto padrão de casa até o escritório do cliente em km no ano de 2022?',
          },
          description: {
            default:
              'If you commuted to more than one client office regularly in 2022, please select the commute you did for the longest period of time.',
            es: 'Si viajó a más de una oficina de cliente regularmente en 2022, seleccione el viaje que realizó durante el período de tiempo más largo.',
            fr: "Si vous avez effectué régulièrement des trajets domicile-travail vers plus d'un bureau client en 2022, veuillez sélectionner le trajet que vous avez effectué pendant la période la plus longue.",
            'pt-BR':
              'Se você se deslocou para mais de um escritório do cliente regularmente em 2022, selecione o trajeto que você fez por mais tempo.',
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
            es: 'Complete esta tabla para contarnos más sobre su viaje estándar de casa a la oficina de su cliente en 2022.',
            fr: 'Veuillez remplir ce tableau pour nous en dire plus sur vos trajets domicile-travail standard entre la maison et le bureau de votre client en 2022.',
            'pt-BR':
              'Por favor, preencha esta tabela para nos contar mais sobre o seu deslocamento normal de casa para o escritório do seu cliente em 2022.',
          },
          description: {
            default:
              'Just give the details for the outward journey: we will assume you do the same in reverse to get home. Select all relevant transport methods you normally used to commute, (including walking) and the distance travelled on each for your standard client office commute. The distances you give here must sum to the distance you gave in the question regarding total distance for your alternative client commute!',
            es: 'Solo dé los detalles del viaje de ida: asumiremos que hace lo mismo a la inversa para llegar a casa. Seleccione todos los métodos de transporte relevantes que utilizó normalmente para viajar (incluida la caminata) y la distancia recorrida en cada uno para su viaje estándar. ¡Tenga en cuenta que las distancias que da aquí deben sumar a la distancia que dio en la pregunta con respecto a la distancia total para su viaje alternativo!',
            fr: "Il suffit de donner les détails du voyage aller : nous supposerons que vous faites la même chose à l'envers pour rentrer chez vous. Sélectionnez tous les modes de transport pertinents que vous avez normalement utilisés pour vous déplacer (y compris la marche) et la distance parcourue sur chacun d'eux pour votre trajet standard. Notez que les distances que vous donnez ici doivent correspondre à la distance que vous avez donnée dans la question concernant la distance totale pour votre trajet alternatif !",
            'pt-BR':
              'Apenas dê os detalhes da viagem de ida: vamos supor que você faça o mesmo caminho inverso para chegar em casa. Selecione todos os métodos de transporte relevantes que você normalmente usou para se deslocar (incluindo caminhadas) e a distância percorrida em cada um deles para seu deslocamento padrão. Observe que as distâncias que você dá aqui devem somar a distância que você deu na pergunta sobre a distância total para o seu trajeto alternativo!',
          },
          isRequired: true,
          validators: [
            {
              type: 'expression',
              text: {
                default: 'Total must be the same as your standard client commute distance!',
                es: '¡El total debe ser el mismo que su distancia de viaje alternativo!',
                fr: 'le total doit être le même que votre distance de navette alternative !',
                'pt-BR': 'O total deve ser o mesmo que a distância de deslocamento alternativo!',
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
                es: 'Modo de transporte',
                fr: 'Mode de transport',
                'pt-BR': 'Modo de transporte',
              },
              cellType: 'dropdown',
              choicesByUrl: {
                url: 'choices/transportation-modes.json',
                valueName: 'id',
                titleName: 'title',
              },
              placeholder: {
                default: 'Select transportation mode...',
                es: 'Seleccione el modo de transporte...* AGREGAR TEXTO DE FILA',
                fr: 'Sélectionnez le mode de transport...',
                'pt-BR': 'Selecione o modo de transporte...',
              },
              isUnique: true,
            },
            {
              name: 'client-commute-transport-mode-distance',
              title: {
                default: 'Distance in {localized-distance-unit}',
                es: 'Distancia en [km/miles]',
                fr: 'Distance en [km/miles]',
                'pt-BR': 'Distância em [km/milhas]',
              },
              cellType: 'text',
              totalType: 'sum',
              totalFormat: {
                default: 'Total {0}',
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
            es: 'Los modos elegidos deben ser únicos.',
            fr: 'Les modes choisis doivent être uniques.',
            'pt-BR': 'Os modos escolhidos devem ser únicos.',
          },
          rowCount: 1,
          minRowCount: 1,
          maxRowCount: 10,
          addRowText: {
            default: 'Add transportation mode',
            es: 'Agregar modo de transporte',
            fr: 'Ajouter un mode de transport',
            'pt-BR': 'Adicionar modo de transporte',
          },
          removeRowText: {
            default: 'Remove transportation mode',
            es: 'Eliminar modo de transporte',
            fr: 'Supprimer le mode de transport',
            'pt-BR': 'Remover modo de transporte',
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
            es: 'En 2022, ¿tenía un método *alternativo* para viajar a la oficina de su cliente?',
            fr: 'En 2022, aviez-vous une méthode *alternative* pour vous rendre à votre bureau client ?',
            'pt-BR': 'Em 2022, você tinha um método *alternativo* para se deslocar para seu escritório do seu cliente?',
          },
          description: {
            default: 'For example, when the weather was bad you might have driven rather than cycling.',
            es: 'Por ejemplo, cuando el clima era malo, es posible que haya conducido en lugar de andar en bicicleta.',
            fr: 'Par exemple, lorsque le temps était mauvais, vous auriez pu conduire plutôt que de faire du vélo.',
            'pt-BR': 'Por exemplo, quando o tempo estava ruim, você poderia ter dirigido em vez de andar de bicicleta.',
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
                es: 'En 2022, ¿cuál fue la distancia de su viaje *alternativo* desde su casa a la oficina de su cliente, de ida (en km / millas)?',
                fr: 'En 2022, quelle était la distance de votre trajet *alternatif* entre la maison et le bureau de votre client (en km / miles) ?',
                'pt-BR':
                  'Considerando somente a ida, qual foi a distância do seu trajeto *alternativo* de casa até o escritório do cliente em km no ano de 2022?',
              },
              description: {
                default:
                  'This may be the same as the distance in your standard commute, but sometimes people take different routes e.g. by road the commute might be 10km longer than on the train.',
                es: 'Esto puede ser lo mismo que la distancia en su viaje estándar, pero a veces las personas toman diferentes rutas, por ejemplo, por carretera, el viaje puede ser 10 km más largo que en el tren.',
                fr: 'Cela peut être la même que la distance dans votre trajet standard, mais parfois les gens prennent différents itinéraires, par exemple par la route, le trajet peut-être 10 km plus long que dans le train.',
                'pt-BR':
                  'Isso pode ser o mesmo que a distância em seu trajeto padrão, mas às vezes as pessoas tomam rotas diferentes, por exemplo, por estrada, o trajeto pode ser 10 km mais longo do que no trem.',
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
                es: 'Complete esta tabla para contarnos más sobre su viaje *alternativo* desde su casa a la oficina de su cliente en 2022.',
                fr: 'Veuillez remplir ce tableau pour nous en dire plus sur votre trajet *alternatif* de la maison au bureau de votre client en 2022.',
                'pt-BR':
                  'Preencha esta tabela para nos contar mais sobre o seu deslocamento *alternativo* de casa para o escritório do seu cliente em 2022.',
              },
              description: {
                default:
                  'Just give the details for the outward journey: we will assume you do the same in reverse to get home. Select all relevant transport methods you used in this *alternative* client commute (including walking) and the distance travelled on each. The distances you give here must sum to the distance you gave in the question regarding total distance for your alternative client commute!',
                es: 'Solo dé los detalles del viaje de ida: asumiremos que hace lo mismo a la inversa para llegar a casa. Seleccione todos los métodos de transporte relevantes que utilizó en este viaje *alternativo* (incluido caminar) y la distancia recorrida en cada uno. ¡Tenga en cuenta que las distancias que da aquí deben sumar a la distancia que dio en la pregunta con respecto a la distancia total para su viaje alternativo!',
                fr: "Il suffit de donner les détails du voyage aller : nous supposerons que vous faites la même chose à l'envers pour rentrer chez vous. Sélectionnez toutes les méthodes de transport pertinentes que vous avez utilisées dans ce trajet *alternatif* (y compris la marche) et la distance parcourue sur chacune d'elles. Notez que les distances que vous donnez ici doivent correspondre à la distance que vous avez donnée dans la question concernant la distance totale pour votre trajet alternatif !",
                'pt-BR':
                  'Apenas dê os detalhes da viagem de ida: vamos supor que você faça o mesmo caminho inverso para chegar em casa. Selecione todos os métodos de transporte relevantes que você usou neste trajeto *alternativo* para comutar ao cliente (incluindo caminhada) e a distância percorrida em cada um. Observe que as distâncias que você dá aqui devem somar a distância que você deu na pergunta sobre a distância total para o seu trajeto alternativo!',
              },
              isRequired: true,
              validators: [
                {
                  type: 'expression',
                  text: {
                    default: 'Total must be the same as your alternative client commute distance!',
                    es: '¡El total debe ser el mismo que su distancia de viaje alternativo!',
                    fr: 'le total doit être le même que votre distance de navette alternative !',
                    'pt-BR': 'O total deve ser o mesmo que a distância de deslocamento alternativo!',
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
                    es: 'Modo de transporte',
                    fr: 'Mode de transport',
                    'pt-BR': 'Modo de transporte',
                  },
                  cellType: 'dropdown',
                  choicesByUrl: {
                    url: 'choices/transportation-modes.json',
                    valueName: 'id',
                    titleName: 'title',
                  },
                  placeholder: {
                    default: 'Select transportation mode...',
                    es: 'Seleccione el modo de transporte...',
                    fr: 'Sélectionnez le mode de transport...',
                    'pt-BR': 'Selecione o modo de transporte...',
                  },
                  isUnique: true,
                },
                {
                  name: 'alternative-client-commute-transport-mode-distance',
                  title: {
                    default: 'Distance in {localized-distance-unit}',
                    es: 'Distancia en [km/miles]',
                    fr: 'Distance en [km/miles]',
                    'pt-BR': 'Distância em [km/milhas]',
                  },
                  cellType: 'text',
                  totalType: 'sum',
                  totalFormat: {
                    default: 'Total {0}',
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
                es: 'Los modos elegidos deben ser únicos.',
                fr: 'Les modes choisis doivent être uniques.',
                'pt-BR': 'Os modos escolhidos devem ser únicos.',
              },
              rowCount: 1,
              minRowCount: 1,
              maxRowCount: 10,
              addRowText: {
                default: 'Add transportation mode',
                es: 'Agregar modo de transporte',
                fr: 'Ajouter un mode de transport',
                'pt-BR': 'Adicionar modo de transporte',
              },
              removeRowText: {
                default: 'Remove transportation mode',
                es: 'Eliminar modo de transporte',
                fr: 'Supprimer le mode de transport',
                'pt-BR': 'Remover modo de transporte',
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
                es: 'Del total de días que viajó a la oficina de su cliente en 2022, calcule el % de días en los que utilizó esta forma *alternativa* de viajar en lugar de su viaje estándar.',
                fr: 'Sur le nombre total de jours que vous avez passés au bureau en 2022, veuillez estimer le % de jours pendant lesquels vous avez utilisé ce moyen de transport *alternatif* au lieu de votre trajet habituel.',
                'pt-BR':
                  'Do total de dias que você se deslocou para o escritório do seu cliente em 2022, estime a % de dias em que você usou essa forma *alternativa* de deslocamento em vez do deslocamento padrão.',
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
        es: 'Sección de viajes de negocios',
        fr: "Section voyages D'AFFAIRES",
        'pt-BR': 'Seção de viagens de negócios',
      },
      description: {
        default: "We're now going to ask you about any business trips you may have taken for Valtech purposes.",
        es: 'Ahora le preguntaremos sobre cualquier viaje de negocios que haya realizado con fines de Valtech.',
        fr: "Nous allons maintenant vous poser des questions sur les voyages d'affaires que vous avez peut-être effectuées à des fins Valtech.",
        'pt-BR':
          'Agora vamos perguntar sobre quaisquer viagens de negócios que você possa ter feito com propósitos da Valtech.',
      },
      visibleIf: '{employment_working-pattern-split.businessTravel.sharePercentage} > 0',
      elements: [
        {
          type: 'checkbox',
          name: 'business-travel-emissions_transport-modes',
          title: {
            default: 'Which methods of transport did you use when taking business trips for Valtech in 2022?',
            es: '¿Qué métodos de transporte utilizó al realizar viajes de negocios para Valtech en 2022?',
            fr: "Quels modes de transport avez-vous utilisés lors de vos voyages d'affaires pour Valtech en 2022 ?",
            'pt-BR': 'Quais métodos de transporte você usou ao fazer viagens de negócios para a Valtech em 2022?',
          },
          description: {
            default:
              'Here we\'re referring to any business trips outside of your regular commute(s) to your base / normal Valtech office and / or client offices. For example, travel to conferences and other events, travel to other Valtech offices, client meetings and pitches. \n\nWe know it can be hard to remember everything in minute detail! Please give your best estimate for the business travel you did in 2022. \n\nN.b. When we refer to "car", we mean one that you lease or own privately. For any taxis you\'ve taken where you were not sure what fuel type they used, please select "petrol / diesel taxi".',
            es: 'Aquí nos referimos a cualquier viaje de negocios fuera de sus desplazamientos regulares a su base /oficina normal de Valtech y / u oficinas de clientes. Por ejemplo, viajes a conferencias y otros eventos, viajes a otras oficinas de Valtech, reuniones de clientes y presentaciones.\n\n¡Sabemos que puede ser difícil recordar todo en detalle! Proporcione su mejor estimación para el viaje de negocios que realizó en 2022.\n\nN.b. Cuando nos referimos a "automóvil", nos referimos a uno que usted arrienda o posee en privado. Para cualquier taxi que haya tomado donde no estaba seguro de qué tipo de combustible usaron, seleccione "taxi de gasolina / diesel".',
            fr: "Ici, nous faisons référence à tout voyage d'affaires en dehors de vos trajets domicile-travail réguliers vers votre bureau de base / normal de Valtech et / ou vos bureaux clients. Par exemple, des voyages à des conférences et autres événements, des voyages à d'autres bureaux de Valtech, des réunions avec les clients et des présentations.\n\nNous savons qu'il peut être difficile de se souvenir de tout dans les moindres détails  ! Veuillez donner votre meilleure estimation pour les voyages d'affaires que vous avez effectuées en 2022.\n\nN.b. Lorsque nous faisons référence à \"voiture\", nous entendons une voiture que vous louez ou possédez en privé. Pour tous les taxis que vous avez pris où vous n'étiez pas sûr du type de carburant qu'ils ont utilisé, veuillez sélectionner \"taxi essence / diesel\".",
            'pt-BR':
              'Estamos nos referindo a quaisquer viagens de negócios fora do (s) seu (s) trajeto(s) regular (is) para o seu escritório base / normal da Valtech e / ou escritórios do cliente. Por exemplo, viajar para conferências e outros eventos, viajar para outros escritórios da Valtech, reuniões com clientes e apresentações.\n\nSabemos que pode ser difícil lembrar de tudo nos mínimos detalhes! Forneça sua melhor estimativa para as viagens de negócios que você fez em 2022.\n\nN.B. Quando nos referimos a "carro", queremos dizer um que você aluga ou possui um particular. Para todos os táxis que você tomou onde você não tinha certeza do tipo de combustível que eles usaram, selecione "táxi a gasolina / diesel".',
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
            es: 'Oficina diferente',
            fr: 'Bureau différent',
            'pt-BR': 'escritório diferente',
          },
          otherText: {
            default: 'Other (please specify)',
            es: 'Otro (especifique)',
            fr: 'Autre (veuillez préciser)',
            'pt-BR': 'Outro (especifique)',
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
                es: 'Por favor, cuéntenos un poco más sobre los vuelos que tomó para Valtech en 2022.',
                fr: 'Veuillez nous en dire un peu plus sur les vols que vous avez pris pour Valtech en 2022.',
                'pt-BR': 'Conte-nos um pouco mais sobre os voos que você fez para a Valtech em 2022.',
              },
              isRequired: true,
              validators: [
                {
                  type: 'expression',
                  text: {
                    default: 'Total short-haul share can not exceed 100%!',
                    es: '¡La proporción total de corta distancia no puede superar el 100%!',
                    fr: 'La part totale du transport à courte distance ne peut pas dépasser 100% !',
                    'pt-BR': 'A participação total de curta distância não pode exceder 100%!',
                  },
                  expression:
                    '{business-travel-emissions_flights-overview.short-haul.single-flights-count} == null || {business-travel-emissions_flights-overview.short-haul.single-flights-count} < 1 || {business-travel-emissions_flights-overview.short-haul.economy-class-percentage} + {business-travel-emissions_flights-overview.short-haul.business-class-percentage} + {business-travel-emissions_flights-overview.short-haul.first-class-percentage} <= 100',
                },
                {
                  type: 'expression',
                  text: {
                    default: 'Total short-haul share should be 100%!',
                    es: '¡La proporción total a corta distancia debe ser del 100%!',
                    fr: 'La part totale du court-courrier devrait être de 100% !',
                    'pt-BR': 'A participação total de curta distância deve ser de 100%!',
                  },
                  expression:
                    '{business-travel-emissions_flights-overview.short-haul.single-flights-count} == null || {business-travel-emissions_flights-overview.short-haul.single-flights-count} < 1 || {business-travel-emissions_flights-overview.short-haul.economy-class-percentage} + {business-travel-emissions_flights-overview.short-haul.business-class-percentage} + {business-travel-emissions_flights-overview.short-haul.first-class-percentage} > 99',
                },
                {
                  type: 'expression',
                  text: {
                    default: 'Total medium-haul share can not exceed 100%!',
                    es: '¡La proporción total de media distancia no puede superar el 100%!',
                    fr: 'LA PART TOTALE DES MOYENS-COURRIERS NE PEUT PAS DÉPASSER 100% ! La part totale du transport à moyenne distance ne peut pas dépasser 100% !',
                    'pt-BR': 'A participação total de média distância não pode exceder 100%!',
                  },
                  expression:
                    '{business-travel-emissions_flights-overview.medium-haul.single-flights-count} == null || {business-travel-emissions_flights-overview.medium-haul.single-flights-count} < 1 || {business-travel-emissions_flights-overview.medium-haul.economy-class-percentage} + {business-travel-emissions_flights-overview.medium-haul.business-class-percentage} + {business-travel-emissions_flights-overview.medium-haul.first-class-percentage} <= 100',
                },
                {
                  type: 'expression',
                  text: {
                    default: 'Total medium-haul share should be 100%!',
                    es: '¡La proporción total de media distancia debe ser del 100%!',
                    fr: 'La part totale du moyen-courrier doit être de 100% !',
                    'pt-BR': 'A participação total média distância deve ser 100%!',
                  },
                  expression:
                    '{business-travel-emissions_flights-overview.medium-haul.single-flights-count} == null || {business-travel-emissions_flights-overview.medium-haul.single-flights-count} < 1 || {business-travel-emissions_flights-overview.medium-haul.economy-class-percentage} + {business-travel-emissions_flights-overview.medium-haul.business-class-percentage} + {business-travel-emissions_flights-overview.medium-haul.first-class-percentage} > 99',
                },
                {
                  type: 'expression',
                  text: {
                    default: 'Total long-haul share can not exceed 100%!',
                    es: '¡La proporción total de larga distancia no puede exceder el 100%!',
                    fr: 'La part totale des vols long-courriers ne peut pas dépasser 100% !',
                    'pt-BR': 'A participação total de longa distância não pode exceder 100%!',
                  },
                  expression:
                    '{business-travel-emissions_flights-overview.long-haul.single-flights-count} == null || {business-travel-emissions_flights-overview.long-haul.single-flights-count} < 1 || {business-travel-emissions_flights-overview.long-haul.economy-class-percentage} + {business-travel-emissions_flights-overview.long-haul.business-class-percentage} + {business-travel-emissions_flights-overview.long-haul.first-class-percentage} <= 100',
                },
                {
                  type: 'expression',
                  text: {
                    default: 'Total long-haul share should be 100%!',
                    es: '¡La proporción total de larga distancia debe ser del 100%!',
                    fr: 'La part totale des vols long-courriers doit être de 100% !',
                    'pt-BR': 'A participação total de longa distância deve ser 100%!',
                  },
                  expression:
                    '{business-travel-emissions_flights-overview.long-haul.single-flights-count} == null || {business-travel-emissions_flights-overview.long-haul.single-flights-count} < 1 || {business-travel-emissions_flights-overview.long-haul.economy-class-percentage} + {business-travel-emissions_flights-overview.long-haul.business-class-percentage} + {business-travel-emissions_flights-overview.long-haul.first-class-percentage} > 99',
                },
                {
                  type: 'expression',
                  text: {
                    default: 'Total ultra-long-haul share can not exceed 100%!',
                    es: 'La proporción total de ultra-larga distancia no puede exceder el 100%!',
                    fr: "La part totale de l'ultra-long-courrier ne peut pas dépasser 100% !",
                    'pt-BR': 'A participação total de ultra-longa distância não pode exceder 100%!',
                  },
                  expression:
                    '{business-travel-emissions_flights-overview.ultra-long-haul.single-flights-count} == null || {business-travel-emissions_flights-overview.ultra-long-haul.single-flights-count} < 1 || {business-travel-emissions_flights-overview.ultra-long-haul.economy-class-percentage} + {business-travel-emissions_flights-overview.ultra-long-haul.business-class-percentage} + {business-travel-emissions_flights-overview.ultra-long-haul.first-class-percentage} <= 100',
                },
                {
                  type: 'expression',
                  text: {
                    default: 'Total ultra-long-haul share should be 100%!',
                    es: '¡La proporción total de ultra-larga distancia debe ser del 100%!',
                    fr: "LA PART TOTALE DE L'ULTRA-LONG-COURRIER NE PEUT PAS DÉPASSER 100% ! La part totale de l'ultra-long-courrier doit être de 100% !",
                    'pt-BR': 'A participação total de ultra-longa distância deve ser 100%!',
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
                    es: 'Número de vuelos individuales',
                    fr: 'Nombre de vols simples',
                    'pt-BR': 'Número de voos individuais',
                  },
                  cellType: 'dropdown',
                  allowClear: false,
                  choicesMax: 200,
                },
                {
                  name: 'economy-class-percentage',
                  title: {
                    default: '% of these flights in economy class (including premium economy)',
                    es: '% de estos vuelos en clase turista (incluida la clase turista premium)',
                    fr: '% de ces vols en classe économique (y compris en classe économique premium)',
                    'pt-BR': '% desses voos em classe econômica (incluindo econômica premium)',
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
                    es: '% de estos vuelos en clase ejecutiva',
                    fr: '% de ces vols en classe affaires',
                    'pt-BR': '% desses voos em classe executiva',
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
                    es: '% de estos vuelos en primera clase',
                    fr: '% de ces vols en première classe',
                    'pt-BR': '% desses voos em primeira classe',
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
                    es: 'Corta distancia (menos de 3 horas)',
                    fr: 'Courte distance (moins de 3 heures)',
                    'pt-BR': 'Curta distância (menos de 3 horas)',
                  },
                },
                {
                  value: 'medium-haul',
                  text: {
                    default: 'Medium-haul (3–6 hours)',
                    es: 'Media distancia (3-6 horas)',
                    fr: 'Moyen-courrier (3-6 heures)',
                    'pt-BR': 'Média distância (3-6 horas)',
                  },
                },
                {
                  value: 'long-haul',
                  text: {
                    default: 'Long haul (6–16 hours)',
                    es: 'Largo recorrido (6-16 horas)',
                    fr: 'Long-courrier (6-16 heures)',
                    'pt-BR': 'Longa distância (6-16 horas)',
                  },
                },
                {
                  value: 'ultra-long-haul',
                  text: {
                    default: 'Ultra-long-haul (16 hours+)',
                    es: 'Ultra larga distancia (16 horas',
                    fr: 'Ultra-long-courrier (16 heures',
                    'pt-BR': 'Ultra-longa distância (16 horas',
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
                es: 'Al tomar el avión para Valtech en 2022, ¿cómo se viaja típicamente al aeropuerto y luego desde el aeropuerto de llegada a su destino final?',
                fr: "Lorsque vous avez pris l'avion pour Valtech en 2022, comment avez-vous voyagé jusqu'à l'aéroport, puis de l'aéroport d'arrivée jusqu'à votre destination finale ?",
                'pt-BR':
                  'Ao pegar o avião para a Valtech em 2022, como você normalmente viajava para o aeroporto e depois do aeroporto de chegada ao seu destino final?',
              },
              description: {
                default:
                  "It's fine to give a guess / average here, and if you used more than one method of transport for each section of the journey, please just tell us about the one that covered the highest proportion of the journey.",
                es: 'Está bien dar una conjetura / promedio aquí, y si utilizó más de un método de transporte para cada sección del viaje, por favor, solo díganos sobre el que cubrió la mayor proporción del viaje.',
                fr: "Vouz pouvez donner une estimation. Si vous avez utilisé plus d'un moyen de transport pour chaque section du trajet, indiquez simplement celui qui a couvert la plus grande partie du trajet.",
                'pt-BR':
                  'Está tudo bem dar um palpite / média aqui, e se você usou mais de um método de transporte para cada parte da viagem, por favor, diga-nos sobre o que cobriu a maior proporção da viagem.',
              },
              elements: [
                {
                  type: 'matrixdynamic',
                  name: 'business-travel-emissions_flights-journey-home-to-airport',
                  title: {
                    default: 'Journey from home to airport',
                    es: 'Viaje de casa al aeropuerto',
                    fr: "Voyage du domicile à l'aéroport",
                    'pt-BR': 'Viagem de casa ao aeroporto',
                  },
                  isRequired: true,
                  columns: [
                    {
                      name: 'commute-transportation-mode',
                      title: {
                        default: 'Transportation mode',
                        es: 'Modo de transporte',
                        fr: 'Mode de transport',
                        'pt-BR': 'Modo de transporte',
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
                        es: 'Seleccione el modo de transporte...',
                        fr: 'Sélectionner le mode de transport...',
                        'pt-BR': 'Selecione meio de transporte...',
                      },
                      isUnique: true,
                    },
                    {
                      name: 'commute-transport-mode-distance',
                      title: {
                        default: 'Distance in {localized-distance-unit}',
                        es: 'Distancia en [km/millas]',
                        fr: 'Distance en km',
                        'pt-BR': 'Distância em [km/milhas]',
                      },
                      cellType: 'dropdown',
                      choicesByUrl: {
                        url: 'choices/distance-ranges.json',
                        valueName: 'id',
                        titleName: 'title',
                      },
                      placeholder: {
                        default: 'Select distance range...',
                        es: 'Seleccione el intervalo de distancia...',
                        fr: 'Sélectionner la distance...',
                        'pt-BR': 'Selecione o intervalo de distância...',
                      },
                    },
                  ],
                  keyDuplicationError: {
                    default: 'The chosen modes should be unique.',
                    es: 'Los modos elegidos deben ser únicos.',
                    fr: 'Les modes choisis doivent être uniques.',
                    'pt-BR': 'Os modos escolhidos devem ser únicos.',
                  },
                  rowCount: 1,
                  minRowCount: 1,
                  maxRowCount: 10,
                  addRowText: {
                    default: 'Add transportation mode',
                    es: 'Agregar modo de transporte',
                    fr: 'Ajouter un mode de transport',
                    'pt-BR': 'Adicione meio de transporte',
                  },
                  removeRowText: {
                    default: 'Remove transportation mode',
                    es: 'Eliminar modo de transporte',
                    fr: 'Supprimer le mode de transport',
                    'pt-BR': 'Remova meio de  transporte',
                  },
                },
                {
                  type: 'matrixdynamic',
                  name: 'business-travel-emissions_flights-journey-airport-to-final-destination',
                  title: {
                    default: 'Journey from airport to final destination',
                    es: 'Viaje desde el aeropuerto hasta el destino final',
                    fr: "Voyage de l'aéroport à la destination finale",
                    'pt-BR': 'Distância do aeroporto ao destino final',
                  },
                  isRequired: true,
                  columns: [
                    {
                      name: 'commute-transportation-mode',
                      title: {
                        default: 'Transportation mode',
                        es: 'Modo de transporte',
                        fr: 'Mode de transport',
                        'pt-BR': 'Modo de transporte',
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
                        es: 'Seleccione el modo de transporte...',
                        fr: 'Sélectionner le mode de transport...',
                        'pt-BR': 'Selecione meio de transporte...',
                      },
                      isUnique: true,
                    },
                    {
                      name: 'commute-transport-mode-distance',
                      title: {
                        default: 'Distance in {localized-distance-unit}',
                        es: 'Distancia en [km/millas]',
                        fr: 'Distance en km',
                        'pt-BR': 'Distância em [km/milhas]',
                      },
                      cellType: 'dropdown',
                      choicesByUrl: {
                        url: 'choices/distance-ranges.json',
                        valueName: 'id',
                        titleName: 'title',
                      },
                      placeholder: {
                        default: 'Select distance range...',
                        es: 'Seleccione el intervalo de distancia...',
                        fr: 'Sélectionner la distance...',
                        'pt-BR': 'Selecione o intervalo de distância...',
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
                    es: 'Agregar modo de transporte',
                    fr: 'Ajouter un mode de transport',
                    'pt-BR': 'Adicione meio de transporte',
                  },
                  removeRowText: {
                    default: 'Remove transportation mode',
                    es: 'Eliminar modo de transporte',
                    fr: 'Supprimer le mode de transport',
                    'pt-BR': 'Remova meio de  transporte',
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
            es: 'Cuéntenos un poco más sobre los viajes en tren que hizo para Valtech en 2022.',
            fr: 'Veuillez nous en dire un peu plus sur les voyages en train que vous avez effectués pour Valtech en 2022.',
            'pt-BR': 'Por favor, conte-nos um pouco mais sobre as viagens de trem que você fez para a Valtech em 2022.',
          },
          visible: false,
          visibleIf: '{business-travel-emissions_transport-modes} contains "Train"',
          isRequired: true,
          columns: [
            {
              name: 'duration-range',
              title: {
                default: 'Number of hours per journey',
                es: 'Número de horas por viaje',
                fr: "Nombre d'heures par trajet",
                'pt-BR': 'Número de horas por viagem',
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
                es: 'Número de viajes en tren',
                fr: 'Nombre de voyages en train simple',
                'pt-BR': 'Número de viagens de trens',
              },
              cellType: 'dropdown',
              allowClear: false,
              choicesMax: 200,
            },
            {
              name: 'national-trains-percentage',
              title: {
                default: '% national trains',
                es: '% de estos viajes en trenes nacionales',
                fr: '% de ces trajets sur des trains nationaux',
                'pt-BR': '% dessas viagens em trens nacionais',
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
                es: '% de estos viajes en trenes internacionales (por ejemplo, Eurostar)',
                fr: '% de ces trajets sur des trains internationaux (par exemple Eurostar)',
                'pt-BR': '% dessas viagens em trens internacionais (por exemplo, Eurostar)',
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
                es: '% de estos viajes en tren ligero / tranvía',
                fr: '% de ces trajets en train léger / tramway',
                'pt-BR': '% dessas viagens em metrô de superfície / bondes',
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
                es: '% de estos viajes en metro / tren subterráneo',
                fr: '% de ces trajets en métro',
                'pt-BR': '% dessas viagens em trens de metrô',
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
          name: 'business-travel-emissions_car-journeys-overview',
          title: {
            default: 'Please tell us a bit more about the car journeys you took for Valtech in 2022.',
            es: 'Cuéntenos un poco más sobre los viajes en coche que hizo para Valtech en 2022.',
            fr: 'Veuillez nous en dire un peu plus sur les voyages en voiture que vous avez effectués pour Valtech en 2022.',
            'pt-BR':
              'Por favor, conte-nos um pouco mais sobre as viagens de carro que você fez para a Valtech em 2022.',
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
                es: 'Número de horas por viaje',
                fr: "Nombre d'heures par trajet",
                'pt-BR': 'Número de horas por viagem',
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
                es: 'Número de viajes en automóvil con un solo combustible convencional (gasolina / diésel)',
                fr: 'Nombre de trajets en voiture avec un seul carburant conventionnel (essence / diesel)',
                'pt-BR': 'Número de viagens únicas de carro com combustível convencional (gasolina / diesel)',
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
                es: 'Número de viajes en automóvil híbrido individual (gasolina-eléctrico)',
                fr: 'Nombre de trajets en voiture simple hybride (essence-électrique)',
                'pt-BR': 'Número de viagens únicas de carro híbrido (gasolina-elétrico)',
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
                es: 'Número de viajes en automóvil de un solo vehículo eléctrico (EV)',
                fr: 'Nombre de trajets en véhicule électrique (VE)',
                'pt-BR': 'Número de viagens únicas de carro de elétrico (EV)',
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
                es: 'Número de viajes en automóvil con bioetanol',
                fr: 'Nombre de trajets en voiture alimentés au bioéthanol',
                'pt-BR': 'Número de viagens únicas de carro movido a bioetanol',
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
                es: 'Número de viajes en automóvil con biodiésel',
                fr: 'Nombre de trajets en voiture alimentés au biodiesel',
                'pt-BR': 'Número de viagens únicas de carro movido a biodiesel',
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
                es: 'Número de viajes en un solo automóvil de GLP',
                fr: "Nombre de trajets d'une seule voiture GPL",
                'pt-BR': 'Número de viagens únicas de carro de carro movido a GLP',
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
            es: 'Cuéntenos un poco más sobre los viajes en taxi que hizo para Valtech en 2022.',
            fr: 'Veuillez nous en dire un peu plus sur les voyages en taxi que vous avez effectués pour Valtech en 2022.',
            'pt-BR': 'Conte-nos um pouco mais sobre as viagens de táxi que você fez para a Valtech em 2022.',
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
                es: 'Número de horas por viaje',
                fr: "Nombre d'heures par trajet",
                'pt-BR': 'Número de horas por viagem',
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
                es: 'Número de viajes en taxi con combustible convencional (gasolina / diésel)',
                fr: 'Nombre de trajets simples en taxi-combustible conventionnel (essence/ diesel)',
                'pt-BR': 'Número de viagens únicas de táxi de combustível convencional (gasolina / diesel)',
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
                es: 'Número de viajes en taxi híbrido individual (gasolina / gasolina-eléctrico)',
                fr: 'Nombre de trajets en taxi hybride simple (essence / essence-électrique)',
                'pt-BR': 'Número de viagens únicas de táxi híbrido (gasolina / gasolina-elétrico)',
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
                es: 'Número de viajes individuales en taxi eléctrico',
                fr: 'Nombre de trajets en taxi électrique simple',
                'pt-BR': 'Número de viagens únicas de táxi elétrico',
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
            es: 'Cuéntenos un poco más sobre los viajes en autocar que hizo para Valtech en 2022.',
            fr: 'Veuillez nous en dire un peu plus sur les voyages en autocar que vous avez effectués pour Valtech en 2022.',
            'pt-BR':
              'Conte-nos um pouco mais sobre as viagens de Ônibus de viagem que você fez para a Valtech em 2022.',
          },
          visible: false,
          visibleIf: '{business-travel-emissions_transport-modes} contains "Coach"',
          isRequired: true,
          columns: [
            {
              name: 'duration-range',
              title: {
                default: 'Number of hours travelled',
                es: 'Número de horas por viaje',
                fr: "Nombre d'heures par trajet",
                'pt-BR': 'Número de horas por viagem',
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
                es: 'Número de viajes en autocar individual',
                fr: 'Nombre de trajets en autocar',
                'pt-BR': 'Número de viagens únicas de ônibus de viagem',
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
            es: 'Cuéntenos un poco más sobre los viajes en autobús que hizo para Valtech en 2022.',
            fr: 'Veuillez nous en dire un peu plus sur les voyages en bus que vous avez effectués pour Valtech en 2022.',
            'pt-BR': 'Conte-nos um pouco mais sobre as viagens de ônibus que você fez para a Valtech em 2022.',
          },
          visible: false,
          visibleIf: '{business-travel-emissions_transport-modes} contains "Bus"',
          isRequired: true,
          columns: [
            {
              name: 'duration-range',
              title: {
                default: 'Number of hours travelled',
                es: 'Número de horas por viaje',
                fr: "Nombre d'heures par trajet",
                'pt-BR': 'Número de horas por viagem',
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
                es: 'Número de viajes en autobús individual',
                fr: 'Nombre de trajets en bus unique',
                'pt-BR': 'Número de viagens únicas de ônibus',
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
            es: 'Cuéntenos un poco más sobre los viajes en ferry que hizo para Valtech en 2022.',
            fr: 'Veuillez nous en dire un peu plus sur les voyages en ferry que vous avez effectués pour Valtech en 2022.',
            'pt-BR': 'Conte-nos um pouco mais sobre as viagens de balsa que você fez para a Valtech em 2022.',
          },
          visible: false,
          visibleIf: '{business-travel-emissions_transport-modes} contains "Ferry / Ship"',
          isRequired: true,
          columns: [
            {
              name: 'duration-range',
              title: {
                default: 'Number of hours travelled',
                es: 'Número de horas por viaje',
                fr: "Nombre d'heures par trajet",
                'pt-BR': 'Número de horas por viagem',
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
                es: 'Número de viajes en ferry individuales',
                fr: 'Nombre de trajets en ferry simples',
                'pt-BR': 'Número de viagens únicas de balsa',
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
                es: '¿Pasó la noche fuera de casa por motivos de Valtech en 2022?',
                fr: 'Avez-vous passé la nuit loin de chez vous pour les besoins de Valtech en 2022 ?',
                'pt-BR': 'Você passou a noite longe de casa para propósitos da Valtech em 2022?',
              },
              description: {
                default:
                  'This may have been in a hotel, in other accommodation such as an Airbnb, or with friends / family.',
                es: 'Esto puede haber sido en un hotel, en otro alojamiento como un Airbnb o con amigos / familiares.',
                fr: "Cela peut avoir été dans un hôtel, dans d'autres hébergements tels qu'un Airbnb, ou avec des amis / famille.",
                'pt-BR':
                  'Isso pode ter sido em um hotel, em outras acomodações, como um Airbnb, ou com amigos / familiares.',
              },
              isRequired: true,
            },
            {
              type: 'matrixdynamic',
              name: 'business-travel-emissions_overnight-stay-details',
              title: {
                default:
                  'Please tell us some more detail on the approximate number of nights you stayed, which countries you stayed in and the type of accommodation you used in the table below.',
                es: 'Díganos más detalles sobre el número aproximado de noches que se hospedó, en qué países se hospedó y el tipo de alojamiento que utilizó en la tabla a continuación.',
                fr: "Veuillez nous donner plus de détails sur le nombre approximatif de nuits que vous avez passées, les pays dans lesquels vous avez séjourné et le type d'hébergement que vous avez utilisé dans le tableau ci-dessous.",
                'pt-BR':
                  'Por favor, informe-nos mais alguns detalhes sobre o número aproximado de noites que ficou, em que países ficou e o tipo de acomodação que utilizou na tabela abaixo.',
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
                    es: 'País de estancia',
                    fr: 'Pays de séjour',
                    'pt-BR': 'País de estadia',
                  },
                  choicesByUrl: {
                    url: 'choices/countries-of-the-world.json',
                    valueName: 'id',
                    titleName: 'title',
                  },
                  placeholder: {
                    default: 'Select your country...',
                    es: 'Seleccione su país...',
                    fr: 'Sélectionnez votre pays...',
                    'pt-BR': 'Selecione seu país...',
                  },
                },
                {
                  name: 'nights-count',
                  title: {
                    default: 'Number of nights',
                    es: 'Número de noches',
                    fr: 'Nombre de nuits',
                    'pt-BR': 'Número de noites',
                  },
                  cellType: 'dropdown',
                  allowClear: false,
                  choicesMax: 50,
                },
                {
                  name: 'nights-in-hotels-percentage',
                  title: {
                    default: '% of these nights in hotels',
                    es: '% de estas noches en hoteles',
                    fr: '% de ces nuits dans les hôtels',
                    'pt-BR': '% dessas noites em hotéis',
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
                    es: '% de estas noches en Airbnbs / casas de huéspedes',
                    fr: '% de ces nuits en Airbnbs / Locations de particulier à particulier',
                    'pt-BR': '% dessas noites em Airbnbs / pousadas',
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
                    es: '% de estas noches alojándose con amigos / familia',
                    fr: '% de ces nuits passées avec des amis / famille',
                    'pt-BR': '% dessas noites ficando com amigos / familiares',
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
                es: 'Agregar estancia',
                fr: 'Ajouter un séjour',
                'pt-BR': 'Adicionar estadia',
              },
              removeRowText: {
                default: 'Remove stay',
                es: 'Eliminar estancia',
                fr: 'Supprimer le séjour',
                'pt-BR': 'Remover estadia',
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
        es: 'Sección de sostenibilidad general',
        fr: 'Section durabilité générale',
        'pt-BR': 'Seção geral de sustentabilidade',
      },
      description: {
        default:
          "We're now going to ask you a few additional questions on your feelings about Sustainability at Valtech and your own emissions reduction efforts. We would LOVE your feedback, but feel free to skip this section. As there are some free text answers we'd like to remind you not to say anything that could identify you or any colleagues personally (e.g. names, roles, etc.).",
        es: 'Ahora vamos a hacerle algunas preguntas adicionales sobre sus sentimientos acerca de la sostenibilidad en Valtech y sus propios esfuerzos de reducción de emisiones. Nos ENCANTARÍA recibir sus comentarios, pero no dude en omitir esta sección. Como hay algunas respuestas de texto libre, nos gustaría recordarle que no diga nada que pueda identificarlo a usted o a ningún compañero personalmente (por ejemplo, nombres, roles, etc.).',
        fr: "Nous allons maintenant vous poser quelques questions supplémentaires sur vos sentiments concernant le développement durable chez Valtech et vos propres efforts de réduction des émissions. Nous AIMERIONS recevoir vos commentaires, mais n'hésitez pas à sauter cette section. Comme il y a des réponses en texte libre, nous aimerions vous rappeler de ne rien dire qui pourrait vous identifier ou identifier vos collègues personnellement (par exemple, les noms, les rôles, etc.).",
        'pt-BR':
          'Agora vamos fazer algumas perguntas adicionais sobre seus sentimentos em relação à Sustentabilidade na Valtech e seus próprios esforços de redução de emissões. Adoraríamos receber seu feedback, mas fique à vontade para pular esta seção. Como há algumas respostas de texto livre, gostaríamos de lembrá-lo de não dizer nada que possa identificar você ou seus colegas pessoalmente (por exemplo, nomes, funções, etc.).',
      },
      elements: [
        {
          type: 'boolean',
          name: 'general-sustainability_champion',
          title: {
            default: 'Do you know who the Sustainability Champion is for your entity?',
            es: '¿Sabe quién es el Campeón de Sostenibilidad para su entidad?',
            fr: 'Savez-vous qui est le champion du développement durable pour votre entité ?',
            'pt-BR': 'Você sabe quem é o Campeão de Sustentabilidade na sua entidade?',
          },
        },
        {
          type: 'boolean',
          name: 'general-sustainability_targets',
          title: {
            default:
              'Before completing this survey, were you aware that Valtech is committing to emissions reduction targets?',
            es: 'Antes de completar esta encuesta, ¿sabía que Valtech se está comprometiendo con los objetivos de reducción de emisiones?',
            fr: "Avant de répondre à ce sondage, saviez-vous que Valtech s'engage à atteindre des objectifs de réduction des émissions ?",
            'pt-BR':
              'Antes de concluir esta pesquisa, você sabia que a Valtech está se comprometendo com as metas de redução de emissões?',
          },
          description: {
            default:
              'Our emissions target is to be Net Zero by 2040, pending validation by the Science Based Targets initiative.',
            es: 'Nuestro objetivo de emisiones es ser Cero Neto para 2040, a la espera de la validación por parte de la iniciativa Science Based Targets.',
            fr: "Notre objectif d'émissions est d'être net zéro d'ici à 2040, en attendant la validation par l'initiative Science Based Targets.",
            'pt-BR':
              'Nossa meta de emissões é ser zerada até 2040, pendente de validação pela iniciativa Science Based Targets.',
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
                es: '¿Está al tanto de alguna iniciativa en su oficina base / normal de Valtech para ayudar a reducir nuestras emisiones?',
                fr: 'Connaissez-vous des initiatives dans votre bureau Valtech pour aider à réduire nos émissions ?',
                'pt-BR':
                  'Você está ciente de alguma iniciativa em sua base / escritório normal da Valtech para ajudar a reduzir nossas emissões?',
              },
              choices: [
                {
                  value: 'Yes',
                  text: {
                    default: 'Yes',
                    es: 'Sí',
                    fr: 'Oui',
                    'pt-BR': 'Sim',
                  },
                },
                {
                  value: 'No',
                  text: {
                    default: 'No',
                    es: 'No',
                    fr: 'Non',
                    'pt-BR': 'Não',
                  },
                },
                {
                  value: "N/A (I don't have a base Valtech office)",
                  text: {
                    default: "N/A (I don't have a base Valtech office)",
                    es: 'N/D (No tengo una oficina base de Valtech)',
                    fr: "N/A (Je n'ai pas de bureau Valtech)",
                    'pt-BR': 'N/A (Eu não tenho um escritório base da Valtech)',
                  },
                },
              ],
            },
            {
              type: 'text',
              name: 'general-sustainability_local-initiatives-details',
              title: {
                default: 'Please share what these initiatives are.',
                es: 'Por favor, comparta cuáles son estas iniciativas.',
                fr: 'Partagez nous ces initiatives.',
                'pt-BR': 'Compartilhe quais são essas iniciativas.',
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
                es: '¿Ya ha comenzado a hacer un esfuerzo personal para reducir sus emisiones en alguna de estas áreas?',
                fr: "Avez-vous déjà commencé à faire un effort personnel pour réduire vos émissions dans l'un de ces domaines ?",
                'pt-BR':
                  'Você já começou a fazer um esforço pessoal para reduzir suas emissões em alguma dessas áreas?',
              },
              choices: [
                {
                  value: "Yes, I'm reducing my commuting emissions",
                  text: {
                    default: "Yes, I'm reducing my commuting emissions",
                    es: 'Sí, estoy reduciendo mis emisiones de transporte',
                    fr: 'Oui, je réduis mes émissions de gaz à effet de serre liées à mes trajets domicile-travail',
                    'pt-BR': 'Sim, estou reduzindo minhas emissões de deslocamento diário',
                  },
                },
                {
                  value: "Yes, I'm reducing my business travel emissions",
                  text: {
                    default: "Yes, I'm reducing my business travel emissions",
                    es: 'Sí, estoy reduciendo mis emisiones de viajes de negocios',
                    fr: "Oui, je réduis mes émissions liées aux voyages d'affaires",
                    'pt-BR': 'Sim, estou reduzindo minhas emissões de viagens de negócios',
                  },
                },
                {
                  value: "Yes, I'm reducing my home emissions",
                  text: {
                    default: "Yes, I'm reducing my home emissions",
                    es: 'Sí, estoy reduciendo las emisiones de mi hogar',
                    fr: 'Oui, je réduis les émissions à la maison',
                    'pt-BR': 'Sim, estou reduzindo as emissões da minha casa',
                  },
                },
                {
                  value: "No, I haven't started trying to reduce my emissions in any of these areas yet",
                  text: {
                    default: "No, I haven't started trying to reduce my emissions in any of these areas yet",
                    es: 'No, todavía no he empezado a tratar de reducir mis emisiones en ninguna de estas áreas',
                    fr: "Non, je n'ai pas encore commencé à essayer de réduire mes émissions dans aucun de ces domaines",
                    'pt-BR': 'Não, ainda não comecei a tentar reduzir minhas emissões em nenhuma dessas áreas',
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
                es: '¿Puede compartir más detalles sobre lo que está haciendo para reducir sus emisiones en estas áreas?',
                fr: 'Pouvez-vous nous donner plus de détails sur ce que vous faites pour réduire vos émissions dans ces domaines ?',
                'pt-BR':
                  'Você pode compartilhar mais detalhes sobre o que está fazendo para reduzir suas emissões nessas áreas?',
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
            es: '¿Cómo podría Valtech ayudarle mejor a reducir sus emisiones personales como empleado?',
            fr: "Comment Valtech pourrait-elle vous aider au mieux à réduire vos émissions personnelles en tant qu'employé ?",
            'pt-BR': 'Como a Valtech poderia ajudá-lo a reduzir suas emissões pessoais como funcionário?',
          },
          description: {
            default: 'Select 1–3 options.',
            es: 'Seleccione opciones 1–3.',
            fr: 'Sélectionnez 1 à 3 options.',
            'pt-BR': 'Selecione opções 1-3.',
          },
          validators: [
            {
              type: 'answercount',
              text: {
                default: 'Select 1–3 options.',
                es: 'Seleccione opciones 1–3.',
                fr: 'sélectionnez 1 à 3 options.',
                'pt-BR': 'Selecione opções 1-3.',
              },
              maxCount: 3,
            },
          ],
          choices: [
            {
              value: 'Helping me learn about how I can make greener choices.',
              text: {
                default: 'Helping me learn about how I can make greener choices.',
                es: 'Ayudarme a aprender cómo puedo tomar decisiones más ecológicas.',
                fr: "M'aider à comprendre comment je peux faire des choix plus écologiques.",
                'pt-BR': 'Ajudando-me a aprender sobre como posso fazer escolhas mais ecológicas.',
              },
            },
            {
              value:
                'Introducing formal employee benefits that help me reduce my footprint (e.g. tax-free bicycle lease schemes).',
              text: {
                default:
                  'Introducing formal employee benefits that help me reduce my footprint (e.g. tax-free bicycle lease schemes).',
                es: 'Introducir beneficios formales para los empleados que me ayuden a reducir mi huella (por ejemplo, esquemas de arrendamiento de bicicletas libres de impuestos).',
                fr: "Introduire des avantages sociaux formels qui m'aident à réduire mon empreinte (par exemple, des programmes de location de vélos avantageux).",
                'pt-BR':
                  'Apresentação de benefícios formais para funcionários que me ajudam a reduzir meu impacto (por exemplo, esquemas de aluguel de bicicletas isentos de impostos).',
              },
            },
            {
              value: 'Setting up more employee groups so we can share ideas and learn from each other.',
              text: {
                default: 'Setting up more employee groups so we can share ideas and learn from each other.',
                es: 'Crear más grupos de empleados para que podamos compartir ideas y aprender unos de otros.',
                fr: "Mettre en place plus de groupes d'employés afin que nous puissions partager des idées et apprendre les uns des autres.",
                'pt-BR':
                  'Criação de mais grupos de funcionários para que possamos compartilhar ideias e aprender uns com os outros.',
              },
            },
            {
              value:
                'Negotiating discounts for employees on green solutions (e.g. discounts with solar panel suppliers).',
              text: {
                default:
                  'Negotiating discounts for employees on green solutions (e.g. discounts with solar panel suppliers).',
                es: '',
                fr: 'Négocier des remises pour les employés sur les solutions vertes (par exemple des remises avec les fournisseurs de panneaux solaires).',
                'pt-BR':
                  'Negociação de descontos para funcionários em soluções verdes (por exemplo, descontos com fornecedores de painéis solares).',
              },
            },
            {
              value: 'Communicating more frequently on our emissions reduction targets and initiatives.',
              text: {
                default: 'Communicating more frequently on our emissions reduction targets and initiatives.',
                es: '',
                fr: 'Communiquer plus fréquemment sur nos objectifs et initiatives de réduction des émissions.',
                'pt-BR': 'Comunicar com mais frequência sobre nossas metas e iniciativas de redução de emissões.',
              },
            },
            {
              value: 'Introducing more **local** initiatives and events focussed on emissions reduction.',
              text: {
                default: 'Introducing more **local** initiatives and events focussed on emissions reduction.',
                es: '',
                fr: "Introduire davantage d'initiatives et d'événements ** locaux * * axés sur la réduction des émissions.",
                'pt-BR': 'Apresentando mais iniciativas e eventos ** locais * * focados na redução de emissões.',
              },
            },
            {
              value: 'Introducing more **global** initiatives and events focussed on emissions reduction.',
              text: {
                default: 'Introducing more **global** initiatives and events focussed on emissions reduction.',
                es: '',
                fr: "Introduire davantage d'initiatives et d'événements ** mondiaux * * axés sur la réduction des émissions.",
                'pt-BR': 'Apresentando mais iniciativas e eventos ** globais * * focados na redução de emissões.',
              },
            },
          ],
          showOtherItem: true,
          otherPlaceholder: {
            default: 'Different support',
            es: 'soporte diferente',
            fr: 'Support différent',
            'pt-BR': 'suporte diferente',
          },
          otherText: {
            default: 'Other (please specify)',
            es: 'Otro (especifique)',
            fr: 'Autre (veuillez préciser)',
            'pt-BR': 'Outro (especifique)',
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
                es: 'Pensando como individuo dentro del contexto de Valtech, ¿qué área le parece más desafiante cuando se trata de reducir sus emisiones?',
                fr: "En tant qu'individu dans le contexte de Valtech, quel domaine trouvez-vous le plus difficile en matière de réduction de vos émissions ?",
                'pt-BR':
                  'Pensando como um indivíduo dentro do contexto da Valtech, qual área você acha mais desafiadora quando se trata de reduzir suas emissões?',
              },
              choices: [
                {
                  value: 'Commuting to my base Valtech office',
                  text: {
                    default: 'Commuting to my base Valtech office',
                    es: 'Viajar a mi oficina base de Valtech',
                    fr: 'Trajets domicile-travail vers mon bureau de Valtech',
                    'pt-BR': 'Deslocamento para o meu escritório base Valtech',
                  },
                },
                {
                  value: 'Commuting to client site(s)',
                  text: {
                    default: 'Commuting to client site(s)',
                    es: 'Conmutación al sitio(s) del cliente',
                    fr: 'Déplacement vers le (s) site(s) client (s)',
                    'pt-BR': 'Deslocamento para o (s) local(is) do cliente',
                  },
                },
                {
                  value: 'Working from home',
                  text: {
                    default: 'Working from home',
                    es: 'Trabajar desde casa',
                    fr: 'Travail à domicile',
                    'pt-BR': 'Trabalhar em casa',
                  },
                },
                {
                  value: 'Travelling on business',
                  text: {
                    default: 'Travelling on business',
                    es: 'Viajar por negocios',
                    fr: "Voyages d'affaires",
                    'pt-BR': 'Viajar a negócios',
                  },
                },
                {
                  value: 'I find it easy to reduce my emissions in all of these categories',
                  text: {
                    default: 'I find it easy to reduce my emissions in all of these categories!',
                    es: '¡Me resulta fácil reducir mis emisiones en todas estas categorías',
                    fr: 'Je trouve facile de réduire mes émissions dans toutes ces catégories',
                    'pt-BR': 'Eu acho fácil reduzir minhas emissões em todas essas categorias',
                  },
                },
              ],
            },
            {
              type: 'checkbox',
              name: 'general-sustainability_personal-reduction-challenging-reasons-for-commuting',
              title: {
                default: 'Why do you find it hard to reduce your commuting emissions?',
                es: '¿Por qué le resulta difícil reducir sus emisiones de transporte?',
                fr: 'Pourquoi avez-vous du mal à réduire vos émissions de gaz à effet de serre liées à vos trajets domicile-travail ?',
                'pt-BR': 'Por que você acha difícil reduzir suas emissões de deslocamento?',
              },
              description: {
                default: 'Select as many options as you like.',
                es: 'Selecciona tantos como quieras.',
                fr: 'Sélectionner autant que vous voulez.',
                'pt-BR': 'Selecione quantas opções quiser.',
              },
              visible: false,
              visibleIf:
                "{general-sustainability_personal-reduction-challenging} contains 'office-commute' || {general-sustainability_personal-reduction-challenging} contains 'client-commute'",
              clearIfInvisible: 'onHidden',
              choices: [
                {
                  value:
                    "There is no greener way for me to get there because I'm already using the greenest available method.",
                  text: {
                    default:
                      "There is no greener way for me to get there because I'm already using the greenest available method.",
                    es: 'No hay manera más verde para mí para llegar allí porque ya estoy utilizando el método más verde disponible.',
                    fr: "Il n'y a pas de moyen plus vert pour moi d'y arriver parce que j'utilise déjà la méthode la plus verte disponible.",
                    'pt-BR':
                      'Não há nenhuma maneira mais verde para eu chegar lá, porque eu já estou usando o método mais verde disponível.',
                  },
                },
                {
                  value:
                    "There is no greener way for me to get there because there's no way to get to the site by walking / cycling or using public transport.",
                  text: {
                    default:
                      "There is no greener way for me to get there because there's no way to get to the site by walking / cycling or using public transport.",
                    es: 'No hay una forma más ecológica de llegar allí porque no hay forma de llegar al sitio caminando /en bicicleta o en transporte público.',
                    fr: "Il n'y a pas de moyen plus écologique pour moi de m'y rendre car il n'y a aucun moyen de se rendre sur le site en marchant /faisant du vélo ou en utilisant les transports en commun.",
                    'pt-BR':
                      'Não há nenhuma maneira mais verde para eu chegar lá, porque não há nenhuma maneira de chegar ao local a pé /de bicicleta ou usando o transporte público.',
                  },
                },
                {
                  value:
                    "In theory the distance could be walked or cycled but it's too difficult (e.g. it's too hot / there are no cycle lanes).",
                  text: {
                    default:
                      "In theory the distance could be walked or cycled but it's too difficult (e.g. it's too hot / there are no cycle lanes).",
                    es: 'En teoría, la distancia se puede recorrer a pie o en bicicleta, pero es demasiado difícil (por ejemplo, hace demasiado calor /no hay carriles para bicicletas).',
                    fr: "En théorie, la distance peut être parcourue à pied ou à vélo, mais c'est trop difficile (par exemple, il fait trop chaud / il n'y a pas de pistes cyclables).",
                    'pt-BR':
                      'Em teoria, a distância poderia ser percorrida ou pedalada, mas é muito difícil (por exemplo, é muito quente /não há ciclovias).',
                  },
                },
                {
                  value:
                    "It's not *practical* for me to use a greener method (e.g. taking the train rather than driving would take 6x longer).",
                  text: {
                    default:
                      "It's not *practical* for me to use a greener method (e.g. taking the train rather than driving would take 6x longer).",
                    es: 'No es *práctico* para mí usar un método más ecológico (por ejemplo, tomar el tren en lugar de conducir tomaría 6 veces más tiempo).',
                    fr: "Ce n'est pas *pratique* pour moi d'utiliser une méthode plus verte (par exemple, prendre le train plutôt que de conduire prendrait 6 fois plus de temps).",
                    'pt-BR':
                      'Não é *prático* para mim usar um método mais ecológico (por exemplo, pegar o trem em vez de dirigir levaria 6x mais tempo).',
                  },
                },
                {
                  value:
                    "I have to drive and it's hard to find people to car share with and / or an electric vehicle is not an option for me.",
                  text: {
                    default:
                      "I have to drive and it's hard to find people to car share with and / or an electric vehicle is not an option for me.",
                    es: 'Tengo que conducir y es difícil encontrar personas con las que compartir el automóvil y / o un vehículo eléctrico no es una opción para mí.',
                    fr: "Je dois conduire et il est difficile de trouver des gens avec qui partager ma voiture et / ou un véhicule électrique n'est pas une option pour moi.",
                    'pt-BR':
                      'Eu tenho que dirigir e é difícil encontrar pessoas para compartilhar o carro com e / ou um veículo elétrico não é uma opção para mim.',
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
                es: '¿Por qué le resulta difícil reducir las emisiones de su trabajo desde casa?',
                fr: 'Pourquoi avez-vous du mal à réduire vos émissions de gaz à effet de serre liées à votre travail à domicile ?',
                'pt-BR': 'Por que você acha difícil reduzir suas emissões de trabalho em casa?',
              },
              description: {
                default: 'Select as many options as you like.',
                es: 'Selecciona tantos como quieras.',
                fr: 'Sélectionner autant que vous voulez.',
                'pt-BR': 'Selecione quantas opções quiser.',
              },
              visible: false,
              visibleIf: "{general-sustainability_personal-reduction-challenging} contains 'working-from-home'",
              clearIfInvisible: 'onHidden',
              choices: [
                {
                  value:
                    "I can't reduce my emissions any more because I'm already using all the low-carbon options available to me (e.g. solar panels etc.).",
                  text: {
                    default:
                      "I can't reduce my emissions any more because I'm already using all the low-carbon options available to me (e.g. solar panels etc.).",
                    es: 'Ya no puedo reducir mis emisiones porque ya estoy usando todas las opciones bajas en carbono disponibles para mí (por ejemplo, paneles solares, etc.).',
                    fr: "Je ne peux plus réduire mes émissions parce que j'utilise déjà toutes les options à faible émission de carbone à ma disposition (par exemple, panneaux solaires, etc.).",
                    'pt-BR':
                      'Não posso mais reduzir minhas emissões porque já estou usando todas as opções de baixo carbono disponíveis para mim (por exemplo, painéis solares, etc.).',
                  },
                },
                {
                  value:
                    'In my country there are no practical / affordable ways I can reduce my home emissions, aside from simply reducing my usage.',
                  text: {
                    default:
                      'In my country there are no practical / affordable ways I can reduce my home emissions, aside from simply reducing my usage.',
                    es: 'En mi país no hay formas prácticas / asequibles en que pueda reducir las emisiones de mi hogar, aparte de simplemente reducir mi uso.',
                    fr: "Dans mon pays, il n'y a pas de moyens pratiques / abordables de réduire les émissions de ma maison, en dehors de la simple réduction de mon utilisation.",
                    'pt-BR':
                      'No meu país, não há maneiras práticas / acessíveis que eu possa reduzir minhas emissões domésticas, além de simplesmente reduzir meu uso.',
                  },
                },
                {
                  value:
                    "The bigger changes I'd need to make (e.g. installing solar panels) are too **expensive** for me right now.",
                  text: {
                    default:
                      "The bigger changes I'd need to make (e.g. installing solar panels) are too **expensive** for me right now.",
                    es: 'Los cambios más grandes que tendría que hacer (por ejemplo, instalar paneles solares) son demasiado **caros** para mí en este momento.',
                    fr: 'Les plus gros changements que je devrais faire (par exemple, installer des panneaux solaires) sont trop **chers** pour moi en ce moment.',
                    'pt-BR':
                      'As mudanças maiores que eu precisaria fazer (por exemplo, instalar painéis solares) são muito **caras * * para mim agora.',
                  },
                },
                {
                  value: "The bigger changes I'd need to make are not **practical** for me right now .",
                  text: {
                    default: "The bigger changes I'd need to make are not **practical** for me right now.",
                    es: 'Los cambios más grandes que tendría que hacer no son **prácticos** para mí en este momento.',
                    fr: 'Les plus gros changements que je devrais faire ne sont pas **pratiques** pour moi en ce moment.',
                    'pt-BR': 'As maiores mudanças que eu precisaria fazer não são **práticas** para mim agora.',
                  },
                },
                {
                  value: "The bigger changes I'd need to make are **not within my direct control** .",
                  text: {
                    default: "The bigger changes I'd need to make are **not within my direct control**.",
                    es: 'Los cambios más grandes que tendría que hacer **no están bajo mi control directo ** .',
                    fr: 'Les plus grands changements que je devrais faire ne sont pas sous mon contrôle direct.',
                    'pt-BR': 'As maiores mudanças que eu precisaria fazer **não estão dentro do meu controle direto**.',
                  },
                },
                {
                  value: "I don't know where to start and I'd like some help.",
                  text: {
                    default: "I don't know where to start and I'd like some help.",
                    es: 'No sé por dónde empezar y me gustaría un poco de ayuda.',
                    fr: "Je ne sais pas par où commencer et j'aimerais de l'aide.",
                    'pt-BR': 'Não sei por onde começar e gostaria de ajuda.',
                  },
                },
                {
                  value: "I don't have time and / or inclination to explore this.",
                  text: {
                    default: "I don't have time and / or inclination to explore this.",
                    es: 'No tengo tiempo y / o inclinación para explorar esto.',
                    fr: "Je n'ai pas le temps et / ou l'envie d'explorer cela.",
                    'pt-BR': 'Eu não tenho tempo e / ou disposição para explorar isso.',
                  },
                },
                {
                  value: "I'd like to make changes but others in my household are resistant.",
                  text: {
                    default: "I'd like to make changes but others in my household are resistant.",
                    es: 'Me gustaría hacer cambios, pero otros en mi hogar se resisten.',
                    fr: "J'aimerais faire des changements, mais d'autres membres de ma famille sont résistants.",
                    'pt-BR': 'Eu gostaria de fazer mudanças, mas outros na minha casa são resistentes.',
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
                es: '¿Por qué le resulta difícil reducir las emisiones de sus viajes de negocios?',
                fr: "Pourquoi avez-vous du mal à réduire les émissions de vos voyages d'affaires ?",
                'pt-BR': 'Por que você acha difícil reduzir suas emissões de viagens de negócios?',
              },
              description: {
                default: 'Select as many options as you like.',
                es: 'Selecciona tantos como quieras.',
                fr: 'Sélectionner autant que vous voulez.',
                'pt-BR': 'Selecione quantas opções quiser.',
              },
              visible: false,
              visibleIf: "{general-sustainability_personal-reduction-challenging} contains 'business-travel'",
              clearIfInvisible: 'onHidden',
              choices: [
                {
                  value:
                    "I already travel in as green a way as possible and I can't see how I can make this any greener.",
                  text: {
                    default:
                      "I already travel in as green a way as possible and I can't see how I can make this any greener.",
                    es: 'Ya viajo de la manera más verde posible y no puedo ver cómo puedo hacer esto más verde.',
                    fr: "Je voyage déjà d'une manière aussi verte que possible et je ne vois pas comment je peux rendre cela plus vert.",
                    'pt-BR':
                      'Eu já viajo da maneira mais verde possível e não consigo ver como posso tornar isso mais verde.',
                  },
                },
                {
                  value:
                    "I can't see how I could reduce my travel for Valtech without adversely affecting business outcomes.",
                  text: {
                    default:
                      "I can't see how I could reduce my travel for Valtech without adversely affecting business outcomes.",
                    es: 'No puedo ver cómo podría reducir mis viajes para Valtech sin afectar negativamente los resultados comerciales.',
                    fr: 'Je ne vois pas comment je pourrais réduire mes voyages pour Valtech sans affecter négativement les résultats commerciaux.',
                    'pt-BR':
                      'Não consigo ver como poderia reduzir minhas viagens para a Valtech sem afetar negativamente os resultados dos negócios.',
                  },
                },
                {
                  value:
                    "Others in Valtech make decisions about my travel and there's little I can do to influence this .",
                  text: {
                    default:
                      "Others in Valtech make decisions about my travel and there's little I can do to influence this.",
                    es: 'Otros en Valtech toman decisiones sobre mi viaje y hay poco que pueda hacer para influir en esto.',
                    fr: "D'autres à Valtech prennent des décisions concernant mon voyage et il y a peu de choses que je peux faire pour influencer cela.",
                    'pt-BR':
                      'Outros na Valtech tomam decisões sobre minha viagem e há pouco que eu possa fazer para influenciar isso.',
                  },
                },
                {
                  value:
                    "There's a client expectation that I will attend meetings / events in person and this is hard to challenge.",
                  text: {
                    default:
                      "There's a client expectation that I will attend meetings / events in person and this is hard to challenge.",
                    es: 'Hay una expectativa del cliente de que asistiré a reuniones / eventos en persona y esto es difícil de desafiar.',
                    fr: "Les clients s'attendent à ce que j'assiste à des réunions / événements en personne, ce qui est difficile à contester.",
                    'pt-BR':
                      'Há uma expectativa do cliente de que eu participe de reuniões / eventos pessoalmente e isso é difícil de desafiar.',
                  },
                },
                {
                  value:
                    "There's often no greener alternative for me (e.g. I travel a lot across oceans and I can't reasonably take a greener option than the plane).",
                  text: {
                    default:
                      "There's often no greener alternative for me (e.g. I travel a lot across oceans and I can't reasonably take a greener option than the plane).",
                    es: 'A menudo no hay una alternativa más ecológica para mí (por ejemplo, viajo mucho a través de los océanos y no puedo elegir una opción más ecológica que el avión).',
                    fr: "Il n'y a souvent pas d'alternative plus verte pour moi (par exemple, je voyage beaucoup à travers les océans et je ne peux pas raisonnablement prendre une option plus verte que l'avion).",
                    'pt-BR':
                      'Muitas vezes não há alternativa mais verde para mim (por exemplo, eu atravesso muito os oceanos e não posso razoavelmente tomar uma opção mais verde do que o avião).',
                  },
                },
                {
                  value: "I don't know what options are available / don't have time to research other methods.",
                  text: {
                    default: "I don't know what options are available / don't have time to research other methods.",
                    es: 'No sé qué opciones están disponibles / no tengo tiempo para investigar otros métodos.',
                    fr: "Je ne sais pas quelles options sont disponibles /je n'ai pas le temps de rechercher d'autres méthodes.",
                    'pt-BR': 'Não sei quais opções estão disponíveis / não tenho tempo para pesquisar outros métodos.',
                  },
                },
                {
                  value: "I can't afford the extra time that a greener option would take.",
                  text: {
                    default: "I can't afford the extra time that a greener option would take.",
                    es: 'No puedo permitirme el tiempo extra que tomaría una opción más ecológica.',
                    fr: "Je ne peux pas me permettre les heures supplémentaires qu'une option plus verte prendrait.",
                    'pt-BR': 'Não posso me dar ao luxo do tempo extra que uma opção mais verde levaria.',
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
                es: 'Siéntase libre de compartir más información sobre su respuesta a la pregunta anterior.',
                fr: "N'hésitez pas à partager plus d'informations sur votre réponse à la question précédente.",
                'pt-BR':
                  'Sinta-se à vontade para compartilhar mais informações sobre sua resposta à pergunta anterior.',
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
                es: '¿Estaría usted a favor de que Valtech introdujera un impuesto sobre el carbono o un presupuesto de carbono?',
                fr: "Seriez-vous favorable à l'introduction par Valtech d'une taxe carbone ou d'un budget carbone ?",
                'pt-BR':
                  'Você seria a favor da Valtech introduzir uma taxa sobre o carbono ou um orçamento de carbono?',
              },
              description: {
                default:
                  'A carbon budget would involve setting more granular targets on specific carbon emitting activities. For example, limiting the number of flights each person or team was permitted to take per month / year. \n\nA carbon tax would be an internal levy added to specific carbon emitting activities such as flights. The money generated from this could be reinvested into emissions reduction initiatives.',
                es: 'Un presupuesto de carbono implicaría establecer objetivos más detallados sobre actividades específicas de emisión de carbono. Por ejemplo, limitar el número de vuelos que cada persona o equipo podía tomar por mes / año.\n\n Un impuesto al carbono sería un gravamen interno agregado a actividades específicas de emisión de carbono, como los vuelos. El dinero generado a partir de esto podría reinvertirse en iniciativas de reducción de emisiones.',
                fr: "Un budget carbone impliquerait de fixer des objectifs plus précis sur des activités spécifiques d'émission de carbone. Par exemple, limiter le nombre de vols que chaque personne ou équipe était autorisée à prendre par mois / année.\n\n Une taxe carbone serait une taxe interne ajoutée à des activités spécifiques émettrices de carbone telles que les vols. Les fonds ainsi générés pourraient être réinvestis dans des initiatives de réduction des émissions.",
                'pt-BR':
                  'Um orçamento de carbono envolveria o estabelecimento de metas mais detalhadas em atividades específicas de emissão de carbono. Por exemplo, limitar o número de voos que cada pessoa ou equipe fosse permitido para fazer por mês / ano.\n\n Uma taxa sobre o carbono seria uma cobrança interna adicionada a atividades específicas de emissão de carbono, como voos. O dinheiro gerado a partir disso poderia ser reinvestido em iniciativas de redução de emissões.',
              },
              choices: [
                {
                  value: 'Yes',
                  text: {
                    default: 'Yes',
                    es: 'Sí',
                    fr: 'Oui',
                    'pt-BR': 'Sim',
                  },
                },
                {
                  value: 'No',
                  text: {
                    default: 'No',
                    es: 'No',
                    fr: 'Non',
                    'pt-BR': 'Não',
                  },
                },
                {
                  value: 'Not sure',
                  text: {
                    default: 'Not sure',
                    es: 'No estoy seguro',
                    fr: 'Pas sûr',
                    'pt-BR': 'Não tenho certeza',
                  },
                },
              ],
            },
            {
              type: 'text',
              name: 'general-sustainability_carbon-tax-reasons',
              title: {
                default: 'Why is this?',
                es: '¿Por qué?',
                fr: 'Pour quelle raison ?',
                'pt-BR': 'Mas por que isso?',
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
