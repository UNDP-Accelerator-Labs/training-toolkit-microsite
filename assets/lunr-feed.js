// builds lunr
var index = lunr(function () {
  this.field('title')
  this.field('content', {boost: 10})
  this.field('sdg')
  this.field('tags')
  this.field('rblac_priorities')
  this.field('signature_solutions')
  this.field('enablers')
  this.field('url')
  this.ref('id')
});


function capitalize(str) {
  return str && typeof str === 'string'
    ? str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : str;
}

let tags = []
let sdg = []
let rblac_priorities = []
let signature_solutions = []
let enablers = []

// rblac_priorities, signature_solutions, enablers




index.add({
    title: "Botas Violeta",
    content: "#Qué es Botas Violeta?\n\ntexto xxx\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/Melissa-Aguilar/About%20us.html",
    id: 0
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Factsheet 1 on Resilience",
    content: "A co-created solutions mapping approach\n\nWhat it does.\n\nThis co-created solutions mapping approach for environmental citizen science projects represents an innovative tool, since it helps to strengthen activism in the territories, influence the inclusion of new issues on the public agenda, promote evidence-informed public policies, facilitate the co-creation of innovative solutions and raise awareness on an issue or underpin behavioral changes.\n\nThe mapping is co-created with key allies. The AccLab worked together with the Argentine Ministry of Science, Technology, and Innovation (MINCYT, by its Spanish acronym). After conducting exploratory interviews with key informants and literature research, the approach goes on to build a data gathering instrument. The data is collected and reflected in solutions mapping cards, which are later iterated with the leaders of the citizen science initiatives mapped. Each mapping card includes details of the solutions organized by predefined categories, which systematize the information and enable comparisons.\n\nValue proposition for the government/other partner.\n\nBy having a multistakeholder solutions mapping model, you will allow your governmental partner to gain a clear view of the ecosystem of people-powered solutions that emerge in response to specific development challenges. This paves the way for better public policymaking. With this tool, your governmental partner gains the ability to pinpoint essential collaborators for tackling development issues. Additionally, it helps identify available resources, spot any gaps, and uncover success stories that are ready to be scaled.\n\nRegarding other partners, such as leaders of grassroots initiatives, this tool allows them to gain a better understanding of who else is working on the same issues. This tool facilitates the formation of alliances and networking opportunities, making it easier for them to connect and work together effectively.\n\nWhy and when to use it.\n\nThis tool is most useful when there is a gap in the information available regarding grassroots solutions due to a lack of acknowledgement of people-powered initiatives, and when you count on the support of a committed partner.\n\nKnown issues and troubleshooting.\n\nIf your country, region, or community already has an initiative that documents people-powered solutions or if you do not have supportive partners to assist you, this tool may not be the most suitable choice for you.\n\nContext.\n\nWorking in its challenge on citizen science, the Argentina Accelerator Lab, together with the national Ministry of Science, Technology, and Innovation (MINCYT), used this tool for mapping citizen science initiatives. In 2021, a first edition of this solutions mapping effort was published, containing the information of 30 projects. This number grew to 55 in the second edition of this mapping. The next edition, to be published at the end of 2023, will include 100 projects. Furthermore, these solutions mapping efforts not only led to the development of a new national federal policy aimed at promoting citizen science initiatives, but also had a transformative impact on the overall citizen science ecosystem.\n\nCost to implement.\n\nThe project (including its planning, design of deliverables and editing) involves a very modest budget, with the majority of the costs attributed to human resources.\n\nTime\n\nThe time required to implement this tool can vary depending on several factors, though it is important to clarify that this tool is not excessively time-consuming. The timeframe may be influenced by factors such as the desired scope of your mapping, the accessibility of information, and the availability of the mapping team’s time.\n\nPeople.\n\nThe tool is suitable for working with small teams of 4 to 6 people, to larger teams.\n\nFocal point.\n\nMaría Verónica Moreno – Head of Solutions Mapping. Argentina Accelerator Lab.\n\nMaría Verónica is the Head of Solutions Mapping for the Argentina Accelerator Lab since 2019. She has experience in international organizations, academia, and the public and private sector. She has worked as an undergraduate and graduate professor and researcher at the University of Buenos Aires (UBA, by its Spanish acronym). She has a Doctorate in Social Sciences (UBA), a Master’s Degree in Public Policy from the Torcuato Di Tella University and a Bachelor’s Degree in Sociology from the University of Salvador.\n\nCountry, year, and language.\n\nArgentina, ongoing; Spanish and English.\n\nResources.\n\n\n  \n    [ENGLISH] United Nations Development Program &amp; Ministry of Science, Technology and Innovation of Argentina (2022). Citizen Science. Solutions mapping. Second Edition. Buenos Aires: UNDP. Available at: https://www.undp.org/sites/g/files/zskgke326/files/2022-10/FichasCienciaCiudadana_en_0.pdf\n  \n  \n    [SPANISH] Programa de Naciones Unidas para el Desarrollo y Ministerio de Ciencia, Tecnología e Innovación de Argentina (2022). Ciencia Ciudadana Mapeo de iniciativas nacionales. Segunda Edición. Buenos Aires: PNUD. Disponible en: https://www.undp.org/sites/g/files/zskgke326/files/2022-10/FichasCienciaCiudadana_es.pdf\n  \n  \n    [ENGLISH] Moreno, M. V., D´Onofrio, M.G., Ruiz Rivadeneira, R., Sambeth Outón, B., Moscovich, L. &amp; Markstein, L. (2022). Citizen Science and Collective Participation: Lessons Learned from the First Edition of the Environmental Citizen Science Solutions Mapping. Buenos Aires: UNDP. Available at: https://www.undp.org/sites/g/files/zskgke326/files/2022-10/Colab_2022_mayo_reportemapeo_v16_ENG.pdf\n  \n  \n    [SPANISH] Moreno, M. V., D´Onofrio, M.G., Ruiz Rivadeneira, R., Sambeth Outón, B., Moscovich, L. y Markstein, L. (2022). Con ciencia colectiva: aprendizajes de la primera edición del mapeo en ciencia ciudadana ambiental. Buenos Aires: PNUD. Disponible en: https://www.undp.org/sites/g/files/zskgke326/files/2022-10/Colab_2022_mayo_reportemapeo_v16_ESP.pdf\n  \n  \n    [ENGLISH] United Nations Development Program &amp; Ministerio de Ciencia, Tecnología e Innovación (2021). Environmental Citizen Science: Mapping of national initiatives. Buenos Aires: UNDP. Available in https://www.ar.undp.org/content/argentina/es/home/library/hiv_aids/CiaCiudadanaAmbiental.html\n  \n  \n    [SPANISH] Programa de Naciones Unidas para el Desarrollo y Ministerio de Ciencia, Tecnología e Innovación (2021). Ciencia Ciudadana Ambiental Mapeo de iniciativas nacionales. Buenos Aires: PNUD. Disponible en: https://www.undp.org/sites/g/files/zskgke326/files/migration/ar/PNUDArgent-CiaCiudadabaAMB_ES_V2.pdf\n  \n  \n    [ENGLISH] Moreno, M. V. (December 7, 2021). Environmental citizen science in Argentina: mapping as an enhancement. UNDP Argentina. https://www.undp.org/es/argentina/blog/environmental-citizen-science-argentina-mapping-enhancement\n  \n  \n    [SPANISH] Moreno, M. V. (7 de diciembre de 2021). Ciencia ciudadana ambiental en Argentina: el mapeo como puesta en valor. PNUD Argentina. https://www.undp.org/es/argentina/blog/ciencia-ciudadana-ambiental-en-argentina-el-mapeo-como-puesta-en-valor\n  \n  \n    [ENGLISH] Moreno, M.V. (August 25, 2021). People are not datasets. Citizen science and collective intelligence. UNDP Argentina. https://www.undp.org/es/argentina/blog/people-are-not-datasets-citizen-science-and-collective-intelligence\n  \n  \n    [SPANISH] Moreno, M.V. (25 de agosto de 2021). Las personas no son bases de datos. Ciencia ciudadana e inteligencia colectiva. PNUD Argentina. https://www.undp.org/es/argentina/blog/las-personas-no-son-bases-de-datos-ciencia-ciudadana-e-inteligencia-colectiva\n  \n\n\nComment from Patricia: They are great resources, such as blogs and publications displaying the main results. It would be great to know more about the approach, which is what caught my attention in the title ‘A co-created solutions mapping approach.’ Moreover, I think it is relevant to mention the alignment of the value proposition with UNDP’s signature solutions and the SDGs.\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/3_Resilience/Factsheet1.html",
    id: 1
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Factsheet 1 on Public Innovation",
    content: "Using design thinking to design public products or services\n\nWhat it does.\nThis tool enables you to apply design thinking, one of the most used methods for public innovation, to design or improve public products or services in collaboration with users, particularly those from vulnerable contexts. Design thinking is a user-centered approach that prioritizes placing the user at the center of the design process. This is because the individuals who will ultimately use the product or service are the ones who best understand the necessary features to meet their needs, desires, and expectations.\n\nValue proposition for the government/other partner.\nApplying design thinking enables national and local governments to:\n(1) strengthen their capacities in public innovation through hands-on experience;\n(2) ensure that the responses are genuinely relevant and effective by gaining a deep understanding of the specific needs of users;\n(3) design cost-effective solutions;\nand (4) foster closer citizen-government relationships by establishing a collaborative and co-creative work routine.\n\n",
    tags: null,
    sdg: ["1 No Poverty"],
    enablers: ["Digitalisation"],
    signature_solutions: ["Poverty and Inequality","Governance"],
    rblac_priorities: ["Pillar 1 Inclusive and Sustainable Growth"],
    url: "/2_Governance/Factsheet_1.html",
    id: 2
});

//Iterate through the tags


//Iterate through the SDGs

    if(sdg.indexOf("1 No Poverty") < 0) {
        sdg.push("1 No Poverty")
    }


//Iterate through the Enablers

    if(enablers.indexOf("Digitalisation") < 0) {
        enablers.push("Digitalisation")
    }


//Iterate through the Signature Solutions

    if(signature_solutions.indexOf("Poverty and Inequality") < 0) {
        signature_solutions.push("Poverty and Inequality")
    }

    if(signature_solutions.indexOf("Governance") < 0) {
        signature_solutions.push("Governance")
    }


//Iterate through the RBLAC Priorities

    if(rblac_priorities.indexOf("Pillar 1 Inclusive and Sustainable Growth") < 0) {
        rblac_priorities.push("Pillar 1 Inclusive and Sustainable Growth")
    }






index.add({
    title: "Factsheet 1 on Poverty in LA",
    content: "How to use this toolkit\n\nDownload\nYou can download file from here.\n\nYou can also download a sample pdf from this link\n\nGlossary\n\nWe use the metaphor of the toolkit to emphasize the operational, enabling nature of the work you are reading right now. The following words are used throughout it a metaphorical sense:\n\n\n  The Toolkit is a set of resources and their documentation materials meant to help people and organizations who want to support innovation ecosystems.\n  The toolkit contains tools. Each tool consists of one or more resources. Each resourcecomes with a factsheet.\n    \n      A resource is a document that can be re-used, in part or as a whole. Examples are talking points or slide decks to argue for supporting innovation ecosystems; workplans and lists of deliverables to achieve operational status for a government innovation unit; agendas for workshops meant to socialize key concepts around innovation with senior civil servants; curricula for courses on key skills useful to employees of an innovation unit.\n      A factsheet is a resource’s metadata. It explains what the resource is good for; what it is not good for; the context in which it was produced; how much money and time you will need to deploy it, and so on. You will also find a reference to the person or people who created the resource in the first place.\n    \n  \n\n\nValues and attitude\n\nValues\n\nThis toolkit was produced in the cultural context of UNDP’s Accelerator Labs and Chief Digital Office. It inherits their culture of deep listening, immersion within the everyday reality of the Global South, respect for grassroots innovation, openness, and epistemological humility. It does not seek to provide turnkey solutions, but to share the knowledge accumulated along the way, in the hope of making the task of supporting innovation ecosystems a little less difficult.\n\nSupport, nurture and take stock\n\nInnovation is an important ingredient of development. It helps national communities find ways to confront new, emerging challenges, and new ways to confront old ones.\n\nInnovation is rarely done in isolation. Behind any successful innovation stands a plurality of agents (businesses, government agencies, education establishments…), and artifacts (legal frameworks, physical infrastructure, market institutions, financial services…). This is why we talk of innovation ecosystems, using a metaphor from ecology. Just like with actual ecosystems, innovation ecosystems are healthier when they are denser (more individual animals and plants) and more diverse (more species thereof).\n\nFor this reason, good interventions on innovation are supportive and nurturing of national actors. Before you make a decisive move, it’s a good idea to take stock of what is already there. In this toolkit you will find resources to help you design and run a mapping exercise.\n\nDon’t compete with extant actors\n\nIf you see actors performing a role in an innovation ecosystem, do not try to outcompete them. Maybe someone is running an incubator, or an innovation challenge; even if you think you can do better than them, it is almost always a bad idea to launch your own initiative. Rather than replace, add to the system: maybe provide something they are not doing yet, or launch an initiative to help them do better. This makes ecological sense; also, it makes your initiative more politically acceptable, and hopefully welcome.\n\nDon’t try to control\n\nLike all complex systems, an innovation ecosystem cannot be controlled. You are a contributor to it, not its boss. Listen, stay open, seek alignment, put actors in line of sight of one another.\n\nHow to proceed\n\nDecide what you want to do and browse the catalogue\n\nThe tools in this kit are labelled according to function. So, in the catalogue you will find tools with names like “How to map the innovation ecosystem” and “How to take a newly created innovation unit to fully operational status”. If one of these labels is right for you, look at the tools themselves.\n\nTools are sorted into into four main categories, based on the requests that UNDP’s government partners have brought to the Accelerator Labs in the period 2019-2022. Tools within the same category combine naturally.\n\nRead the factsheet\n\nThe factsheet contains information you can use to decide if a tool is useful to you after all. Is it function aligned with your own purpose? Is it compatible with your time and money budget? Did its deployment run into problems, and how were they addressed? And so on.\n\nUse the resources\n\nIf the factsheet convinces you, you can move on to the resource itself. This might be a slightly harder read (it was not written with your case in mind!), and almost certainly you will need to make changes to it. Hopefully that still saves you time and effort with respect to starting from scratch.\n\nAsk for support\n\nAll resources have an author. The ethos of UNDP’s Accelerator Labs and Chief Digital Office is one of sharing knowledge, so you can reach out to the author if you need more information and support.\n\nRefer to the pdf this link\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/1_Poverty_and_Inequality/Factsheet_1.html",
    id: 3
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Factsheet 1",
    content: "FACTSHEET TEMPLATE\n\n*Create a copy of this document to fill out the information for your Lab’s tool.\n\n*Tip: for easier navigation, open the document in the Word App (not the browser) and use the navigation panel to move throughout the document.\n\nTable of contents\n\nTable of contents 1\n\n1. About 1\n\n2. Factsheet – Add your tool’s info here! 3\n\n3. Final steps for submitting your tool 6\n\nSaving the file 6\n\nFilling out a form with the basic information 6\n\n1. About\n\nAbout Track B: Regional Toolkit\n\nWhat is the toolkit for?\n\nThe toolkit is aiming to gather and organize the work of our region to share concrete tools that can be used and replicated by other country offices.\n\nAs the Acc Lab Global Team puts it, ‘ to put the findings and learnings of the Acc Lab Network at the fingertips of all UNDP’.\n\nWhat is the toolkit about?\n\nThe toolkit will organize the tools based on UNDP six solutions (Strategic Plan) and the three enablers.\n\nWho is the audience?\n\nOur first target audience is internal: other UNDP colleagues from different teams (national, regional, global levels).\n\nWe will be organizing diverse events to introduce the existence of this toolkit and showcase it in action.\n\nHow would the toolkit look like?\n\nWe got inspire by the work done by the Accelerator Global Team on the “National Innovation Ecosystems Toolkit.” Thus, we are applying the same logic to map and share tools. Please navigate the**  **mini website**to see the example**; we will have one just like it for our regional toolkit.\n\nImportant: the subject of public sector innovation is just an example, our toolkit can contain any topic.\n\nWhat goes on the toolkit?   How do I know what can be used as a tool?\n\nPlease review the tools that are currently shared in the “National Innovation Ecosystems Toolkit” (leaving here two tools for you to click tool 1, tool 2).\n\nA tool can take various formats and shapes (methodology, organization model, prototype, ToRs, digital tool, etc).\n\nThe two key criteria of selection for a tool would be:\n\n\n  Is this tool ready to be shared? Is it scalable? Does it have concrete results?\n  Does this tool stand alone? Can it be easily understood and replicated by another team?\n\n\nKeep in mind that we are not looking for summaries of the Lab’s initiatives or action plans, but rather for TOOLS.\n\nHow many tool templates can each Lab submit?\n\nThere is not maximum number of tools per Lab, we are looking for quality rather than quantity.\n\nHow will we ensure the quality of our tools? (peer review)\n\nWe would like to make a collective effort to review our tools, thus each tool template author will be requested to review another tool.\n\nAbout this factsheet:\n\n\n  This factsheet allows you to share your work with a UNDP broad audience.\n  Each factsheet is meant to describe one tool , which can include one or more resources (manual, ToRs, blog post, flyer, PPT, Code, etc.).\n  We are not looking for a full description of ALL the work that you have done, but rather for ONE tool that can stand alone, please unbundle your work.\n  For example, the whole of Thinkia, Ecuador’s citizen innovation lab, is not a single tool, but many. We provide a factsheet for one of its component tool, its multistakeholder governance model. We believe such a model can be applied, with the necessary changes, to projects other than Thinkia, where the same problem of sharing the governance between the public sector and other stakeholders exists.\n  The factsheet should contain concise descriptions and be no longer than two pages.\n\n\nFor questions or comments, you can contact:\n\nAna Grijalva (ana.grijalva@undp.org) – Head of Exploration Ecuador\n\nGabriela Ríos (gabriela.rios@unp.org) – Head of Exploration Mexico\n\n2. Factsheet\n\nTool: Guide for Volunteers (EXPERIMENT#1)\n\nFill out your tool’s information in this section. _ The factsheet should contain concise descriptions and be no longer than two pages. _\n\nTitle of your tool\n\n\n  Choose a title that uses simple words of common use rather than jargon. A suggested format is the tool’s function + a defining characteristic of the tool. For example: a multistakeholder (defining characteristic) governance model (function).\n  The title should be in Heading 1 style. Do not alter the normal style to make the text look like a title, or you will break the rendering process onto the website.\n  The title should not contain the word “Factsheet”\n\n\nContribuyendo a la Aceleración del Desarrollo Sostenible desde el Voluntariado\n\nContributing to Accelerate Sustainable Development with Volunteers\n\nWhat it does.\n\nList the three actions/activities that your tool allows to do (offer).\n\n_ Suggestion: _ This [title of the tool] allows you to do [action 1], [action 2], and [action 3].\n\nThis guide for volunteers offers materials to transfer capacities to conduct solution mapping, exploration of data sources, future scanning, and experimentation activities that can be implemented quickly while addressing needs from people in the field.\n\nValue proposition for the government/other partner.\n\nDescribe the advantage using your tool will bring about.\n\n_ Suggestion _: By having a [title of the tool], you will enable [the partner] to achieve [something of value and align with UNDP’s signature solutionsand the SDGs].\n\nBy using the volunteers guide, organizations can engage their members in activities that address development challenges in a collective way, document their learnings, and increase the scope of their impact.\n\nWhy and when to use it.\n\nGive detail about the “right” environment for this tool to be effectively used.\n\n_ Suggestion: _ This tool is most useful when [situation 1], [situation 2], and [situation 3].\n\nThis tool is useful when organizations engage volunteers in the field and there is a need to learn quickly from the needs of people. Volunteers can become the eyes and hands that help learn and act quickly in response to people’s needs.\n\nKnown issues and troubleshooting.\n\nExplain which are the necessaries requirements for this tool to be used so that the user know when not to use it.\n\n_ Suggestion: _ If there is a lack of [requirement 1], [requirement 2], and [requirement 3], it is not yet the best moment to make use of this tool.\n\nIf there is no intention to go to the field, there is no need to learn alternative solutions, no action will be informed by learning, or there are no resources to facilitate the exchange of learnings, it is not yet the best moment to make use of this tool.\n\nContext.\n\nDescribe how this tool came into existence. If it is part of a bigger effort, describe that too.\n\nThis tool came to existence after building an alliance between UNDP and Centro de Voluntariado Guatemalteco (CVG). We realized that volunteers had a unique opportunity to contribute to development given their proximity with the conditions of people in need. Their eyes and hands on the ground are an invaluable resource to map solutions, explore sources of information, anticipate futures, and experiment with innovations. We realized that the profound personal experiences and learnings from volunteers had an untapped potential when it’s integrated into collective learning experiences that we can build our understandings and possibilities for action.\n\nCost to implement.\n\nHow much does it cost, in USD, to implement this tool?\n\n_ Suggestion: _ think about what the partner would spend to implement, not about how much it cost to create it in the first place.\n\nThe cost to implement is mainly human time. It can be adapted to the conditions, but it helps to have a venue, capacity to share visual materials, internet connection, materials for co-designing, food for participants.\n\nTime\n\nHow much time does it take to develop and implement? In calendar time\n\n_ Suggestion: _ think about the number of weeks or months someone would need to implement this tool.\n\nThe time of implementation can be as short as half a day, when only using parts of the volunteer guide, or it can be a full program with field visits over a three months.\n\nPeople.\n\nDescribe the team needed to implement. Try to avoid just sharing the hierarchy rank and rather focus on their roles.\n\n_ Suggestion: _ number of members of the team and responsibilities.\n\nAt the very least, the implementation requires one facilitator with knowledge of the volunteer guide to implement the workshops. Additionally, other functions that are needed are the logistics for bringing people together and accommodating the venue. And the participants.\n\nFocal point.\n\nName(s) of the authors of this tool. Short biography (max. 150 words).\n\nThe authors are Javier Brolo and María Inés Castañeda. Javier Brolo is Head of Experimentation at the Accelerator Lab in Guatemala.\n\nCountry, year, and language.\n\nThis information helps contextualize the tool.\n\nThe tool was developed in Guatemala in 2022 and it’s in Spanish.\n\nResources.\n\nA list of the resources supporting the tool. There can be more than one resource, each one presenting the same content in different forms: for example a concept note and a slide deck of the same project, or the syllabus for a course and the link to a blog post explaining the logic behind the course.  Resources can be either files attached to the toolkit or links to external web resources. List all the resources you have available and include the links you have (in the last section of this template we’ll direct you to a form where you can upload the files you want to submit as attachments).\n\nThe tol can be downloaded from here:\n\nhttps://www.undp.org/es/guatemala/publicaciones/contribuyendo-la-aceleracion-del-desarrollo-sostenible-desde-el-voluntariado\n\nInside the guide, there is a list of additional resources supporting the tool: Mural, Zoom, Whatsapp, Google Docs, and several templates to use during the workshop.\n\n3. Final steps for submitting your tool\n\nYou are almost there! Please follow the next steps to submit your tool J\n\nSaving the file\n\n\n  Name the file: save your document with the following codification:\n\n\nYour country’s abbreviation_Date (year-month-day)_Short title of your tool\n\nSee example:\n\nMX_230907_NLP for effective policy\n\n\n  Save the file in this folder: 1. Collection of factsheets (tools)– you can also access this folder under the files of the “Region-Latin America and the Caribbean” Teams channel in the Accelerator Labs Network Teams.\n\n\nFilling out a form with the basic information\n\nPlease fill out this short form to complete your submission: https://forms.office.com/e/fdmE7WBfm1\n\nThis form will help us identify how your tool relates to the Strategic Plan and the Regional programme document for LAC. You can also upload your resources there.\n\nLast update: September 7, 2023\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/4_Environment/Factsheet_1.html",
    id: 4
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Factsheet 1 in Public Goods",
    content: "\n",
    tags: null,
    sdg: ["2 Zero Hunger","3 Good Health and Well Being"],
    enablers: ["Strategic Innovaiton"],
    signature_solutions: ["Gender Equality"],
    rblac_priorities: ["Pillar 4 Effective Governance"],
    url: "/2_Governance/Factsheet_2.html",
    id: 5
});

//Iterate through the tags


//Iterate through the SDGs

    if(sdg.indexOf("2 Zero Hunger") < 0) {
        sdg.push("2 Zero Hunger")
    }

    if(sdg.indexOf("3 Good Health and Well Being") < 0) {
        sdg.push("3 Good Health and Well Being")
    }


//Iterate through the Enablers

    if(enablers.indexOf("Strategic Innovaiton") < 0) {
        enablers.push("Strategic Innovaiton")
    }


//Iterate through the Signature Solutions

    if(signature_solutions.indexOf("Gender Equality") < 0) {
        signature_solutions.push("Gender Equality")
    }


//Iterate through the RBLAC Priorities

    if(rblac_priorities.indexOf("Pillar 4 Effective Governance") < 0) {
        rblac_priorities.push("Pillar 4 Effective Governance")
    }






index.add({
    title: "Contributors",
    content: "Meet the Contributors\n\n\n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Jasmine Smith\n        \n        GreenEarth Initiative\n        Senior Project Coordinator\n      \n    \n    Jasmine Smith is a seasoned environmental activist and project coordinator with GreenEarth Initiative. With over a decade of experience, Jasmine has led multiple campaigns focused on sustainable living and climate change awareness. She specializes in community mobilization and education programs, aiming to involve local communities in environmental conservation efforts. Jasmine is known for her dynamic workshop sessions and engaging public speaking. She holds a Master’s in Environmental Science from the University of California, Berkeley. Her work extends to collaborating with government bodies to implement eco-friendly policies.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Carlos Rodriguez\n        \n        TechSolutions Inc.\n        CEO\n      \n    \n    Carlos Rodriguez is an innovative tech entrepreneur, founder of TechSolutions Inc., and a pioneer in developing smart city technologies. His expertise lies in integrating IoT with urban infrastructure to enhance efficiency and quality of life. Carlos has spearheaded projects in multiple cities worldwide, transforming them into tech-savvy urban centers. He frequently speaks at international technology forums and collaborates with universities to foster young tech talents. Carlos holds a degree in Computer Engineering from MIT and an MBA from Harvard Business School. His vision is to bridge the gap between technology and everyday life.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Lena Kim\n        \n        Global Finance Corp.\n        Senior Financial Analyst\n      \n    \n    Lena Kim is a financial analyst with a sharp eye for market trends and economic patterns. Currently working at Global Finance Corp., she provides insightful analysis to help shape investment strategies and market forecasts. Lena’s expertise includes emerging markets and cryptocurrency. She is known for her comprehensive reports and has been a guest speaker at various financial summits. Lena earned her degree in Economics from the London School of Economics and is currently pursuing her CFA certification. She is passionate about mentoring young women interested in finance and economics.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Marcus Johnson\n        \n        Urban Revitalization Project\n        Chief Urban Planner\n      \n    \n    Marcus Johnson is an experienced urban planner and architect, currently leading the Urban Revitalization Project in New York. With a focus on sustainable and inclusive urban development, Marcus has been instrumental in transforming cityscapes into vibrant, functional spaces. He collaborates closely with local communities to ensure their needs are met in urban designs. Marcus regularly contributes articles to architecture journals and is a guest lecturer at Columbia University. He holds a Master's degree in Architecture from Princeton University. Marcus is an advocate for green building practices and pedestrian-friendly city planning.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Sophia Martinez\n        \n        Human Rights Watch\n        Lead Counsel\n      \n    \n    Sophia Martinez is a human rights lawyer with a strong commitment to justice and equality. Working with Human Rights Watch, she has been involved in high-profile cases defending the rights of marginalized communities. Sophia’s work extends beyond the courtroom to public advocacy and legal reform. She is a key figure in initiatives for legal literacy and has conducted workshops globally. Sophia holds a law degree from Yale Law School and has been recognized for her contributions with several awards. She is a vocal advocate for women’s rights and refugee protection.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Daniel Chen\n        \n        BioTech Solutions\n        Head of Research\n      \n    \n    Daniel Chen is a distinguished biomedical researcher focused on developing innovative solutions for chronic diseases. He currently leads a research team at BioTech Solutions, working on breakthrough therapies in immunology. Daniel’s work has been published in numerous scientific journals, and he holds several patents in medical technology. He is also a regular speaker at international medical conferences. Daniel earned his PhD in Biomedical Engineering from Stanford University. He is passionate about bridging the gap between research and real-world medical applications, aiming to improve patient care and treatment methods.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n  \n\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/Team.html",
    id: 6
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "About Purple Boot Initiative",
    content: "ABout Purple Boot\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/Adedapo/about-puple-boot.html",
    id: 7
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Background and purpose",
    content: "Background and purpose\n\nContent goes here.\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/Getting%20started/background.html",
    id: 8
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "How to use the toolkit",
    content: "How to use this toolkit\n\nContent goes here.\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/Getting%20started/how-to-use-the-toolkit.html",
    id: 9
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Training Melissa",
    content: "Step 1:\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/Melissa-Aguilar/",
    id: 10
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Paulina´s File",
    content: "This is a test content\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/Paulina%20Jim%C3%A9nez/",
    id: 11
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Governance",
    content: "\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/2_Governance/",
    id: 12
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Poverty and Inequality",
    content: "\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/1_Poverty_and_Inequality/",
    id: 13
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "test topic",
    content: "This is test content\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/Adedapo/",
    id: 14
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Resilience",
    content: "\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/3_Resilience/",
    id: 15
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Environment",
    content: "\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/4_Environment/",
    id: 16
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Getting Started",
    content: "\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/Getting%20started/",
    id: 17
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Getting Started",
    content: "Markdown Basics\n\nIntroduction\n\nThis page serves as a reference guide to the Markdown syntax used for creating different elements in your micro-site. You can use this guide to populate your micro-site with various content elements.\n\nHeaders\n\nUse hash symbols (#) for headers. The number of hashes indicates the header level.\n\nHeader 1\nHeader 2\nHeader 3\nHeader 4\nHeader 5\nHeader 6\n\nText Formatting\n\nItalic Text\nBold Text\nStrikethrough Text\n\nLinks\n\nLink Text\n\nLists\n\nUnordered List:\n\n  Item 1\n  Item 2\n  Item 3\n\n\nOrdered List:\n\n  First Item\n  Second Item\n  Third Item\n\n\nImages\n\n\n\nBlockquotes\n\n\n  This is a blockquote.\n\n\nCode Blocks\n\nInline code: code here\n\nCode Block:\n`python\ndef hello():\n    print(\"Hello, World!\")\n\\`\n\nHorizontal Lines\n\n\n\nTables\n\n\n  \n    \n      Header 1\n      Header 2\n    \n  \n  \n    \n      Content 1\n      Content 2\n    \n  \n\n\nFootnotes\n\nThis is a sentence with a footnote.1\n\n\n  \n    \n      This is the footnote content. &#8617;\n    \n  \n\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/",
    id: 18
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities









index.add({
    title: "Values and attitude",
    content: "## Values and attitude\n\n\nContent goes here.\n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/Getting%20started/values.html",
    id: 20
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Jasmine Smith",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Jasmine Smith\n            \n            GreenEarth Initiative\n            Senior Project Coordinator\n          \n        \n        \n          Jasmine Smith is a seasoned environmental activist and project coordinator with GreenEarth Initiative. With over a decade of experience, Jasmine has led multiple campaigns focused on sustainable living and climate change awareness. She specializes in community mobilization and education programs, aiming to involve local communities in environmental conservation efforts. Jasmine is known for her dynamic workshop sessions and engaging public speaking. She holds a Master’s in Environmental Science from the University of California, Berkeley. Her work extends to collaborating with government bodies to implement eco-friendly policies.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/contributors/Jasmine-Smith.html",
    id: 21
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Carlos Rodriguez",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Carlos Rodriguez\n            \n            TechSolutions Inc.\n            CEO\n          \n        \n        \n          Carlos Rodriguez is an innovative tech entrepreneur, founder of TechSolutions Inc., and a pioneer in developing smart city technologies. His expertise lies in integrating IoT with urban infrastructure to enhance efficiency and quality of life. Carlos has spearheaded projects in multiple cities worldwide, transforming them into tech-savvy urban centers. He frequently speaks at international technology forums and collaborates with universities to foster young tech talents. Carlos holds a degree in Computer Engineering from MIT and an MBA from Harvard Business School. His vision is to bridge the gap between technology and everyday life.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/contributors/Carlos-Rodriguez.html",
    id: 22
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Lena Kim",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Lena Kim\n            \n            Global Finance Corp.\n            Senior Financial Analyst\n          \n        \n        \n          Lena Kim is a financial analyst with a sharp eye for market trends and economic patterns. Currently working at Global Finance Corp., she provides insightful analysis to help shape investment strategies and market forecasts. Lena’s expertise includes emerging markets and cryptocurrency. She is known for her comprehensive reports and has been a guest speaker at various financial summits. Lena earned her degree in Economics from the London School of Economics and is currently pursuing her CFA certification. She is passionate about mentoring young women interested in finance and economics.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/contributors/Lena-Kim.html",
    id: 23
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Marcus Johnson",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Marcus Johnson\n            \n            Urban Revitalization Project\n            Chief Urban Planner\n          \n        \n        \n          Marcus Johnson is an experienced urban planner and architect, currently leading the Urban Revitalization Project in New York. With a focus on sustainable and inclusive urban development, Marcus has been instrumental in transforming cityscapes into vibrant, functional spaces. He collaborates closely with local communities to ensure their needs are met in urban designs. Marcus regularly contributes articles to architecture journals and is a guest lecturer at Columbia University. He holds a Master's degree in Architecture from Princeton University. Marcus is an advocate for green building practices and pedestrian-friendly city planning.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/contributors/Marcus-Johnson.html",
    id: 24
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Sophia Martinez",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Sophia Martinez\n            \n            Human Rights Watch\n            Lead Counsel\n          \n        \n        \n          Sophia Martinez is a human rights lawyer with a strong commitment to justice and equality. Working with Human Rights Watch, she has been involved in high-profile cases defending the rights of marginalized communities. Sophia’s work extends beyond the courtroom to public advocacy and legal reform. She is a key figure in initiatives for legal literacy and has conducted workshops globally. Sophia holds a law degree from Yale Law School and has been recognized for her contributions with several awards. She is a vocal advocate for women’s rights and refugee protection.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/contributors/Sophia-Martinez.html",
    id: 25
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities






index.add({
    title: "Daniel Chen",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Daniel Chen\n            \n            BioTech Solutions\n            Head of Research\n          \n        \n        \n          Daniel Chen is a distinguished biomedical researcher focused on developing innovative solutions for chronic diseases. He currently leads a research team at BioTech Solutions, working on breakthrough therapies in immunology. Daniel’s work has been published in numerous scientific journals, and he holds several patents in medical technology. He is also a regular speaker at international medical conferences. Daniel earned his PhD in Biomedical Engineering from Stanford University. He is passionate about bridging the gap between research and real-world medical applications, aiming to improve patient care and treatment methods.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n",
    tags: null,
    sdg: null,
    enablers: null,
    signature_solutions: null,
    rblac_priorities: null,
    url: "/contributors/Daniel-Chen.html",
    id: 26
});

//Iterate through the tags


//Iterate through the SDGs


//Iterate through the Enablers


//Iterate through the Signature Solutions


//Iterate through the RBLAC Priorities







// builds reference data
var store = [{
  "title": "Botas Violeta",
  "url": "/Melissa-Aguilar/About%20us.html",
  "content": "#Qué es Botas Violeta?\n\ntexto xxx\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "#Qué es Botas Violeta?\n\ntexto xxx\n",
  "id": 27
},{
  "title": "Factsheet 1 on Resilience",
  "url": "/3_Resilience/Factsheet1.html",
  "content": "A co-created solutions mapping approach\n\nWhat it does.\n\nThis co-created solutions mapping approach for environmental citizen science projects represents an innovative tool, since it helps to strengthen activism in the territories, influence the inclusion of new issues on the public agenda, promote evidence-informed public policies, facilitate the co-creation of innovative solutions and raise awareness on an issue or underpin behavioral changes.\n\nThe mapping is co-created with key allies. The AccLab worked together with the Argentine Ministry of Science, Technology, and Innovation (MINCYT, by its Spanish acronym). After conducting exploratory interviews with key informants and literature research, the approach goes on to build a data gathering instrument. The data is collected and reflected in solutions mapping cards, which are later iterated with the leaders of the citizen science initiatives mapped. Each mapping card includes details of the solutions organized by predefined categories, which systematize the information and enable comparisons.\n\nValue proposition for the government/other partner.\n\nBy having a multistakeholder solutions mapping model, you will allow your governmental partner to gain a clear view of the ecosystem of people-powered solutions that emerge in response to specific development challenges. This paves the way for better public policymaking. With this tool, your governmental partner gains the ability to pinpoint essential collaborators for tackling development issues. Additionally, it helps identify available resources, spot any gaps, and uncover success stories that are ready to be scaled.\n\nRegarding other partners, such as leaders of grassroots initiatives, this tool allows them to gain a better understanding of who else is working on the same issues. This tool facilitates the formation of alliances and networking opportunities, making it easier for them to connect and work together effectively.\n\nWhy and when to use it.\n\nThis tool is most useful when there is a gap in the information available regarding grassroots solutions due to a lack of acknowledgement of people-powered initiatives, and when you count on the support of a committed partner.\n\nKnown issues and troubleshooting.\n\nIf your country, region, or community already has an initiative that documents people-powered solutions or if you do not have supportive partners to assist you, this tool may not be the most suitable choice for you.\n\nContext.\n\nWorking in its challenge on citizen science, the Argentina Accelerator Lab, together with the national Ministry of Science, Technology, and Innovation (MINCYT), used this tool for mapping citizen science initiatives. In 2021, a first edition of this solutions mapping effort was published, containing the information of 30 projects. This number grew to 55 in the second edition of this mapping. The next edition, to be published at the end of 2023, will include 100 projects. Furthermore, these solutions mapping efforts not only led to the development of a new national federal policy aimed at promoting citizen science initiatives, but also had a transformative impact on the overall citizen science ecosystem.\n\nCost to implement.\n\nThe project (including its planning, design of deliverables and editing) involves a very modest budget, with the majority of the costs attributed to human resources.\n\nTime\n\nThe time required to implement this tool can vary depending on several factors, though it is important to clarify that this tool is not excessively time-consuming. The timeframe may be influenced by factors such as the desired scope of your mapping, the accessibility of information, and the availability of the mapping team’s time.\n\nPeople.\n\nThe tool is suitable for working with small teams of 4 to 6 people, to larger teams.\n\nFocal point.\n\nMaría Verónica Moreno – Head of Solutions Mapping. Argentina Accelerator Lab.\n\nMaría Verónica is the Head of Solutions Mapping for the Argentina Accelerator Lab since 2019. She has experience in international organizations, academia, and the public and private sector. She has worked as an undergraduate and graduate professor and researcher at the University of Buenos Aires (UBA, by its Spanish acronym). She has a Doctorate in Social Sciences (UBA), a Master’s Degree in Public Policy from the Torcuato Di Tella University and a Bachelor’s Degree in Sociology from the University of Salvador.\n\nCountry, year, and language.\n\nArgentina, ongoing; Spanish and English.\n\nResources.\n\n\n  \n    [ENGLISH] United Nations Development Program &amp; Ministry of Science, Technology and Innovation of Argentina (2022). Citizen Science. Solutions mapping. Second Edition. Buenos Aires: UNDP. Available at: https://www.undp.org/sites/g/files/zskgke326/files/2022-10/FichasCienciaCiudadana_en_0.pdf\n  \n  \n    [SPANISH] Programa de Naciones Unidas para el Desarrollo y Ministerio de Ciencia, Tecnología e Innovación de Argentina (2022). Ciencia Ciudadana Mapeo de iniciativas nacionales. Segunda Edición. Buenos Aires: PNUD. Disponible en: https://www.undp.org/sites/g/files/zskgke326/files/2022-10/FichasCienciaCiudadana_es.pdf\n  \n  \n    [ENGLISH] Moreno, M. V., D´Onofrio, M.G., Ruiz Rivadeneira, R., Sambeth Outón, B., Moscovich, L. &amp; Markstein, L. (2022). Citizen Science and Collective Participation: Lessons Learned from the First Edition of the Environmental Citizen Science Solutions Mapping. Buenos Aires: UNDP. Available at: https://www.undp.org/sites/g/files/zskgke326/files/2022-10/Colab_2022_mayo_reportemapeo_v16_ENG.pdf\n  \n  \n    [SPANISH] Moreno, M. V., D´Onofrio, M.G., Ruiz Rivadeneira, R., Sambeth Outón, B., Moscovich, L. y Markstein, L. (2022). Con ciencia colectiva: aprendizajes de la primera edición del mapeo en ciencia ciudadana ambiental. Buenos Aires: PNUD. Disponible en: https://www.undp.org/sites/g/files/zskgke326/files/2022-10/Colab_2022_mayo_reportemapeo_v16_ESP.pdf\n  \n  \n    [ENGLISH] United Nations Development Program &amp; Ministerio de Ciencia, Tecnología e Innovación (2021). Environmental Citizen Science: Mapping of national initiatives. Buenos Aires: UNDP. Available in https://www.ar.undp.org/content/argentina/es/home/library/hiv_aids/CiaCiudadanaAmbiental.html\n  \n  \n    [SPANISH] Programa de Naciones Unidas para el Desarrollo y Ministerio de Ciencia, Tecnología e Innovación (2021). Ciencia Ciudadana Ambiental Mapeo de iniciativas nacionales. Buenos Aires: PNUD. Disponible en: https://www.undp.org/sites/g/files/zskgke326/files/migration/ar/PNUDArgent-CiaCiudadabaAMB_ES_V2.pdf\n  \n  \n    [ENGLISH] Moreno, M. V. (December 7, 2021). Environmental citizen science in Argentina: mapping as an enhancement. UNDP Argentina. https://www.undp.org/es/argentina/blog/environmental-citizen-science-argentina-mapping-enhancement\n  \n  \n    [SPANISH] Moreno, M. V. (7 de diciembre de 2021). Ciencia ciudadana ambiental en Argentina: el mapeo como puesta en valor. PNUD Argentina. https://www.undp.org/es/argentina/blog/ciencia-ciudadana-ambiental-en-argentina-el-mapeo-como-puesta-en-valor\n  \n  \n    [ENGLISH] Moreno, M.V. (August 25, 2021). People are not datasets. Citizen science and collective intelligence. UNDP Argentina. https://www.undp.org/es/argentina/blog/people-are-not-datasets-citizen-science-and-collective-intelligence\n  \n  \n    [SPANISH] Moreno, M.V. (25 de agosto de 2021). Las personas no son bases de datos. Ciencia ciudadana e inteligencia colectiva. PNUD Argentina. https://www.undp.org/es/argentina/blog/las-personas-no-son-bases-de-datos-ciencia-ciudadana-e-inteligencia-colectiva\n  \n\n\nComment from Patricia: They are great resources, such as blogs and publications displaying the main results. It would be great to know more about the approach, which is what caught my attention in the title ‘A co-created solutions mapping approach.’ Moreover, I think it is relevant to mention the alignment of the value proposition with UNDP’s signature solutions and the SDGs.\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "A co-created solutions mapping approach What it does. This co-created solutions mapping approach for environmental citizen science projects represents an...",
  "id": 27
},{
  "title": "Factsheet 1 on Public Innovation",
  "url": "/2_Governance/Factsheet_1.html",
  "content": "Using design thinking to design public products or services\n\nWhat it does.\nThis tool enables you to apply design thinking, one of the most used methods for public innovation, to design or improve public products or services in collaboration with users, particularly those from vulnerable contexts. Design thinking is a user-centered approach that prioritizes placing the user at the center of the design process. This is because the individuals who will ultimately use the product or service are the ones who best understand the necessary features to meet their needs, desires, and expectations.\n\nValue proposition for the government/other partner.\nApplying design thinking enables national and local governments to:\n(1) strengthen their capacities in public innovation through hands-on experience;\n(2) ensure that the responses are genuinely relevant and effective by gaining a deep understanding of the specific needs of users;\n(3) design cost-effective solutions;\nand (4) foster closer citizen-government relationships by establishing a collaborative and co-creative work routine.\n\n",
  "tags": null,
  "sdg": ["1 No Poverty"],
  "enablers": ["Digitalisation"],
  "signature_solutions": ["Poverty and Inequality","Governance"],
  "rblac_priorities": ["Pillar 1 Inclusive and Sustainable Growth"],
  "excerpt": "Using design thinking to design public products or services What it does. This tool enables you to apply design thinking,...",
  "id": 27
},{
  "title": "Factsheet 1 on Poverty in LA",
  "url": "/1_Poverty_and_Inequality/Factsheet_1.html",
  "content": "How to use this toolkit\n\nDownload\nYou can download file from here.\n\nYou can also download a sample pdf from this link\n\nGlossary\n\nWe use the metaphor of the toolkit to emphasize the operational, enabling nature of the work you are reading right now. The following words are used throughout it a metaphorical sense:\n\n\n  The Toolkit is a set of resources and their documentation materials meant to help people and organizations who want to support innovation ecosystems.\n  The toolkit contains tools. Each tool consists of one or more resources. Each resourcecomes with a factsheet.\n    \n      A resource is a document that can be re-used, in part or as a whole. Examples are talking points or slide decks to argue for supporting innovation ecosystems; workplans and lists of deliverables to achieve operational status for a government innovation unit; agendas for workshops meant to socialize key concepts around innovation with senior civil servants; curricula for courses on key skills useful to employees of an innovation unit.\n      A factsheet is a resource’s metadata. It explains what the resource is good for; what it is not good for; the context in which it was produced; how much money and time you will need to deploy it, and so on. You will also find a reference to the person or people who created the resource in the first place.\n    \n  \n\n\nValues and attitude\n\nValues\n\nThis toolkit was produced in the cultural context of UNDP’s Accelerator Labs and Chief Digital Office. It inherits their culture of deep listening, immersion within the everyday reality of the Global South, respect for grassroots innovation, openness, and epistemological humility. It does not seek to provide turnkey solutions, but to share the knowledge accumulated along the way, in the hope of making the task of supporting innovation ecosystems a little less difficult.\n\nSupport, nurture and take stock\n\nInnovation is an important ingredient of development. It helps national communities find ways to confront new, emerging challenges, and new ways to confront old ones.\n\nInnovation is rarely done in isolation. Behind any successful innovation stands a plurality of agents (businesses, government agencies, education establishments…), and artifacts (legal frameworks, physical infrastructure, market institutions, financial services…). This is why we talk of innovation ecosystems, using a metaphor from ecology. Just like with actual ecosystems, innovation ecosystems are healthier when they are denser (more individual animals and plants) and more diverse (more species thereof).\n\nFor this reason, good interventions on innovation are supportive and nurturing of national actors. Before you make a decisive move, it’s a good idea to take stock of what is already there. In this toolkit you will find resources to help you design and run a mapping exercise.\n\nDon’t compete with extant actors\n\nIf you see actors performing a role in an innovation ecosystem, do not try to outcompete them. Maybe someone is running an incubator, or an innovation challenge; even if you think you can do better than them, it is almost always a bad idea to launch your own initiative. Rather than replace, add to the system: maybe provide something they are not doing yet, or launch an initiative to help them do better. This makes ecological sense; also, it makes your initiative more politically acceptable, and hopefully welcome.\n\nDon’t try to control\n\nLike all complex systems, an innovation ecosystem cannot be controlled. You are a contributor to it, not its boss. Listen, stay open, seek alignment, put actors in line of sight of one another.\n\nHow to proceed\n\nDecide what you want to do and browse the catalogue\n\nThe tools in this kit are labelled according to function. So, in the catalogue you will find tools with names like “How to map the innovation ecosystem” and “How to take a newly created innovation unit to fully operational status”. If one of these labels is right for you, look at the tools themselves.\n\nTools are sorted into into four main categories, based on the requests that UNDP’s government partners have brought to the Accelerator Labs in the period 2019-2022. Tools within the same category combine naturally.\n\nRead the factsheet\n\nThe factsheet contains information you can use to decide if a tool is useful to you after all. Is it function aligned with your own purpose? Is it compatible with your time and money budget? Did its deployment run into problems, and how were they addressed? And so on.\n\nUse the resources\n\nIf the factsheet convinces you, you can move on to the resource itself. This might be a slightly harder read (it was not written with your case in mind!), and almost certainly you will need to make changes to it. Hopefully that still saves you time and effort with respect to starting from scratch.\n\nAsk for support\n\nAll resources have an author. The ethos of UNDP’s Accelerator Labs and Chief Digital Office is one of sharing knowledge, so you can reach out to the author if you need more information and support.\n\nRefer to the pdf this link\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "How to use this toolkit Download You can download file from here. You can also download a sample pdf from...",
  "id": 27
},{
  "title": "Factsheet 1",
  "url": "/4_Environment/Factsheet_1.html",
  "content": "FACTSHEET TEMPLATE\n\n*Create a copy of this document to fill out the information for your Lab’s tool.\n\n*Tip: for easier navigation, open the document in the Word App (not the browser) and use the navigation panel to move throughout the document.\n\nTable of contents\n\nTable of contents 1\n\n1. About 1\n\n2. Factsheet – Add your tool’s info here! 3\n\n3. Final steps for submitting your tool 6\n\nSaving the file 6\n\nFilling out a form with the basic information 6\n\n1. About\n\nAbout Track B: Regional Toolkit\n\nWhat is the toolkit for?\n\nThe toolkit is aiming to gather and organize the work of our region to share concrete tools that can be used and replicated by other country offices.\n\nAs the Acc Lab Global Team puts it, ‘ to put the findings and learnings of the Acc Lab Network at the fingertips of all UNDP’.\n\nWhat is the toolkit about?\n\nThe toolkit will organize the tools based on UNDP six solutions (Strategic Plan) and the three enablers.\n\nWho is the audience?\n\nOur first target audience is internal: other UNDP colleagues from different teams (national, regional, global levels).\n\nWe will be organizing diverse events to introduce the existence of this toolkit and showcase it in action.\n\nHow would the toolkit look like?\n\nWe got inspire by the work done by the Accelerator Global Team on the “National Innovation Ecosystems Toolkit.” Thus, we are applying the same logic to map and share tools. Please navigate the**  **mini website**to see the example**; we will have one just like it for our regional toolkit.\n\nImportant: the subject of public sector innovation is just an example, our toolkit can contain any topic.\n\nWhat goes on the toolkit?   How do I know what can be used as a tool?\n\nPlease review the tools that are currently shared in the “National Innovation Ecosystems Toolkit” (leaving here two tools for you to click tool 1, tool 2).\n\nA tool can take various formats and shapes (methodology, organization model, prototype, ToRs, digital tool, etc).\n\nThe two key criteria of selection for a tool would be:\n\n\n  Is this tool ready to be shared? Is it scalable? Does it have concrete results?\n  Does this tool stand alone? Can it be easily understood and replicated by another team?\n\n\nKeep in mind that we are not looking for summaries of the Lab’s initiatives or action plans, but rather for TOOLS.\n\nHow many tool templates can each Lab submit?\n\nThere is not maximum number of tools per Lab, we are looking for quality rather than quantity.\n\nHow will we ensure the quality of our tools? (peer review)\n\nWe would like to make a collective effort to review our tools, thus each tool template author will be requested to review another tool.\n\nAbout this factsheet:\n\n\n  This factsheet allows you to share your work with a UNDP broad audience.\n  Each factsheet is meant to describe one tool , which can include one or more resources (manual, ToRs, blog post, flyer, PPT, Code, etc.).\n  We are not looking for a full description of ALL the work that you have done, but rather for ONE tool that can stand alone, please unbundle your work.\n  For example, the whole of Thinkia, Ecuador’s citizen innovation lab, is not a single tool, but many. We provide a factsheet for one of its component tool, its multistakeholder governance model. We believe such a model can be applied, with the necessary changes, to projects other than Thinkia, where the same problem of sharing the governance between the public sector and other stakeholders exists.\n  The factsheet should contain concise descriptions and be no longer than two pages.\n\n\nFor questions or comments, you can contact:\n\nAna Grijalva (ana.grijalva@undp.org) – Head of Exploration Ecuador\n\nGabriela Ríos (gabriela.rios@unp.org) – Head of Exploration Mexico\n\n2. Factsheet\n\nTool: Guide for Volunteers (EXPERIMENT#1)\n\nFill out your tool’s information in this section. _ The factsheet should contain concise descriptions and be no longer than two pages. _\n\nTitle of your tool\n\n\n  Choose a title that uses simple words of common use rather than jargon. A suggested format is the tool’s function + a defining characteristic of the tool. For example: a multistakeholder (defining characteristic) governance model (function).\n  The title should be in Heading 1 style. Do not alter the normal style to make the text look like a title, or you will break the rendering process onto the website.\n  The title should not contain the word “Factsheet”\n\n\nContribuyendo a la Aceleración del Desarrollo Sostenible desde el Voluntariado\n\nContributing to Accelerate Sustainable Development with Volunteers\n\nWhat it does.\n\nList the three actions/activities that your tool allows to do (offer).\n\n_ Suggestion: _ This [title of the tool] allows you to do [action 1], [action 2], and [action 3].\n\nThis guide for volunteers offers materials to transfer capacities to conduct solution mapping, exploration of data sources, future scanning, and experimentation activities that can be implemented quickly while addressing needs from people in the field.\n\nValue proposition for the government/other partner.\n\nDescribe the advantage using your tool will bring about.\n\n_ Suggestion _: By having a [title of the tool], you will enable [the partner] to achieve [something of value and align with UNDP’s signature solutionsand the SDGs].\n\nBy using the volunteers guide, organizations can engage their members in activities that address development challenges in a collective way, document their learnings, and increase the scope of their impact.\n\nWhy and when to use it.\n\nGive detail about the “right” environment for this tool to be effectively used.\n\n_ Suggestion: _ This tool is most useful when [situation 1], [situation 2], and [situation 3].\n\nThis tool is useful when organizations engage volunteers in the field and there is a need to learn quickly from the needs of people. Volunteers can become the eyes and hands that help learn and act quickly in response to people’s needs.\n\nKnown issues and troubleshooting.\n\nExplain which are the necessaries requirements for this tool to be used so that the user know when not to use it.\n\n_ Suggestion: _ If there is a lack of [requirement 1], [requirement 2], and [requirement 3], it is not yet the best moment to make use of this tool.\n\nIf there is no intention to go to the field, there is no need to learn alternative solutions, no action will be informed by learning, or there are no resources to facilitate the exchange of learnings, it is not yet the best moment to make use of this tool.\n\nContext.\n\nDescribe how this tool came into existence. If it is part of a bigger effort, describe that too.\n\nThis tool came to existence after building an alliance between UNDP and Centro de Voluntariado Guatemalteco (CVG). We realized that volunteers had a unique opportunity to contribute to development given their proximity with the conditions of people in need. Their eyes and hands on the ground are an invaluable resource to map solutions, explore sources of information, anticipate futures, and experiment with innovations. We realized that the profound personal experiences and learnings from volunteers had an untapped potential when it’s integrated into collective learning experiences that we can build our understandings and possibilities for action.\n\nCost to implement.\n\nHow much does it cost, in USD, to implement this tool?\n\n_ Suggestion: _ think about what the partner would spend to implement, not about how much it cost to create it in the first place.\n\nThe cost to implement is mainly human time. It can be adapted to the conditions, but it helps to have a venue, capacity to share visual materials, internet connection, materials for co-designing, food for participants.\n\nTime\n\nHow much time does it take to develop and implement? In calendar time\n\n_ Suggestion: _ think about the number of weeks or months someone would need to implement this tool.\n\nThe time of implementation can be as short as half a day, when only using parts of the volunteer guide, or it can be a full program with field visits over a three months.\n\nPeople.\n\nDescribe the team needed to implement. Try to avoid just sharing the hierarchy rank and rather focus on their roles.\n\n_ Suggestion: _ number of members of the team and responsibilities.\n\nAt the very least, the implementation requires one facilitator with knowledge of the volunteer guide to implement the workshops. Additionally, other functions that are needed are the logistics for bringing people together and accommodating the venue. And the participants.\n\nFocal point.\n\nName(s) of the authors of this tool. Short biography (max. 150 words).\n\nThe authors are Javier Brolo and María Inés Castañeda. Javier Brolo is Head of Experimentation at the Accelerator Lab in Guatemala.\n\nCountry, year, and language.\n\nThis information helps contextualize the tool.\n\nThe tool was developed in Guatemala in 2022 and it’s in Spanish.\n\nResources.\n\nA list of the resources supporting the tool. There can be more than one resource, each one presenting the same content in different forms: for example a concept note and a slide deck of the same project, or the syllabus for a course and the link to a blog post explaining the logic behind the course.  Resources can be either files attached to the toolkit or links to external web resources. List all the resources you have available and include the links you have (in the last section of this template we’ll direct you to a form where you can upload the files you want to submit as attachments).\n\nThe tol can be downloaded from here:\n\nhttps://www.undp.org/es/guatemala/publicaciones/contribuyendo-la-aceleracion-del-desarrollo-sostenible-desde-el-voluntariado\n\nInside the guide, there is a list of additional resources supporting the tool: Mural, Zoom, Whatsapp, Google Docs, and several templates to use during the workshop.\n\n3. Final steps for submitting your tool\n\nYou are almost there! Please follow the next steps to submit your tool J\n\nSaving the file\n\n\n  Name the file: save your document with the following codification:\n\n\nYour country’s abbreviation_Date (year-month-day)_Short title of your tool\n\nSee example:\n\nMX_230907_NLP for effective policy\n\n\n  Save the file in this folder: 1. Collection of factsheets (tools)– you can also access this folder under the files of the “Region-Latin America and the Caribbean” Teams channel in the Accelerator Labs Network Teams.\n\n\nFilling out a form with the basic information\n\nPlease fill out this short form to complete your submission: https://forms.office.com/e/fdmE7WBfm1\n\nThis form will help us identify how your tool relates to the Strategic Plan and the Regional programme document for LAC. You can also upload your resources there.\n\nLast update: September 7, 2023\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "FACTSHEET TEMPLATE *Create a copy of this document to fill out the information for your Lab’s tool. *Tip: for easier...",
  "id": 27
},{
  "title": "Factsheet 1 in Public Goods",
  "url": "/2_Governance/Factsheet_2.html",
  "content": "\n",
  "tags": null,
  "sdg": ["2 Zero Hunger","3 Good Health and Well Being"],
  "enablers": ["Strategic Innovaiton"],
  "signature_solutions": ["Gender Equality"],
  "rblac_priorities": ["Pillar 4 Effective Governance"],
  "excerpt": "\n",
  "id": 27
},{
  "title": "Contributors",
  "url": "/Team.html",
  "content": "Meet the Contributors\n\n\n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Jasmine Smith\n        \n        GreenEarth Initiative\n        Senior Project Coordinator\n      \n    \n    Jasmine Smith is a seasoned environmental activist and project coordinator with GreenEarth Initiative. With over a decade of experience, Jasmine has led multiple campaigns focused on sustainable living and climate change awareness. She specializes in community mobilization and education programs, aiming to involve local communities in environmental conservation efforts. Jasmine is known for her dynamic workshop sessions and engaging public speaking. She holds a Master’s in Environmental Science from the University of California, Berkeley. Her work extends to collaborating with government bodies to implement eco-friendly policies.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Carlos Rodriguez\n        \n        TechSolutions Inc.\n        CEO\n      \n    \n    Carlos Rodriguez is an innovative tech entrepreneur, founder of TechSolutions Inc., and a pioneer in developing smart city technologies. His expertise lies in integrating IoT with urban infrastructure to enhance efficiency and quality of life. Carlos has spearheaded projects in multiple cities worldwide, transforming them into tech-savvy urban centers. He frequently speaks at international technology forums and collaborates with universities to foster young tech talents. Carlos holds a degree in Computer Engineering from MIT and an MBA from Harvard Business School. His vision is to bridge the gap between technology and everyday life.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Lena Kim\n        \n        Global Finance Corp.\n        Senior Financial Analyst\n      \n    \n    Lena Kim is a financial analyst with a sharp eye for market trends and economic patterns. Currently working at Global Finance Corp., she provides insightful analysis to help shape investment strategies and market forecasts. Lena’s expertise includes emerging markets and cryptocurrency. She is known for her comprehensive reports and has been a guest speaker at various financial summits. Lena earned her degree in Economics from the London School of Economics and is currently pursuing her CFA certification. She is passionate about mentoring young women interested in finance and economics.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Marcus Johnson\n        \n        Urban Revitalization Project\n        Chief Urban Planner\n      \n    \n    Marcus Johnson is an experienced urban planner and architect, currently leading the Urban Revitalization Project in New York. With a focus on sustainable and inclusive urban development, Marcus has been instrumental in transforming cityscapes into vibrant, functional spaces. He collaborates closely with local communities to ensure their needs are met in urban designs. Marcus regularly contributes articles to architecture journals and is a guest lecturer at Columbia University. He holds a Master's degree in Architecture from Princeton University. Marcus is an advocate for green building practices and pedestrian-friendly city planning.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Sophia Martinez\n        \n        Human Rights Watch\n        Lead Counsel\n      \n    \n    Sophia Martinez is a human rights lawyer with a strong commitment to justice and equality. Working with Human Rights Watch, she has been involved in high-profile cases defending the rights of marginalized communities. Sophia’s work extends beyond the courtroom to public advocacy and legal reform. She is a key figure in initiatives for legal literacy and has conducted workshops globally. Sophia holds a law degree from Yale Law School and has been recognized for her contributions with several awards. She is a vocal advocate for women’s rights and refugee protection.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Daniel Chen\n        \n        BioTech Solutions\n        Head of Research\n      \n    \n    Daniel Chen is a distinguished biomedical researcher focused on developing innovative solutions for chronic diseases. He currently leads a research team at BioTech Solutions, working on breakthrough therapies in immunology. Daniel’s work has been published in numerous scientific journals, and he holds several patents in medical technology. He is also a regular speaker at international medical conferences. Daniel earned his PhD in Biomedical Engineering from Stanford University. He is passionate about bridging the gap between research and real-world medical applications, aiming to improve patient care and treatment methods.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n  \n\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "Meet the Contributors Jasmine Smith GreenEarth Initiative Senior Project Coordinator Jasmine Smith is a seasoned environmental activist and project coordinator...",
  "id": 27
},{
  "title": "About Purple Boot Initiative",
  "url": "/Adedapo/about-puple-boot.html",
  "content": "ABout Purple Boot\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "ABout Purple Boot\n",
  "id": 27
},{
  "title": "Background and purpose",
  "url": "/Getting%20started/background.html",
  "content": "Background and purpose\n\nContent goes here.\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "Background and purpose\n\nContent goes here.\n",
  "id": 27
},{
  "title": "How to use the toolkit",
  "url": "/Getting%20started/how-to-use-the-toolkit.html",
  "content": "How to use this toolkit\n\nContent goes here.\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "How to use this toolkit\n\nContent goes here.\n",
  "id": 27
},{
  "title": "Training Melissa",
  "url": "/Melissa-Aguilar/",
  "content": "Step 1:\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "Step 1:\n",
  "id": 27
},{
  "title": "Paulina´s File",
  "url": "/Paulina%20Jim%C3%A9nez/",
  "content": "This is a test content\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "This is a test content\n",
  "id": 27
},{
  "title": "Governance",
  "url": "/2_Governance/",
  "content": "\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "\n",
  "id": 27
},{
  "title": "Poverty and Inequality",
  "url": "/1_Poverty_and_Inequality/",
  "content": "\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "\n",
  "id": 27
},{
  "title": "test topic",
  "url": "/Adedapo/",
  "content": "This is test content\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "This is test content\n",
  "id": 27
},{
  "title": "Resilience",
  "url": "/3_Resilience/",
  "content": "\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "\n",
  "id": 27
},{
  "title": "Environment",
  "url": "/4_Environment/",
  "content": "\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "\n",
  "id": 27
},{
  "title": "Getting Started",
  "url": "/Getting%20started/",
  "content": "\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "\n",
  "id": 27
},{
  "title": "Getting Started",
  "url": "/",
  "content": "Markdown Basics\n\nIntroduction\n\nThis page serves as a reference guide to the Markdown syntax used for creating different elements in your micro-site. You can use this guide to populate your micro-site with various content elements.\n\nHeaders\n\nUse hash symbols (#) for headers. The number of hashes indicates the header level.\n\nHeader 1\nHeader 2\nHeader 3\nHeader 4\nHeader 5\nHeader 6\n\nText Formatting\n\nItalic Text\nBold Text\nStrikethrough Text\n\nLinks\n\nLink Text\n\nLists\n\nUnordered List:\n\n  Item 1\n  Item 2\n  Item 3\n\n\nOrdered List:\n\n  First Item\n  Second Item\n  Third Item\n\n\nImages\n\n\n\nBlockquotes\n\n\n  This is a blockquote.\n\n\nCode Blocks\n\nInline code: code here\n\nCode Block:\n`python\ndef hello():\n    print(\"Hello, World!\")\n\\`\n\nHorizontal Lines\n\n\n\nTables\n\n\n  \n    \n      Header 1\n      Header 2\n    \n  \n  \n    \n      Content 1\n      Content 2\n    \n  \n\n\nFootnotes\n\nThis is a sentence with a footnote.1\n\n\n  \n    \n      This is the footnote content. &#8617;\n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "Markdown Basics Introduction This page serves as a reference guide to the Markdown syntax used for creating different elements in...",
  "id": 27
},{
  "title": null,
  "url": "/assets/lunr-feed.js",
  "content": "// builds lunr\nvar index = lunr(function () {\n  this.field('title')\n  this.field('content', {boost: 10})\n  this.field('sdg')\n  this.field('tags')\n  this.field('rblac_priorities')\n  this.field('signature_solutions')\n  this.field('enablers')\n  this.field('url')\n  this.ref('id')\n});\n\n\nfunction capitalize(str) {\n  return str && typeof str === 'string'\n    ? str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')\n    : str;\n}\n\nlet tags = []\nlet sdg = []\nlet rblac_priorities = []\nlet signature_solutions = []\nlet enablers = []\n\n// rblac_priorities, signature_solutions, enablers\n\n{% assign count = 0 %}\n{% for post in site.pages %}\n{% unless post.url contains 'assets/' %}\nindex.add({\n    title: {{post.title | jsonify}},\n    content: {{post.content | strip_html | jsonify}},\n    tags: {{ post.tags | jsonify }},\n    sdg: {{ post.sdg | jsonify }},\n    enablers: {{ post.enablers | jsonify }},\n    signature_solutions: {{ post.signature_solutions | jsonify }},\n    rblac_priorities: {{ post.rblac_priorities | jsonify }},\n    url: {{ post.url | jsonify }},\n    id: {{count}}\n});\n\n//Iterate through the tags\n{% for tg in post.tags %}\n    if(tags.indexOf({{ tg | jsonify }}) Found '+result.length+' result(s)');\n    // Loop through, match, and add results\n    for (var item in result) {\n      var ref = result[item].ref;\n      var searchitem = `\n      \n        \n        \n            ${store[ref]?.title}\n        \n        \n        \n            ${store[ref].excerpt}\n        \n    \n      `\n\n      resultdiv.append(searchitem);\n    }\n  });\n  \n\n//POPULATE TAGS AND SDG FILTER\nvar tagsdiv = $('#tag-div');\nvar sdgdiv = $('#sdg-div')\nvar rblac_priorities_div = $('#rblac_priorities_div')\nvar enablers_div = $('#enablers_div')\nvar signature_solutions_div = $('#signature_solutions_div')\n\nif(tags.length > 0){\n    let tg = `\n    \n        \n        Tags\n        \n        \n    `;\n\n    for(let i = 0; i \n                \n                    ${capitalize(tags[i])}\n                    \n                \n              \n        `;\n    }\n\n    tg += `\n            \n        \n    `;\n\n    tagsdiv.append(tg)\n}\n\nif(sdg.length > 0){\n    let tg = `\n    \n        \n        SDG\n        \n        \n    `;\n\n    for(let i = 0; i \n                \n                    ${capitalize(sdg[i])}\n                    \n                \n              \n        `;\n    }\n\n    tg += `\n            \n        \n    `;\n\n    sdgdiv.append(tg)\n}\n\nif(enablers.length > 0){\n    let tg = `\n    \n        \n            Enablers\n        \n        \n    `;\n\n    for(let i = 0; i \n                \n                    ${enablers[i]}\n                    \n                \n              \n        `;\n    }\n\n    tg += `\n            \n        \n    `;\n\n    enablers_div.append(tg)\n}\n\nif(signature_solutions.length > 0){\n    let tg = `\n    \n        \n            Signature Solutions\n        \n        \n    `;\n\n    for(let i = 0; i \n                \n                    ${capitalize(signature_solutions[i])}\n                    \n                \n              \n        `;\n    }\n\n    tg += `\n            \n        \n    `;\n\n    signature_solutions_div.append(tg)\n}\n\nif(rblac_priorities.length > 0){\n    let tg = `\n    \n        \n        RBLAC Priorities\n        \n        \n    `;\n\n    for(let i = 0; i \n                \n                    ${capitalize(rblac_priorities[i])}\n                    \n                \n              \n        `;\n    }\n\n    tg += `\n            \n        \n    `;\n\n    rblac_priorities_div.append(tg)\n}\n\nlet taglist = []\nlet sdglist = []\nlet enablerslist = []\nlet signature_solutionslist = []\nlet rblac_prioritieslist = []\n\nlet searchitemfn = post => `\n\n    \n    \n        ${post?.title}\n    \n    \n    \n        ${post.excerpt}\n    \n\n`\n\nlet resultdiv = $('#results');\nlet contentdiv = $('#content');\nlet contentCopy = $(\"#content\").html(); // Store the current content\n\nlet filterresult = () => {\n    resultdiv.empty()\n    resultdiv.prepend('Showing results for  ' + [ ...taglist, ...signature_solutionslist, ...enablerslist, ...sdglist, ...rblac_prioritieslist, ].toString() + '');\n    for(post of store){\n        if(post?.tags?.some(tg => taglist.includes(tg) )){\n            contentdiv.empty()\n            var searchitem = searchitemfn(post)\n\n            resultdiv.append(searchitem);\n        }\n        else if(post?.sdg?.some(tg => sdglist.includes(tg) )){\n            contentdiv.empty()\n            var searchitem = searchitemfn(post)\n\n            resultdiv.append(searchitem);\n        }\n        else if(post?.enablers?.some(tg => enablerslist.includes(tg) )){\n            contentdiv.empty()\n            var searchitem = searchitemfn(post)\n\n            resultdiv.append(searchitem);\n        }\n        else if(post?.signature_solutions?.some(tg => signature_solutionslist.includes(tg) )){\n            contentdiv.empty()\n            var searchitem = searchitemfn(post)\n\n            resultdiv.append(searchitem);\n        }\n        else if(post?.rblac_priorities?.some(tg => rblac_prioritieslist.includes(tg) )){\n            contentdiv.empty()\n            var searchitem = searchitemfn(post)\n\n            resultdiv.append(searchitem);\n        }\n    };\n}\n\n$(document).on('multiSelectInputToggle', (e) => {\n    let { value, checked, name } = e.target;\n    \n    if(checked && name === 'tags') taglist.push(value)\n    else if(checked && name === 'signature_solutions') signature_solutionslist.push(value)\n    else if(checked && name === 'enablers') enablerslist.push(value)\n    else if(checked && name === 'rblac_priorities') rblac_prioritieslist.push(value)\n    else if(checked && name === 'sdg') sdglist.push(value)\n\n    else if(!checked && name === 'signature_solutions' && signature_solutionslist.includes(value)) signature_solutionslist.splice(signature_solutionslist.indexOf(value), 1)\n    else if(!checked && name === 'enablers' && enablerslist.includes(value)) enablerslist.splice(enablerslist.indexOf(value), 1)\n    else if(!checked && name === 'rblac_priorities' && rblac_prioritieslist.includes(value)) rblac_prioritieslist.splice(rblac_prioritieslist.indexOf(value), 1)\n    else if(!checked && name === 'sdg' && sdglist.includes(value)) sdglist.splice(sdglist.indexOf(value), 1)\n    else if(taglist.includes(value)) taglist.splice(taglist.indexOf(value), 1)\n  \n    filterresult()\n\n});\n\n$(document).on('filterSearchChipRemoval', (e) => {\n    let textContent = e.target.getAttribute('option-name');\n    sdglist.includes(textContent) && sdglist.splice(sdglist.indexOf(textContent), 1)\n    taglist.includes(textContent) && taglist.splice(taglist.indexOf(textContent), 1)\n\n    signature_solutionslist.includes(textContent) && signature_solutionslist.splice(signature_solutionslist.indexOf(textContent), 1)\n    enablerslist.includes(textContent) && enablerslist.splice(enablerslist.indexOf(textContent), 1)\n    rblac_prioritieslist.includes(textContent) && rblac_prioritieslist.splice(rblac_prioritieslist.indexOf(textContent), 1)\n    filterresult()\n});\n\n$(document).on('filterSearchClear', (e) => {\n    sdglist = [];\n    taglist =  [];\n    enablerslist = []\n    signature_solutionslist = []\n    rblac_prioritieslist = []\n    resultdiv.empty()\n    $(\"#content\").html(contentCopy);\n});\n\n//GET ELEMTENTS WITH ID TAGS AND SDG\n$('.tag-chip').on('click', e =>{\n    let textContent = e.target.getAttribute('text-value');\n    taglist = [ textContent ]\n    sdglist = []\n    enablerslist = []\n    signature_solutionslist = [ ]\n    rblac_prioritieslist = []\n    contentdiv.empty()\n    filterresult()\n} )\n\n$('.sdg-chip').on('click', e =>{\n    let textContent = e.target.getAttribute('text-value');\n    sdglist = [textContent]\n    taglist = []\n    enablerslist = []\n    signature_solutionslist = [ ]\n    rblac_prioritieslist = []\n    contentdiv.empty()\n    filterresult()\n} )\n\n$('.enablers-chip').on('click', e =>{\n    let textContent = e.target.getAttribute('text-value');\n    enablerslist = [textContent]\n    taglist = []\n    sdglist = []\n    signature_solutionslist = []\n    rblac_prioritieslist = []\n    contentdiv.empty()\n    filterresult()\n} )\n\n$('.signature_solutions-chip').on('click', e =>{\n    let textContent = e.target.getAttribute('text-value');\n    enablerslist = []\n    taglist = []\n    sdglist = []\n    signature_solutionslist = [ textContent]\n    rblac_prioritieslist = []\n    contentdiv.empty()\n    filterresult()\n} )\n\n$('.rblac_priorities-chip').on('click', e =>{\n    let textContent = e.target.getAttribute('text-value');\n    enablerslist = []\n    taglist = []\n    sdglist = []\n    signature_solutionslist = [ ]\n    rblac_prioritieslist = [textContent]\n    contentdiv.empty()\n    filterresult()\n} )\n\n})",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "// builds lunr var index = lunr(function () { this.field('title') this.field('content', {boost: 10}) this.field('sdg') this.field('tags') this.field('rblac_priorities') this.field('signature_solutions') this.field('enablers') this.field('url') this.ref('id')...",
  "id": 27
},{
  "title": "Values and attitude",
  "url": "/Getting%20started/values.html",
  "content": "## Values and attitude\n\n\nContent goes here.\n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "## Values and attitude\n\n\nContent goes here.\n",
  "id": 27
},{
  "title": "Jasmine Smith",
  "url": "/contributors/Jasmine-Smith.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Jasmine Smith\n            \n            GreenEarth Initiative\n            Senior Project Coordinator\n          \n        \n        \n          Jasmine Smith is a seasoned environmental activist and project coordinator with GreenEarth Initiative. With over a decade of experience, Jasmine has led multiple campaigns focused on sustainable living and climate change awareness. She specializes in community mobilization and education programs, aiming to involve local communities in environmental conservation efforts. Jasmine is known for her dynamic workshop sessions and engaging public speaking. She holds a Master’s in Environmental Science from the University of California, Berkeley. Her work extends to collaborating with government bodies to implement eco-friendly policies.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "Jasmine Smith GreenEarth Initiative Senior Project Coordinator Jasmine Smith is a seasoned environmental activist and project coordinator with GreenEarth Initiative....",
  "id": 27
},{
  "title": "Carlos Rodriguez",
  "url": "/contributors/Carlos-Rodriguez.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Carlos Rodriguez\n            \n            TechSolutions Inc.\n            CEO\n          \n        \n        \n          Carlos Rodriguez is an innovative tech entrepreneur, founder of TechSolutions Inc., and a pioneer in developing smart city technologies. His expertise lies in integrating IoT with urban infrastructure to enhance efficiency and quality of life. Carlos has spearheaded projects in multiple cities worldwide, transforming them into tech-savvy urban centers. He frequently speaks at international technology forums and collaborates with universities to foster young tech talents. Carlos holds a degree in Computer Engineering from MIT and an MBA from Harvard Business School. His vision is to bridge the gap between technology and everyday life.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "Carlos Rodriguez TechSolutions Inc. CEO Carlos Rodriguez is an innovative tech entrepreneur, founder of TechSolutions Inc., and a pioneer in...",
  "id": 27
},{
  "title": "Lena Kim",
  "url": "/contributors/Lena-Kim.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Lena Kim\n            \n            Global Finance Corp.\n            Senior Financial Analyst\n          \n        \n        \n          Lena Kim is a financial analyst with a sharp eye for market trends and economic patterns. Currently working at Global Finance Corp., she provides insightful analysis to help shape investment strategies and market forecasts. Lena’s expertise includes emerging markets and cryptocurrency. She is known for her comprehensive reports and has been a guest speaker at various financial summits. Lena earned her degree in Economics from the London School of Economics and is currently pursuing her CFA certification. She is passionate about mentoring young women interested in finance and economics.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "Lena Kim Global Finance Corp. Senior Financial Analyst Lena Kim is a financial analyst with a sharp eye for market...",
  "id": 27
},{
  "title": "Marcus Johnson",
  "url": "/contributors/Marcus-Johnson.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Marcus Johnson\n            \n            Urban Revitalization Project\n            Chief Urban Planner\n          \n        \n        \n          Marcus Johnson is an experienced urban planner and architect, currently leading the Urban Revitalization Project in New York. With a focus on sustainable and inclusive urban development, Marcus has been instrumental in transforming cityscapes into vibrant, functional spaces. He collaborates closely with local communities to ensure their needs are met in urban designs. Marcus regularly contributes articles to architecture journals and is a guest lecturer at Columbia University. He holds a Master's degree in Architecture from Princeton University. Marcus is an advocate for green building practices and pedestrian-friendly city planning.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "Marcus Johnson Urban Revitalization Project Chief Urban Planner Marcus Johnson is an experienced urban planner and architect, currently leading the...",
  "id": 27
},{
  "title": "Sophia Martinez",
  "url": "/contributors/Sophia-Martinez.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Sophia Martinez\n            \n            Human Rights Watch\n            Lead Counsel\n          \n        \n        \n          Sophia Martinez is a human rights lawyer with a strong commitment to justice and equality. Working with Human Rights Watch, she has been involved in high-profile cases defending the rights of marginalized communities. Sophia’s work extends beyond the courtroom to public advocacy and legal reform. She is a key figure in initiatives for legal literacy and has conducted workshops globally. Sophia holds a law degree from Yale Law School and has been recognized for her contributions with several awards. She is a vocal advocate for women’s rights and refugee protection.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "Sophia Martinez Human Rights Watch Lead Counsel Sophia Martinez is a human rights lawyer with a strong commitment to justice...",
  "id": 27
},{
  "title": "Daniel Chen",
  "url": "/contributors/Daniel-Chen.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Daniel Chen\n            \n            BioTech Solutions\n            Head of Research\n          \n        \n        \n          Daniel Chen is a distinguished biomedical researcher focused on developing innovative solutions for chronic diseases. He currently leads a research team at BioTech Solutions, working on breakthrough therapies in immunology. Daniel’s work has been published in numerous scientific journals, and he holds several patents in medical technology. He is also a regular speaker at international medical conferences. Daniel earned his PhD in Biomedical Engineering from Stanford University. He is passionate about bridging the gap between research and real-world medical applications, aiming to improve patient care and treatment methods.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n",
  "tags": null,
  "sdg": null,
  "enablers": null,
  "signature_solutions": null,
  "rblac_priorities": null,
  "excerpt": "Daniel Chen BioTech Solutions Head of Research Daniel Chen is a distinguished biomedical researcher focused on developing innovative solutions for...",
  "id": 27
}]


// builds search
$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var contentdiv = $('#content');

    var query = $(this).val();
    var result = index.search(query);
    resultdiv.empty();
    contentdiv.empty()
    
    // Add status
    resultdiv.prepend('<h6 class="">Found '+result.length+' result(s)</h6>');
    // Loop through, match, and add results
    for (var item in result) {
      var ref = result[item].ref;
      var searchitem = `
      <div class="tertiary">
        <h5 class="" tabindex="0" data-viewport="false">
        <a href="/training-toolkit-microsite${store[ref]?.url}">
            ${store[ref]?.title}
        </a>
        </h5>
        <p>
            ${store[ref].excerpt}
        </p>
    </div>
      `

      resultdiv.append(searchitem);
    }
  });
  

//POPULATE TAGS AND SDG FILTER
var tagsdiv = $('#tag-div');
var sdgdiv = $('#sdg-div')
var rblac_priorities_div = $('#rblac_priorities_div')
var enablers_div = $('#enablers_div')
var signature_solutions_div = $('#signature_solutions_div')

if(tags.length > 0){
    let tg = `
    <div class="multi-select" data-multi-select="">
        <button aria-label="Region" aria-expanded="false" data-id="tag">
        Tags
        </button>
        <ul
        data-type="region"
        role="listbox"
        aria-multiselectable="true"
        aria-hidden="true"
        aria-modal="true"
        >
    `;

    for(let i = 0; i < tags.length; i++) {
        tg += `
            <li role="option">
                <div class="form-check">
                    <label for="tag${i+1}">${capitalize(tags[i])}</label>
                    <input
                        type="checkbox"
                        id="${tags[i]}"
                        name="tags"
                        value="${tags[i]}"
                    />
                </div>
            </li>  
        `;
    }

    tg += `
            </ul>
        </div>
    `;

    tagsdiv.append(tg)
}

if(sdg.length > 0){
    let tg = `
    <div class="multi-select" data-multi-select="">
        <button aria-label="Region" aria-expanded="false" data-id="sdg">
        SDG
        </button>
        <ul
        data-type="region"
        role="listbox"
        aria-multiselectable="true"
        aria-hidden="true"
        aria-modal="true"
        >
    `;

    for(let i = 0; i < sdg.length; i++) {
        tg += `
            <li role="option">
                <div class="form-check">
                    <label for="sdg${i+1}">${capitalize(sdg[i])}</label>
                    <input
                        type="checkbox"
                        id="${sdg[i]}"
                        name="sdg"
                        value="${sdg[i]}"
                    />
                </div>
            </li>  
        `;
    }

    tg += `
            </ul>
        </div>
    `;

    sdgdiv.append(tg)
}

if(enablers.length > 0){
    let tg = `
    <div class="multi-select" data-multi-select="">
        <button aria-label="Region" aria-expanded="false" data-id="enablers">
            Enablers
        </button>
        <ul
        data-type="region"
        role="listbox"
        aria-multiselectable="true"
        aria-hidden="true"
        aria-modal="true"
        >
    `;

    for(let i = 0; i < enablers.length; i++) {
        tg += `
            <li role="option">
                <div class="form-check">
                    <label for="enablers${i+1}">${enablers[i]}</label>
                    <input
                        type="checkbox"
                        id="${enablers[i]}"
                        name="enablers"
                        value="${enablers[i]}"
                    />
                </div>
            </li>  
        `;
    }

    tg += `
            </ul>
        </div>
    `;

    enablers_div.append(tg)
}

if(signature_solutions.length > 0){
    let tg = `
    <div class="multi-select" data-multi-select="">
        <button aria-label="Region" aria-expanded="false" data-id="signature_solutions">
            Signature Solutions
        </button>
        <ul
        data-type="region"
        role="listbox"
        aria-multiselectable="true"
        aria-hidden="true"
        aria-modal="true"
        >
    `;

    for(let i = 0; i < signature_solutions.length; i++) {
        tg += `
            <li role="option">
                <div class="form-check">
                    <label for="signature_solutions${i+1}">${capitalize(signature_solutions[i])}</label>
                    <input
                        type="checkbox"
                        id="${signature_solutions[i]}"
                        name="signature_solutions"
                        value="${signature_solutions[i]}"
                    />
                </div>
            </li>  
        `;
    }

    tg += `
            </ul>
        </div>
    `;

    signature_solutions_div.append(tg)
}

if(rblac_priorities.length > 0){
    let tg = `
    <div class="multi-select" data-multi-select="">
        <button aria-label="Region" aria-expanded="false" data-id="rblac_priorities">
        RBLAC Priorities
        </button>
        <ul
        data-type="region"
        role="listbox"
        aria-multiselectable="true"
        aria-hidden="true"
        aria-modal="true"
        >
    `;

    for(let i = 0; i < rblac_priorities.length; i++) {
        tg += `
            <li role="option">
                <div class="form-check">
                    <label for="rblac_priorities${i+1}">${capitalize(rblac_priorities[i])}</label>
                    <input
                        type="checkbox"
                        id="${rblac_priorities[i]}"
                        name="rblac_priorities"
                        value="${rblac_priorities[i]}"
                    />
                </div>
            </li>  
        `;
    }

    tg += `
            </ul>
        </div>
    `;

    rblac_priorities_div.append(tg)
}

let taglist = []
let sdglist = []
let enablerslist = []
let signature_solutionslist = []
let rblac_prioritieslist = []

let searchitemfn = post => `
<div class="tertiary">
    <h5 class="" tabindex="0" data-viewport="false">
    <a href="/training-toolkit-microsite${post?.url}">
        ${post?.title}
    </a>
    </h5>
    <p>
        ${post.excerpt}
    </p>
</div>
`

let resultdiv = $('#results');
let contentdiv = $('#content');
let contentCopy = $("#content").html(); // Store the current content

let filterresult = () => {
    resultdiv.empty()
    resultdiv.prepend('<h6 class="">Showing results for  ' + [ ...taglist, ...signature_solutionslist, ...enablerslist, ...sdglist, ...rblac_prioritieslist, ].toString() + '</h6>');
    for(post of store){
        if(post?.tags?.some(tg => taglist.includes(tg) )){
            contentdiv.empty()
            var searchitem = searchitemfn(post)

            resultdiv.append(searchitem);
        }
        else if(post?.sdg?.some(tg => sdglist.includes(tg) )){
            contentdiv.empty()
            var searchitem = searchitemfn(post)

            resultdiv.append(searchitem);
        }
        else if(post?.enablers?.some(tg => enablerslist.includes(tg) )){
            contentdiv.empty()
            var searchitem = searchitemfn(post)

            resultdiv.append(searchitem);
        }
        else if(post?.signature_solutions?.some(tg => signature_solutionslist.includes(tg) )){
            contentdiv.empty()
            var searchitem = searchitemfn(post)

            resultdiv.append(searchitem);
        }
        else if(post?.rblac_priorities?.some(tg => rblac_prioritieslist.includes(tg) )){
            contentdiv.empty()
            var searchitem = searchitemfn(post)

            resultdiv.append(searchitem);
        }
    };
}

$(document).on('multiSelectInputToggle', (e) => {
    let { value, checked, name } = e.target;
    
    if(checked && name === 'tags') taglist.push(value)
    else if(checked && name === 'signature_solutions') signature_solutionslist.push(value)
    else if(checked && name === 'enablers') enablerslist.push(value)
    else if(checked && name === 'rblac_priorities') rblac_prioritieslist.push(value)
    else if(checked && name === 'sdg') sdglist.push(value)

    else if(!checked && name === 'signature_solutions' && signature_solutionslist.includes(value)) signature_solutionslist.splice(signature_solutionslist.indexOf(value), 1)
    else if(!checked && name === 'enablers' && enablerslist.includes(value)) enablerslist.splice(enablerslist.indexOf(value), 1)
    else if(!checked && name === 'rblac_priorities' && rblac_prioritieslist.includes(value)) rblac_prioritieslist.splice(rblac_prioritieslist.indexOf(value), 1)
    else if(!checked && name === 'sdg' && sdglist.includes(value)) sdglist.splice(sdglist.indexOf(value), 1)
    else if(taglist.includes(value)) taglist.splice(taglist.indexOf(value), 1)
  
    filterresult()

});

$(document).on('filterSearchChipRemoval', (e) => {
    let textContent = e.target.getAttribute('option-name');
    sdglist.includes(textContent) && sdglist.splice(sdglist.indexOf(textContent), 1)
    taglist.includes(textContent) && taglist.splice(taglist.indexOf(textContent), 1)

    signature_solutionslist.includes(textContent) && signature_solutionslist.splice(signature_solutionslist.indexOf(textContent), 1)
    enablerslist.includes(textContent) && enablerslist.splice(enablerslist.indexOf(textContent), 1)
    rblac_prioritieslist.includes(textContent) && rblac_prioritieslist.splice(rblac_prioritieslist.indexOf(textContent), 1)
    filterresult()
});

$(document).on('filterSearchClear', (e) => {
    sdglist = [];
    taglist =  [];
    enablerslist = []
    signature_solutionslist = []
    rblac_prioritieslist = []
    resultdiv.empty()
    $("#content").html(contentCopy);
});

//GET ELEMTENTS WITH ID TAGS AND SDG
$('.tag-chip').on('click', e =>{
    let textContent = e.target.getAttribute('text-value');
    taglist = [ textContent ]
    sdglist = []
    enablerslist = []
    signature_solutionslist = [ ]
    rblac_prioritieslist = []
    contentdiv.empty()
    filterresult()
} )

$('.sdg-chip').on('click', e =>{
    let textContent = e.target.getAttribute('text-value');
    sdglist = [textContent]
    taglist = []
    enablerslist = []
    signature_solutionslist = [ ]
    rblac_prioritieslist = []
    contentdiv.empty()
    filterresult()
} )

$('.enablers-chip').on('click', e =>{
    let textContent = e.target.getAttribute('text-value');
    enablerslist = [textContent]
    taglist = []
    sdglist = []
    signature_solutionslist = []
    rblac_prioritieslist = []
    contentdiv.empty()
    filterresult()
} )

$('.signature_solutions-chip').on('click', e =>{
    let textContent = e.target.getAttribute('text-value');
    enablerslist = []
    taglist = []
    sdglist = []
    signature_solutionslist = [ textContent]
    rblac_prioritieslist = []
    contentdiv.empty()
    filterresult()
} )

$('.rblac_priorities-chip').on('click', e =>{
    let textContent = e.target.getAttribute('text-value');
    enablerslist = []
    taglist = []
    sdglist = []
    signature_solutionslist = [ ]
    rblac_prioritieslist = [textContent]
    contentdiv.empty()
    filterresult()
} )

})