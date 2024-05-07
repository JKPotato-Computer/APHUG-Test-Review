// Holds all the question data.

const database = (function() {
	return [
		[ // Unit 1
			{
				"Question": "Which of the following scales of analysis would provide demographic data that could be used to compare one urban neighborhood to other urban neighborhoods across a country?",
				"Image": "",
				"Options": [
					"State or province",
					"Metropolitan area or urban region",
					"County or parish (in Quebec and Louisiana)",
					"City or municipality",
					"Census tract or enumeration area"
				],
				"Correct": "Census tract or enumeration area"
			},
			{
				"Question": "Table 1 shows that the United States and New York City have similar median household income values. Compare the data in Table 1 to the data in Table 2. Based on this comparison, which of the following statements is most accurate?",
				"Image": "0_1_2.png",
				"Options": [
					"Each borough of New York City has a household income distribution similar to that of the United States.",
					"Each borough of New York City has a household income distribution similar to that of New York State.",
					"Each borough of New York City has a household income distribution similar to that of the New York City metropolitan area.",
					"Each borough of New York City has a household income distribution similar to that of the City of New York.",
					"A comparison of data from one scale to a different set of scales can result in a flawed analysis."
				],
				"Correct": "A comparison of data from one scale to a different set of scales can result in a flawed analysis."
			},
			{
				"Question": "The data on median household income in Table 1 is presented in different",
				"Image": "0_1_2.png",
				"Options": [
					"culture regions",
					"physical regions",
					"map scales",
					"vernacular regions",
					"scales of analysis"
				],
				"Correct": "scales of analysis"
			},
			{
				"Question": "Which of the following spatial patterns accurately describes the data presented in the map?",
				"Image": "0_3.png",
				"Options": [
					"Most continents have countries with secondary school enrollments below 75 percent.",
					"There are no countries in Africa with secondary school enrollments above 90 percent.",
					"The secondary school enrollment is proportional to population density.",
					"Landlocked countries have secondary school enrollments above 90 percent.",
					"The majority of countries with less than 70 percent secondary school enrollment are in sub-Saharan Africa."
				],
				"Correct": "The majority of countries with less than 70 percent secondary school enrollment are in sub-Saharan Africa."
			},
			{
				"Question": "Which of the following best describes the spatial pattern of ethnicity in Singapore's neighborhoods?",
				"Image": "0_4.png",
				"Options": [
					"Malay is the largest ethnic group, ethnic Chinese live in the center of the city, and ethnic Indians live in the peripheral neighborhoods.",
					"The three major ethnic groups, Malay, Chinese, and Indian, are evenly distributed across the city.",
					"Ethnic Malay and ethnic Indians are evenly distributed throughout the city, while Chinese are only in the majority within the core central neighborhoods.",
					"Indian is the largest ethnic group, ethnic Chinese live in the center of the city, and ethnic Malay live in the peripheral neighborhoods.",
					"Ethnic Chinese residents are in the majority across most of the city, while ethnic Malay and ethnic Indian residents are concentrated in the peripheral neighborhoods."
				],
				"Correct": "Ethnic Chinese residents are in the majority across most of the city, while ethnic Malay and ethnic Indian residents are concentrated in the peripheral neighborhoods."
			},
			{
				"Question": "Since 2000, people in the largest category of international migrants seeking asylum in a different country are best described as",
				"Image": "",
				"Options": [
					"families looking for employment opportunities",
					"women seeking higher-education opportunities",
					"youths seeking seasonal farm employment",
					"men seeking construction or energy-sector jobs",
					"individuals fleeing conditions of armed conflict"
				],
				"Correct": "individuals fleeing conditions of armed conflict"
			},
			{
				"Question": "All of the following are examples of the spatial analysis tradition in geography EXCEPT the ",
				"Image": "",
				"Options": [
					"volume of telephone calls between  Corey Union and Old Main ",
					"trans-Atlantic slave trade ",
					"distance associated with shopping trips to area malls ",
					"volume of air traffic between London  and Hong Kong ",
					"number of space shuttles constructed "
				],
				"Correct": "number of space shuttles constructed "
			},
			{
				"Question": "The concept of environmental sustainability is best explained by which of the following examples?",
				"Image": "",
				"Options": [
					"Strip-mining of coal on mountainsides, to keep miners from working in underground conditions",
					"Clear-cutting trees in coastal woodlands, to provide building materials for constructing homes",
					"Fattening cattle in dryland feedlots, to practice agriculture efficiently and at the lowest cost",
					"Draining of wetlands in residential areas, to reduce the presence of stinging insects",
					"Terracing rice paddies on hillsides, to prevent soil erosion and provide gravity-fed irrigation"
				],
				"Correct": "Terracing rice paddies on hillsides, to prevent soil erosion and provide gravity-fed irrigation"
			},
			{
				"Question": "In the late nineteenth century, a large proportion of Swedish immigrants that came to the United States settled in rural areas of Minnesota. Descendants of these communities remain in Minnesota today, as shown on the map. Which of the following best describes the pattern of Swedish-American ethnicity within Minnesota’s cultural landscape?",
				"Image": "0_8.png",
				"Options": [
					"A diffused pattern of Swedish ethnicity evenly distributed across the state",
					"A Swedish ethnic majority in the northern half of the state",
					"A Swedish ethnic majority throughout the state",
					"A single remnant area with a high percentage of Swedish ethnicity",
					"A clustered pattern of Swedish ethnicity"
				],
				"Correct": "A clustered pattern of Swedish ethnicity"
			},
			{
				"Question": "The urban linguistic landscape shown in the photograph above is most likely found in a region where which of the following languages is spoken?",
				"Image": "0_9.png",
				"Options": [
					"Chinese",
					"Bahasa Indonesia ",
					"Hindi",
					"Russian",
					"Arabic"
				],
				"Correct": "Arabic"
			},
			{
				"Question": "Which of the following are the best examples of vernacular regions?",
				"Image": "",
				"Options": [
					"The Canadian Maritimes and the Northwest Territory",
					"South Africa and Australia",
					"South America and the Caribbean",
					"Scandinavia and the Iberian Peninsula",
					"The American West and the American Midwest"
				],
				"Correct": "The American West and the American Midwest"
			},
			{
				"Question": "Which of the following does NOT act as a centrifugal force for a state?",
				"Image": "",
				"Options": [
					"Uneven development",
					"Substate nationalism",
					"A fragmented territorial base",
					"A strong tradition of local governance",
					"Linguistic homogeneity"
				],
				"Correct": "Linguistic homogeneity"
			},
			{
				"Question": "An international company is looking to expand its network of factories, which use labor-intensive production methods, in a region of the world experiencing significant growth in the working-age population. Based on the data in the table, which of the following regions should the company choose?",
				"Image": "0_12.png",
				"Options": [
					"North America, which will have faster working-age growth in 2015 to 2030 than in 2000 to 2015",
					"Asia, which will have a faster working-age growth rate in 2015 to 2030 than in 2000 to 2015",
					"Latin America, which had the fastest working-age growth rate among world regions from 2000 to 2015",
					"Asia, which will have the fastest working-age growth rate among world regions from 2015 to 2030",
					"Sub-Saharan Africa, which will have the fastest working-age growth rate among world regions from 2015 to 2030"
				],
				"Correct": "Sub-Saharan Africa, which will have the fastest working-age growth rate among world regions from 2015 to 2030"
			},
			{
				"Question": "During the nineteenth and twentieth centuries, which of the following types of intraregional migration was the most prominent worldwide?",
				"Image": "",
				"Options": [
					"Urban to suburban ",
					"Inland to coastal ",
					"Highland to lowland ",
					"Urban to rural ",
					"Rural to urban "
				],
				"Correct": "Rural to urban "
			},
			{
				"Question": "Which of the following scales is represented in the map shown?",
				"Image": "0_14.png",
				"Options": [
					"Regional, showing the states or provinces in one part of a country",
					"State or province, showing the counties or parishes",
					"Neighborhood, showing the block along street boundaries",
					"Block, showing the property lines and names of owners",
					"Local, showing the towns and township areas in a county"
				],
				"Correct": "Local, showing the towns and township areas in a county"
			},
			{
				"Question": "The images show a topographic map and a geographic information systems (GIS) representation of Mount Shasta in California. Which of the following statements best explains why these printed images are geometrically distorted representations of Earth’s surface?",
				"Image": "0_15.png",
				"Options": [
					"Some maps do not show the actual coloration of Earth’s surface and vegetation.",
					"GIS can only display two-dimensional layers.",
					"The planet’s gravitational poles are not located at the poles of Earth’s axis.",
					"Printed maps alter the sense of place that people can have about a location.",
					"The three dimensions of Earth’s surface are displayed on a two-dimensional page."
				],
				"Correct": "The three dimensions of Earth’s surface are displayed on a two-dimensional page."
			},
			{
				"Question": "Which of the following is a characteristic of the Mercator projection?",
				"Image": "0_16.png",
				"Options": [
					"The size of all countries is accurate, but the shape is distorted.",
					"Countries near the Equator appear 50 percent larger than countries in the middle latitudes.",
					"The projection is designed to maintain undistorted outlines of landmasses.",
					"Distances on the Mercator projection are real and accurate.",
					"The size and shape of countries in the higher latitudes are greatly exaggerated."
				],
				"Correct": "The size and shape of countries in the higher latitudes are greatly exaggerated."
			},
			{
				"Question": "Which of the following map scales would be most useful for studying the details of geographic features in the landscape of a farming community? ",
				"Image": "",
				"Options": [
					"1:3,000,000 ",
					"1:1,000,000 ",
					"1:750,000 ",
					"1:125,000 ",
					"1:10,000 "
				],
				"Correct": "1:10,000 "
			},
			{
				"Question": "Which of the following best identifies the scale of analysis for each of the maps shown?",
				"Image": "0_18.png",
				"Options": [
					"Global and regional",
					"Regional and urban",
					"Global and local",
					"Country and local",
					"Continental and country"
				],
				"Correct": "Continental and country"
			},
			{
				"Question": "Which of the following is most likely to be used by a marketing firm seeking to map patterns of lifestyle characteristics in the United States? ",
				"Image": "",
				"Options": [
					"States",
					"Nonmetropolitan areas ",
					"Congressional districts ",
					"Counties",
					"Zip codes "
				],
				"Correct": "Zip codes "
			},
			{
				"Question": "Which of the following describes a pull factor affecting migration to some of the more developed countries?",
				"Image": "",
				"Options": [
					"Loss of factory jobs",
					"Severe famine",
					"The rise of an authoritarian regime",
					"Religious persecution",
					"Universal health care"
				],
				"Correct": "Universal health care"
			},
			{
				"Question": "The map shows the distribution of the language family that has the largest number of speakers in the world. Which statement correctly identifies the language family shown and the method of diffusion that best explains the pattern?",
				"Image": "0_21.png",
				"Options": [
					"The map shows the distribution of the Amerindian language family, which diffused from its hearth in Canada and spread southward into South America through contagious diffusion and into Europe and Asia through trade and hierarchal diffusion.",
					"The map shows the distribution of the Sino-Tibetan language family, which diffused from its hearth in China and spread into Europe by contagious diffusion and to the Americas through stimulus diffusion.",
					"The map shows the distribution of the Uralic language family, which diffused from its hearth in Iceland and spread into northern Europe through contagious diffusion by Norse trading groups.",
					"The map shows the distribution of the Afro-Asiatic language family, which diffused from it hearth in Egypt and spread throughout the Arabian Peninsula and into Eurasia through contagious diffusion and into the Americas through colonialism and relocation diffusion.",
					"The map shows the distribution of the Indo-European language family, which diffused from its hearth in the Caucasus Mountains and spread throughout Eurasia through contagious diffusion and into the Americas, Africa, and Australia through colonialism and relocation diffusion."
				],
				"Correct": "The map shows the distribution of the Indo-European language family, which diffused from its hearth in the Caucasus Mountains and spread throughout Eurasia through contagious diffusion and into the Americas, Africa, and Australia through colonialism and relocation diffusion."
			},
			{
				"Question": "The temples shown in the images, combined with the surrounding scenic physical landscape, have become centers of pilgrimage and tourism. These factors combine to result in enhanced religious expression and local",
				"Image": "0_22_23.png",
				"Options": [
					"spatial analysis",
					"suburbanization",
					"technological change",
					"multiculturalism",
					"placemaking"
				],
				"Correct": "placemaking"
			},
			{
				"Question": "Comparing both photographs, each image shows the significance of temples, religious statuary, and iconography on the",
				"Image": "0_22_23.png",
				"Options": [
					"cultural hearth",
					"ethnic culture",
					"traditional toponyms",
					"colonial architecture",
					"cultural landscape"
				],
				"Correct": "cultural landscape"
			},
			{
				"Question": "Which of the following is a limitation of the map of Hispanic population percentage?",
				"Image": "0_24.png",
				"Options": [
					"Larger county sizes in the western United States mask the significance of the Hispanic population in most western counties.",
					"States with the largest total populations mask the significance of the Hispanic population in those states.",
					"States with the smallest total populations mask the significance of the Hispanic population in those states.",
					"The pattern shown is not different than the pattern of early Hispanic settlement during the era of colonization.",
					"The small size of urban counties in the eastern United States masks the significance of the Hispanic population in most eastern cities."
				],
				"Correct": "The small size of urban counties in the eastern United States masks the significance of the Hispanic population in most eastern cities."
			},
			{
				"Question": "Which of the following concepts could best be explained by the theory of possibilism?",
				"Image": "",
				"Options": [
					"Regional differences between the internal structures of cities",
					"Changes in population growth rates over time",
					"Limitations on agricultural crops based on climate",
					"Political patterns seen in election maps",
					"Modification of landscapes by human cultures"
				],
				"Correct": "Modification of landscapes by human cultures"
			},
			{
				"Question": "The principal religion of Central and South America is ",
				"Image": "",
				"Options": [
					"Eastern Orthodoxy ",
					"Buddhism",
					"Islam",
					"Protestantism",
					"Roman Catholicism "
				],
				"Correct": "Roman Catholicism "
			},
			{
				"Question": "In 2018, a large number of migrants from Afghanistan and Iraq applied for asylum in the European Union. Which of the following is a pull factor that explains this migration?",
				"Image": "",
				"Options": [
					"A high rate of natural increase in the Middle East, leading to overpopulation",
					"Armed conflict, driving many people from their home regions in the Middle East",
					"Drought and food shortages in the Middle East, leading many people to search for food security",
					"Immigration reforms and fenced borders around Europe, controlling the flow of migrant workers",
					"Economic growth and employment opportunities in Europe, attracting immigrant workers"
				],
				"Correct": "Economic growth and employment opportunities in Europe, attracting immigrant workers"
			},
			{
				"Question": "Cultural differences within a country’s population, such as different religions, languages, and ethnicities, have political impacts and can best be described as",
				"Image": "",
				"Options": [
					"centripetal forces within a state",
					"the effects of diffusion on the state",
					"the effects of imperialism on the state",
					"globalizing forces within a state",
					"centrifugal forces within a state"
				],
				"Correct": "centrifugal forces within a state"
			},
			{
				"Question": "Which of the following statements explains the regional location in the United States where the figures shown in the image are most likely part of the cultural landscape?",
				"Image": "0_29.png",
				"Options": [
					"The Northeast, because residents are influenced by British Protestantism.",
					"The Southeast, because residents are influenced by traditional religions from West Africa.",
					"The Great Plains, because residents are influenced by Native American traditional religions.",
					"The Northwest, because residents are influenced by Russian Orthodoxy.",
					"The Southwest, because residents are influenced by Spanish Catholicism."
				],
				"Correct": "The Southwest, because residents are influenced by Spanish Catholicism."
			},
			{
				"Question": "Which of the following is an example of  a cultural landscape? ",
				"Image": "",
				"Options": [
					"Coastal wetland ",
					"Cloud forest ",
					"Stand of mangrove trees ",
					"Eroded shoreline ",
					"Adobe ruins "
				],
				"Correct": "Adobe ruins "
			},
			{
				"Question": "Which of the following features is most useful for describing the cultural landscape shown in the image?",
				"Image": "0_31.png",
				"Options": [
					"The ethnicity of the people in the image",
					"The dragon that the people are holding",
					"The density of the crowd",
					"The clothing of the people participating in the parade",
					"The French language on the banner hanging from the building"
				],
				"Correct": "The French language on the banner hanging from the building"
			},
			{
				"Question": "Which of the following types of migration are correctly explained by the example given?",
				"Image": "",
				"Options": [
					"International migration and forced migration: Family  A  from Beijing moves to Minneapolis so that the parents can attend graduate school.",
					"Internal migration and forced migration: Couple A  from Berlin has convinced their close friends Couple  B  to move to Greece and live in the same retirement community.",
					"Internal migration and voluntary migration: Family  A  from Baghdad are resettled by the United States for political asylum in Detroit.",
					"Internally displaced persons and forced migration: Couple  A  from rural Brazil move to São Paulo to find better job opportunities.",
					"International migration and voluntary migration: Family  A  from Mumbai has convinced their close friends Family  B to emigrate to London as they did in order help start up their business."
				],
				"Correct": "International migration and voluntary migration: Family  A  from Mumbai has convinced their close friends Family  B to emigrate to London as they did in order help start up their business."
			},
			{
				"Question": "In descriptions of interaction between people and the environment, the term “environmental determinism” implies that",
				"Image": "",
				"Options": [
					"humans by their actions and technologies alter the physical environment to suit their needs ",
					"determination of environmental limitations is a primary task of geographers ",
					"capitalist economies do not contribute to global environmental degradation  ",
					"there exists no interacting relationship between people and their surrounding physical environment ",
					"the physical environment exclusively shapes humans and their actions  "
				],
				"Correct": "the physical environment exclusively shapes humans and their actions  "
			},
			{
				"Question": "An ethnic neighborhood is best described as which of the following?",
				"Image": "",
				"Options": [
					"An involuntary community where people with similar values reside ",
					"A rural community where people with similar backgrounds are required to live ",
					"An area in the inner city where certain groups are forced to live ",
					"A city neighborhood that is undergoing population change due to immigration ",
					"A voluntary urban community where people of similar origin reside "
				],
				"Correct": "A voluntary urban community where people of similar origin reside "
			},
			{
				"Question": "Which of the following terms best describes regions that make up the political geographic divisions within a country?",
				"Image": "",
				"Options": [
					"Cultural",
					"Perceptual",
					"Vernacular",
					"Physical",
					"Formal"
				],
				"Correct": "Formal"
			},
			{
				"Question": "In the century after the arrival of Europeans, which of the following changes occurred to the indigenous population of the Americas?",
				"Image": "",
				"Options": [
					"It increased dramatically because of new trade routes and industries",
					"It increased slowly with the introduction of new crops",
					"It remained about the same, since very few Europeans actually moved there",
					"It decreased slowly due to increased competition for land",
					"It decreased dramatically with the introduction of new diseases"
				],
				"Correct": "It decreased dramatically with the introduction of new diseases"
			},
			{
				"Question": "Given the definitions, watersheds and milksheds can best be classified as what type of region?",
				"Image": "0_37.png",
				"Options": [
					"Culture",
					"Formal",
					"Industrial",
					"Vernacular",
					"Functional"
				],
				"Correct": "Functional"
			},
			{
				"Question": "Which of the following explains a significant positive impact that the immigration of large populations of Chinese people had on places like Vancouver and Los Angeles?",
				"Image": "",
				"Options": [
					"The increase of large populations of Chinese people established Cantonese as the lingua franca, allowing immigrants and local people to communicate.",
					"The assimilation of Chinese immigrants created stability in their new city neighborhoods, giving the immigrants political power.",
					"Most Chinese immigrants converted to the dominant religions of their new cities, prompting the construction of many new churches.",
					"Chinese neighborhoods were established on the outskirts of these cities as agricultural trade centers, introducing Asian crops to North America.",
					"Chinese immigrants established businesses and religious centers that provided their new cities with greater access to elements of Chinese culture such as arts, cuisine, and religion."
				],
				"Correct": "Chinese immigrants established businesses and religious centers that provided their new cities with greater access to elements of Chinese culture such as arts, cuisine, and religion."
			},
			{
				"Question": "Which of the following explains the major effect of migration flow to Southwest Asia from other regions in Asia?",
				"Image": "",
				"Options": [
					"Students migrate to attend school in the region, increasing the technology labor force.",
					"Women and children migrate to reunify with male relatives living in the region, forming permanent urban settlements.",
					"People with chronic illnesses travel as medical tourists to obtain medical care, growing the health care industry.",
					"Guest workers migrate to the region for jobs in construction and the oil fields, increasing the volume of exports from the region.",
					"Older adults migrate to areas with warmer climates after retiring from their jobs, growing the service industry."
				],
				"Correct": "Guest workers migrate to the region for jobs in construction and the oil fields, increasing the volume of exports from the region."
			}
		],
		[ // Unit 2
			{
				"Question": "The map shows the number of people per unit of land. Which of the following types of data are shown in the map?",
				"Image": "1_0.png",
				"Options": [
					"Physiological density",
					"Agricultural density",
					"Urban density",
					"Suburban density",
					"Arithmetic density"
				],
				"Correct": "Arithmetic density"
			},
			{
				"Question": "Based on the data shown, which of the following describes the most likely population context for the countries listed?",
				"Image": "1_1.png",
				"Options": [
					"High youth dependency ratio and a lack of economic resources to provide for large families",
					"Rapid population growth in cities as people migrate from rural to urban areas for industrial jobs",
					"Shortage of arable land on which to raise crops and other food products to support the population",
					"Unstable food supply due to a rapidly growing population",
					"Stage five of the demographic transition model due to very low birth rates"
				],
				"Correct": "Stage five of the demographic transition model due to very low birth rates"
			},
			{
				"Question": "Based on the population pyramid above, which of the following will pose the greatest demographic challenge to China beginning in 2029?",
				"Image": "1_2.png",
				"Options": [
					"Finding enough teachers to educate the young ",
					"Limiting out-migration of the 60- to 64-year-old age cohort ",
					"Providing prenatal medical care ",
					"Controlling population growth",
					"Providing for the needs of its aging population "
				],
				"Correct": "Providing for the needs of its aging population "
			},
			{
				"Question": "Which population pyramid shown above best represents a college town? ",
				"Image": "1_3_4.png",
				"Options": [
					"A",
					"B",
					"C",
					"E",
					"D"
				],
				"Correct": "D"
			},
			{
				"Question": "Which population pyramid shown above best represents a town with a military base? ",
				"Image": "1_3_4.png",
				"Options": [
					"A",
					"B",
					"D",
					"E",
					"C"
				],
				"Correct": "C"
			},
			{
				"Question": "Which of the following is a correct statement about the demographic transition model? ",
				"Image": "",
				"Options": [
					"It is applicable only to eighteenth-century Europe. ",
					"It predicts the growth of population in  Russia reasonably well. ",
					"It divides the demographic changes of a country into two stages of slow growth and high growth.",
					"It supports the idea that technology can remove or extend the limits of food production. ",
					"It is characterized by relatively low growth rates at stage 1 and stage 4."
				],
				"Correct": "It is characterized by relatively low growth rates at stage 1 and stage 4."
			},
			{
				"Question": "Which of the following countries is best described as being at Stage 3 of the demographic transition model?",
				"Image": "1_6_11_14_16.png",
				"Options": [
					"China: birth rate = 13, death rate =7",
					"Democratic Republic of the Congo: birth rate = 44, death rate = 10",
					"Ivory Coast: birth rate = 37, death rate = 13",
					"Hungary: birth rate = 10, death rate = 13",
					"Bolivia: birth rate = 24 , death rate = 7"
				],
				"Correct": "Bolivia: birth rate = 24 , death rate = 7"
			},
			{
				"Question": "Which of the following country demographics would be used to explain the need for the pronatalist policies shown?",
				"Image": "",
				"Options": [
					"A country with a birth rate of 43, a death rate of 12, and a rate of natural increase of 3.1, passes a law that requires paid maternity leave.",
					"A country with a birth rate of 16, a death rate of 4, and a rate of natural increase of 1.2, establishes long maternity leave periods from work",
					"A country with a birth rate of 12, a death rate of 10, and a rate of natural increase of 0.2, requires full-day kindergarten.",
					"A country with a birth rate of 20, a death rate of 10, and a rate of natural increase of 1.0 , provides state-subsidized day care centers.",
					"A country with a birth rate of 11, a death rate of 13, and a rate of natural increase of  −0.2 , legislates tax credits for working parents"
				],
				"Correct": "A country with a birth rate of 11, a death rate of 13, and a rate of natural increase of  −0.2 , legislates tax credits for working parents"
			},
			{
				"Question": "Which of the following best explains a possible limitation of the trends assumed from the population pyramid and estimates in the data table?",
				"Image": "1_8_9.png",
				"Options": [
					"A period of war followed by a baby boom, similar to that of the 1940s and 1950s, is likely to occur within a generation, increasing the youth-aged cohorts.",
					"Modernization of health-care systems may result in improvements in women’s health and pregnancy and result in more children being born, increasing the youth-aged cohorts.",
					"Decreasing populations may cause an economic decline, prompting many citizens to emigrate to other more developed countries and decreasing the working-age cohorts.",
					"Production efficiencies gained from computerization and robotization of manufacturing may free parents from long work hours and result in more time to have additional children, increasing the youth-aged cohorts.",
					"Labor shortages may cause the government to reduce the legal barriers to immigration, and immigrant populations could increase the working-age cohorts."
				],
				"Correct": "Labor shortages may cause the government to reduce the legal barriers to immigration, and immigrant populations could increase the working-age cohorts."
			},
			{
				"Question": "What changes could local governments, businesses, and corporations make to reverse Japan’s national birth patterns?",
				"Image": "1_8_9.png",
				"Options": [
					"Decreasing transportation costs to allow workers to commute from locations farther outside of densely populated urban centers",
					"Reducing the time off allowed for maternity leave and incentivizing working mothers to return to the workforce",
					"Enforcing a two-child policy for all families, requiring a minimum of two children per family to become eligible to receive school services and work benefits",
					"Increasing access to family planning clinics and making doctor’s office visits free for women patients",
					"Adding low-cost or zero-cost infant day care and preschool centers to allow mothers to return to the workforce"
				],
				"Correct": "Adding low-cost or zero-cost infant day care and preschool centers to allow mothers to return to the workforce"
			},
			{
				"Question": "Which of the following describes a characteristic of a country moving from stage 2 to stage 3 of the demographic transition model?",
				"Image": "1_10.png",
				"Options": [
					"Shorter life expectancy",
					"Increasing birth rate",
					"High level of female education",
					"Increasing dependence on farm labor",
					"Declining death rate"
				],
				"Correct": "Declining death rate"
			},
			{
				"Question": "Which of the following describes the most likely cause of death for a citizen of a country in stages 4 and 5 of the demographic transition model?",
				"Image": "1_6_11_14_16.png",
				"Options": [
					"Infectious diseases due to poor sanitation",
					"Starvation due to an unstable food supply",
					"Infectious diseases due to a lack of vaccines and antibiotics",
					"Reemergence of previously eradicated diseases",
					"Degenerative diseases due to old age and lifestyle"
				],
				"Correct": "Degenerative diseases due to old age and lifestyle"
			},
			{
				"Question": "Which statement best describes population growth patterns in the world today?",
				"Image": "",
				"Options": [
					"In the world as a whole, women have an average of five or more children, leading to Malthusian crises.",
					"Fertility rates in low- and middle-income countries worldwide are higher now than 25 years ago.",
					"In sub-Saharan Africa, South Asia, and the Pacific, fertility rates have doubled in the last 25 years.",
					"Fertility rates in most high-income countries have risen in the last 25 years.",
					"In the world as a whole, fertility rates have fallen in the last 25 years. "
				],
				"Correct": "In the world as a whole, fertility rates have fallen in the last 25 years. "
			},
			{
				"Question": "Which of the following best explains a likely effect of Brazil’s population distribution?",
				"Image": "1_13.png",
				"Options": [
					"More uniform economic growth throughout the entire country as urban areas expand westward",
					"Increased cultural unity as more people live in close proximity to one another in eastern Brazil",
					"The expansion of available farmland as people move to the cities, allowing more rural land to be farmed",
					"More efficient political administration and improved governance as the population becomes more clustered",
					"Uneven economic development as eastern Brazil experiences more growth than the sparsely inhabited western regions"
				],
				"Correct": "Uneven economic development as eastern Brazil experiences more growth than the sparsely inhabited western regions"
			},
			{
				"Question": "Which of the following statements best describes how the epidemiologic transition affects the demographic transition?",
				"Image": "1_6_11_14_16.png",
				"Options": [
					"The epidemiologic transition occurs in stage 1 of the demographic transition, causing a fluctuation in birth and death rates.",
					"Improvements in nutrition, sanitation, and health care cause birth rates to fall in stage 3 of the demographic transition.",
					"The epidemiologic transition occurs in stage 4 of the demographic transition, causing a slowing of the rate of natural increase.",
					"The epidemiologic transition occurs in stage 5 of the demographic transition as famines and wars cause a total population decline.",
					"Improvements in nutrition, sanitation, and health care cause death rates to fall in stage 2 of the demographic transition."
				],
				"Correct": "Improvements in nutrition, sanitation, and health care cause death rates to fall in stage 2 of the demographic transition."
			},
			{
				"Question": "In the model shown, the lines for birth rate, death rate, and total population are indicators of a country’s",
				"Image": "1_6_11_14_16.png",
				"Options": [
					"cycles of economic boom and bust over time",
					"demographic change following a period of warfare",
					"demographic change following a period of famine",
					"demographic change following a period of totalitarian government",
					"level of social and economic development over time"
				],
				"Correct": "level of social and economic development over time"
			},
			{
				"Question": "The demographic transition is a general model that seeks to explain",
				"Image": "1_6_11_14_16.png",
				"Options": [
					"the relationship between the size of age cohorts and natural population change",
					"how variations in population size and food supply can lead to periods of crisis",
					"the effects of changes in population size on the gross domestic product",
					"variations in population size, population migration rates, and the rate of natural increase",
					"how differences in birth and death rates result in natural population change"
				],
				"Correct": "how differences in birth and death rates result in natural population change"
			},
			{
				"Question": "Which of the following best explains why, in the late eighteenth and early nineteenth centuries, Thomas Malthus proposed his population theory?",
				"Image": "",
				"Options": [
					"Malthus theorized that the ability of a population to feed itself would increase with the expansion of the population; more people would mean greater knowledge invested in expanding food production.",
					"Malthus theorized that reductions of infant mortality would eventually result in slower population growth rates.",
					"Malthus theorized that agricultural developments in the mid-to-late eighteenth century would result in a significant expansion of food production, therefore alleviating the threat of overpopulation.",
					"Malthus theorized the only way to prevent overpopulation would be to create policies that would limit the number of children a family could have.",
					"Malthus theorized that, if left unchecked by regular cycles of famine and misery, population would increase beyond the ability to feed itself."
				],
				"Correct": "Malthus theorized that, if left unchecked by regular cycles of famine and misery, population would increase beyond the ability to feed itself."
			},
			{
				"Question": "Which of the following would be most likely to increase life expectancy in a less developed country, resulting in an aging population in that country?",
				"Image": "",
				"Options": [
					"An increase in the country’s birth rate",
					"Rural-to-urban migration within the country",
					"Improvements in transportation and communication networks",
					"A decrease in the country’s total fertility rate",
					"Improvements in access to health care and sanitation"
				],
				"Correct": "Improvements in access to health care and sanitation"
			},
			{
				"Question": "Which of the following describes information a geographer could identify from the map of urban populations in Brazil?",
				"Image": "1_19.png",
				"Options": [
					"Urban areas with rapid population growth",
					"Distribution of high and low incomes",
					"Areas with negative population growth",
					"Urban areas most at risk for overpopulation",
					"Patterns of arithmetic density within specific regions"
				],
				"Correct": "Patterns of arithmetic density within specific regions"
			},
			{
				"Question": "Which of the following is most characteristic of societies currently in the last stage of demographic transition?",
				"Image": "",
				"Options": [
					"Hyperinflation",
					"Unemployment ",
					"Youth dependency ",
					"Overpopulation",
					"Aging population "
				],
				"Correct": "Aging population "
			},
			{
				"Question": "In the early part of the Industrial Revolution in Europe, Thomas Malthus developed a theory that population increases exponentially, while food production can increase only arithmetically. Which of the following statements best explains how the Industrial Revolution reduced the threats forecast by Malthus?",
				"Image": "",
				"Options": [
					"Industrialization led to the manufacture of weaponry used in warfare, resulting in higher mortality during the conflicts of the nineteenth and twentieth centuries that dramatically reduced populations.",
					"The migration of people from rural areas to factory cities allowed farmers to expand their farm size and increase food production above Malthus’ predictions.",
					"Industrialization enabled and promoted European imperialism, and Europeans migrated to overseas colonies, reducing the European population.",
					"Mechanization expanded to agriculture, increasing the need for agricultural labor to run the equipment, leading rural families to have more children and increasing population growth.",
					"The resulting rural-to-urban migration for jobs in factories led to a decline in birth rates and lowered population growth rates below what Malthus predicted."
				],
				"Correct": "The resulting rural-to-urban migration for jobs in factories led to a decline in birth rates and lowered population growth rates below what Malthus predicted."
			},
			{
				"Question": "In 1798 Thomas Malthus argued that populations grew exponentially while food supplies grew arithmetically. Consequently, Malthus argued that food shortages would develop until famine and other checks slowed population growth. What statement correctly explains why Malthus’ prediction did not come true in 1800s Europe?",
				"Image": "",
				"Options": [
					"Immigration to Europe and the abolition of slavery resulted in a more productive agricultural labor force.",
					"Rising education levels among women and increased numbers of single-person households reduced fertility and the demand for food.",
					"Antinatalist population policies placed limits on the number of children per family and reduced the demand for food.",
					"Global trade in manufactured food products increased the food supply and offset the demand for food.",
					"Urbanization resulted in smaller household sizes, and the mechanization of agriculture increased food production."
				],
				"Correct": "Urbanization resulted in smaller household sizes, and the mechanization of agriculture increased food production."
			},
			{
				"Question": "Which of the following explains the pattern of growth in City  B  relative to City A ?",
				"Image": "1_23.png",
				"Options": [
					"City  A  is located in a less developed country and has high rates of rural-to-urban migration, whereas City  B  is located in a more developed country and has low rates of rural-to-urban migration.",
					"City  B  is located in a less developed country and has a well-developed transportation system, whereas City  A  is located in a more developed country and has a limited transportation system.",
					"City  A  is located in a less developed country and has a well-developed transportation system, whereas City  B  is located in a more developed country and has a limited transportation system.",
					"City  B  is located in a more developed country and has a high number of urban amenities, whereas City  A  is located in a less developed country and has a limited number of urban amenities.",
					"City  B  is located in a less developed country and has high rates of rural-to-urban migration, whereas City  A  is located in a more developed country and has low rates of rural-to-urban migration."
				],
				"Correct": "City  B  is located in a less developed country and has high rates of rural-to-urban migration, whereas City  A  is located in a more developed country and has low rates of rural-to-urban migration."
			},
			{
				"Question": "Which of the following characteristics applies  to more-developed countries?",
				"Image": "",
				"Options": [
					"Early stages of epidemiological transition ",
					"High total fertility rates ",
					"Rapid population growth ",
					"Early stages of the demographic transition ",
					"Long life expectancies "
				],
				"Correct": "Long life expectancies "
			},
			{
				"Question": "In which of the following contexts could a neo-Malthusian perspective most successfully explain population characteristics?",
				"Image": "",
				"Options": [
					"A country experiencing population decline, where birth rates are low",
					"A country with a low rate of natural population increase, where a small percentage of citizens work in agriculture",
					"A country experiencing significant out-migration, where economic conditions lead many job seekers to move to other countries",
					"A country recovering from an environmental disaster, where infrastructure must be rebuilt",
					"A country with a high rate of natural population increase, where food supplies are at risk"
				],
				"Correct": "A country with a high rate of natural population increase, where food supplies are at risk"
			},
			{
				"Question": "Which of the following best explains the significant difference in North Africa’s demographic data from the rest of the African continent and North Africa’s closer similarity to global demographic data?",
				"Image": "1_26.png",
				"Options": [
					"North African declines in nutrition, health care, and sanitation have resulted in higher birth rates but have not affected death rates or life expectancies over time.",
					"North African investment in transportation and energy sectors has reduced birth and death rates as well as improved life expectancies over time.",
					"Foreign investment in North Africa’s transportation and energy sectors has resulted in higher birth rates but have not affected death rates or life expectancies over time.",
					"North African business losses in transportation and energy sectors have resulted in higher birth rates but have not affected death rates or life expectancies over time.",
					"North African improvements in nutrition, health care, and sanitation have reduced birth and death rates as well as improved life expectancies over time."
				],
				"Correct": "North African improvements in nutrition, health care, and sanitation have reduced birth and death rates as well as improved life expectancies over time."
			},
			{
				"Question": "Which of the following explains why a country with a high physiological density (e.g., Japan, Egypt, or the Netherlands) risks exceeding its carrying capacity?",
				"Image": "",
				"Options": [
					"The population is clustered in key areas, so rural populations will not have easy access to public services such as schools and hospitals.",
					"The population is evenly dispersed throughout the country, so it is difficult to maintain infrastructure such as roads and telecommunication networks for the entire country.",
					"There is a large number of people per unit of total land area, so there is no available land for farmers to raise crops and other food products.",
					"The amount of farmers per unit of land area in these countries is too low to be able to support their populations.",
					"The population places a large amount of pressure on the arable land to produce enough food without risking severe environmental degradation."
				],
				"Correct": "The population places a large amount of pressure on the arable land to produce enough food without risking severe environmental degradation."
			},
			{
				"Question": "Physiological population density differs from crude population density in that physiological density ",
				"Image": "",
				"Options": [
					"examines only the population of cities, while crude density includes the population of cities and rural areas ",
					"is a measure of how density is perceived, while crude density is a measure of specific density ",
					"explains the density of a single housing unit while crude density explains the density of a group of houses ",
					"is the number of people per housing unit, while crude density is the number of people per square mile ",
					"explains density in terms of people per arable square land unit, while crude density explains density in terms of people per total square land unit "
				],
				"Correct": "explains density in terms of people per arable square land unit, while crude density explains density in terms of people per total square land unit "
			},
			{
				"Question": "Physiological population density is viewed as a superior measure of population density for which of the following reasons?",
				"Image": "",
				"Options": [
					"It yields the average population density. ",
					"It is more reflective of the world’s largest population concentrations. ",
					"It measures the average by dividing total land area by total number of people. ",
					"It best reflects the percentage of a country’s population that is urbanized.",
					"It is more reflective of population pressure on arable land. "
				],
				"Correct": "It is more reflective of population pressure on arable land. "
			},
			{
				"Question": "Sri Lanka and Australia have about the same population. What data would help you determine which country has a higher physiological population density?",
				"Image": "",
				"Options": [
					"The area of each country ",
					"The number of farmers in each country",
					"The total fertility rate of each country ",
					"The amount of arid land in each country ",
					"The amount of arable land in each country"
				],
				"Correct": "The amount of arable land in each country"
			},
			{
				"Question": "On the map above, which one of the following boxes is in an area where the population density is high and the level of economic development is low?",
				"Image": "1_31.png",
				"Options": [
					"B",
					"D",
					"E",
					"A",
					"C"
				],
				"Correct": "C"
			},
			{
				"Question": "Which of the following best identifies the data for the Eastern Great Rift Valley, shown on the map?",
				"Image": "1_32.png",
				"Options": [
					"Low arithmetic density",
					"Low carrying capacity",
					"High total fertility rate",
					"Low total fertility rate",
					"High arithmetic density"
				],
				"Correct": "High arithmetic density"
			},
			{
				"Question": "Based on the graph, predicted population growth in which of the following regions is explained by a high total fertility rate?",
				"Image": "1_33.png",
				"Options": [
					"Asia",
					"Africa",
					"United States and Canada",
					"Europe",
					"Latin America and Caribbean"
				],
				"Correct": "Africa"
			},
			{
				"Question": "The term that describes the concept that population will continue to grow even after fertility rates decline is known as ",
				"Image": "",
				"Options": [
					"demographic transition ",
					"rate of natural increase ",
					"the population pyramid ",
					"the homeostatic plateau ",
					"demographic momentum "
				],
				"Correct": "demographic momentum "
			},
			{
				"Question": "Which of the following best describes a country with a rate of natural increase of 0.4 ?",
				"Image": "",
				"Options": [
					"Negative population growth",
					"Low life expectancy",
					"Increasing fertility rates",
					"Decreasing percent elderly population",
					"Slow population growth"
				],
				"Correct": "Slow population growth"
			},
			{
				"Question": "In many less developed countries, only a small percentage of school-aged youth attend school regularly. In some cases, fewer females than males are enrolled in schools. Which of the following patterns is a concern in less developed countries with low school enrollment?",
				"Image": "",
				"Options": [
					"A lack of jobs for older males because of the high number of qualified females",
					"A large number of females working in factories because most males work in agriculture",
					"A migration comprised entirely of working-age females to other countries for better-paying jobs",
					"A migration of males and females to other countries to pursue postsecondary education",
					"A lack of qualified males and females to develop a workforce that will improve economic growth"
				],
				"Correct": "A lack of qualified males and females to develop a workforce that will improve economic growth"
			},
			{
				"Question": "Which of the following regions had the smallest percentage of people living in urban areas at the end of the twentieth century? ",
				"Image": "",
				"Options": [
					"Australia",
					"North America ",
					"Europe",
					"South America ",
					"South Asia "
				],
				"Correct": "South Asia "
			},
			{
				"Question": "A country in the first stage of the demographic transition demonstrates which of the following?",
				"Image": "",
				"Options": [
					"An old population age structure ",
					"High birth rates, but low death rates ",
					"Low birth rates, low death rates, and low rates of population growth ",
					"High birth rates, high death rates, and high rates of population growth ",
					"High birth rates, high death rates, and low rates of population growth "
				],
				"Correct": "High birth rates, high death rates, and low rates of population growth "
			},
			{
				"Question": "The dependency ratio is most useful for indicating the",
				"Image": "",
				"Options": [
					"reliance of a country on imported fossil fuels ",
					"degree of gender equality within a country ",
					"relationship between the total fertility rate and the infant mortality rate ",
					"percentage of foreign ownership within the secondary sector of a country’s economy ",
					"relationship between the potential labor force and the remainder of a country’s population"
				],
				"Correct": "relationship between the potential labor force and the remainder of a country’s population"
			}
		],
		[ // Unit 3
			{
				"Question": "Which scenario best explains the process of assimilation?",
				"Image": "",
				"Options": [
					"A family immigrates to a new country, settles near others from their homeland, and conducts most of their day-to-day activities within their ethnic neighborhood.",
					"Despite the large number of historic churches in France, many French identify as nonreligious and believe that religion is a private matter.",
					"The island of Mauritius has large populations of Christians, Hindus, and Muslims. The constitution of Mauritius prohibits discrimination and protects freedom of religion.",
					"Hinduism diffused from India to Bali, where it blended with traditional Balinese beliefs to create a form of Hinduism unique to Bali.",
					"The American government educated Native American children in American-style boarding schools. All of the children  were taught English, and girls were taught how to be homemakers."
				],
				"Correct": "The American government educated Native American children in American-style boarding schools. All of the children  were taught English, and girls were taught how to be homemakers."
			},
			{
				"Question": "There has been an increase in asylum seekers from Syria to the European Union in recent years. Which of the following best describes the reason for this migration?",
				"Image": "",
				"Options": [
					"A large rural-to-urban population shift within Syria",
					"A continuing rise in employment for asylum seekers in the European Union",
					"The tightening of asylum policies by the European Union",
					"The tightening of guest-worker policies by the European Union",
					"A continuing issue of conflict and political unrest within Syria"
				],
				"Correct": "A continuing issue of conflict and political unrest within Syria"
			},
			{
				"Question": "The state of California, often considered a hearth of environmental laws, will be the first state to ban plastic straws. Which of the following statements best describes the likely spread of this environmental practice?",
				"Image": "",
				"Options": [
					"This practice will likely spread via hierarchical diffusion when the president of the United States signs an executive order banning plastic straws in all states.",
					"This practice will likely spread via social media and stimulus diffusion when other states enact identical laws banning plastic straws.",
					"As regional news organizations report on the ban, this practice will likely spread through contagious diffusion only to western states adjacent to California.",
					"Strong lobbying by the plastics industry will likely curtail the diffusion of the ban, and this practice will be limited to California.",
					"Similar environmental laws will likely spread through stimulus diffusion to other states via political activism."
				],
				"Correct": "Similar environmental laws will likely spread through stimulus diffusion to other states via political activism."
			},
			{
				"Question": "Which of the following best explains how Christianity became the dominant religion in the Philippines?",
				"Image": "",
				"Options": [
					"Christianity entered the Philippines through the ministry of representatives from the Russian Orthodox church.",
					"A secondary hearth for Christianity arose in the Philippines in the twelfth century, and since that time Christianity has remained the dominant religion in the Philippines.",
					"Christianity entered the Philippines through contagious diffusion because of its proximity to Indonesia.",
					"Export-oriented logging companies from Japan brought Christianity to the Philippines during the twentieth century.",
					"Christianity was brought to the Philippines through relocation diffusion when the Spanish colonized the Philippines in the sixteenth century."
				],
				"Correct": "Christianity was brought to the Philippines through relocation diffusion when the Spanish colonized the Philippines in the sixteenth century."
			},
			{
				"Question": "Identify which of the following concepts or processes is symbolized by the pagoda in the image.",
				"Image": "2_5_8.png",
				"Options": [
					"Acculturation",
					"Material culture",
					"Assimilation",
					"Syncretism",
					"Cultural trait"
				],
				"Correct": "Cultural trait"
			},
			{
				"Question": "Which of the following describes the process of creolization?",
				"Image": "",
				"Options": [
					"The representations of Spanish, Portuguese, and French linguistic culture on the landscape of Latin America",
					"The layering of the European cultural landscape over the Native American landscape",
					"The exchange of crops and animals between the Old World and the New World",
					"The adoption of Native American toponyms for place-names of European settlements ",
					"The mix of Native American, African, and European influences to create new cultural forms"
				],
				"Correct": "The mix of Native American, African, and European influences to create new cultural forms"
			},
			{
				"Question": "Which of the following geographic concepts can be identified using information evident in the image?",
				"Image": "2_6.png",
				"Options": [
					"Acculturation",
					"Forced migration",
					"Sequent occupance",
					"Cultural relativism",
					"Cultural diffusion"
				],
				"Correct": "Cultural diffusion"
			},
			{
				"Question": "As Buddhism diffused through East Asia, Buddhist traditions blended with local cultural customs to create distinct religious practices, such as Daoism in China and Shinto in Japan. Which of the following terms best describes this blending of cultural traditions?",
				"Image": "",
				"Options": [
					"Assimilation",
					"Acculturation",
					"Possibilism",
					"Multiculturalism",
					"Syncretism"
				],
				"Correct": "Syncretism"
			},
			{
				"Question": "Identify the cultural trait that influences the architecture of the cultural landscape shown in the image.",
				"Image": "2_5_8.png",
				"Options": [
					"Ethnicity",
					"Language",
					"Taboos",
					"Gender",
					"Religion"
				],
				"Correct": "Religion"
			},
			{
				"Question": "Based on the two images, which of the following statements best explains the geographic process that took place as Islam diffused from its hearth?",
				"Image": "2_9.png",
				"Options": [
					"Islam is confined to the Middle East because it is an ethnic religion that appeals to only one group of people in one region.",
					"The diffusion of Islam has resulted in a cultural landscape in China that has been radically altered to reflect Islamic architecture.",
					"The diffusion of Islam has had a minimal impact on regions to the west and east of its hearth in the Middle East.",
					"The universalizing nature of Islam has allowed it to become worldwide in scope and the dominant religion in North America and Europe.",
					"Islam diffused hierarchically to the west through conquest and to the east through relocation via missionaries along trade routes."
				],
				"Correct": "Islam diffused hierarchically to the west through conquest and to the east through relocation via missionaries along trade routes."
			},
			{
				"Question": "Which of the following best exemplifies the diffusion of popular culture throughout the world in contemporary society?",
				"Image": "",
				"Options": [
					"The increasing popularity of a fashion trend that originates in a large city, such as New York, and spreads to small rural towns",
					"The spread of a religion through the migration of adherents of the religion",
					"The increasing popularity of a new band that spends a year touring cities around the world",
					"The spread of new slang that becomes widely used in government-funded schools",
					"The spread of an Internet meme via social media applications"
				],
				"Correct": "The spread of an Internet meme via social media applications"
			},
			{
				"Question": "Which of the following statements best explains why English is the most widely spoken language in North America?",
				"Image": "",
				"Options": [
					"The English language diffused throughout North America through the process of hierarchical diffusion. The language was initially spoken in cities and was gradually adopted by people living in rural areas.",
					"The English language diffused to North America through the process of contagious diffusion. Christian missionaries were responsible for the spread of the language among the indigenous population.",
					"The English language was established as the official language of all of the British colonies in North America. Over time, it diffused throughout the population from the colonial leadership to the population.",
					"The English language became a widely spoken language in North America in the twentieth century. This primarily occurred as a way of unifying the immigrant populations in both the United States and Canada.",
					"The English language initially diffused to North America through the process of relocation diffusion. A number of colonies were established and settled by people from Great Britain."
				],
				"Correct": "The English language initially diffused to North America through the process of relocation diffusion. A number of colonies were established and settled by people from Great Britain."
			},
			{
				"Question": "Which of the following is an example of an ethnic religion? ",
				"Image": "",
				"Options": [
					"Islam ",
					"Mormonism",
					"Buddhism",
					"Roman Catholicism ",
					"Judaism "
				],
				"Correct": "Judaism "
			},
			{
				"Question": "A refugee enters the European Union in Italy and is temporarily housed in Germany. He is then granted asylum and is permanently settled in Sweden. Which of the following describes this type of migration that is facilitated by the European Union’s open border policies?",
				"Image": "",
				"Options": [
					"Chain migration within the refugee’s family and social network",
					"Guest worker migration based upon the free movement of labor",
					"As an internally displaced person within a single state",
					"As a rural-to-urban migrant seeking employment opportunities",
					"Step migration across member states to a final destination"
				],
				"Correct": "Step migration across member states to a final destination"
			},
			{
				"Question": "Which of the following is most accurate with regard to food preferences and taboos?",
				"Image": "",
				"Options": [
					"Food preferences are stronger than taboos as seen by the high consumption of beef on the Deccan Plateau.",
					"Food preferences and taboos have little influence on the diet in Arabia and Southeast Asia.",
					"Some foods are avoided for religious or cultural reasons even at the expense of a balanced diet.",
					"Food preferences and taboos show little variability between cultures. ",
					"Low hog production in China demonstrates an avoidance of pork by the Chinese."
				],
				"Correct": "Some foods are avoided for religious or cultural reasons even at the expense of a balanced diet."
			},
			{
				"Question": "Which of the following correctly lists the four major ancient culture hearths? ",
				"Image": "",
				"Options": [
					"Central Asia, Ethiopia, Indonesia, Mesopotamia",
					"Central Asia, India, Nile Valley, Southern Europe",
					"Ethiopia, Ghana, Machu Picchu, Mongolia ",
					"Egypt, Mekong Valley, Middle East, Western Africa",
					"Indus Valley, Mesopotamia, Nile Valley, North China"
				],
				"Correct": "Indus Valley, Mesopotamia, Nile Valley, North China"
			},
			{
				"Question": "The sign shown in the image includes an Internet address for the county government. Explain how the sign illustrates the cultural tensions between traditional languages and English.",
				"Image": "2_16_17.png",
				"Options": [
					"English is used for business and commerce on the Internet, while traditional languages such as Gaelic can only be heard in poems and music recordings but not written on the Internet.",
					"The Internet is produced only in English; as a result, many traditional languages disappear due to the dominance of English-language communication.",
					"Many countries ban the use of English-language Internet sites in an effort to resist the forces of globalization and protect their traditional languages.",
					"English is being used less outside of the United Kingdom. Speaking a traditional language as a first language has become the norm in former British colonies.",
					"The Internet spreads the use of English as a global lingua franca, but the Internet is also a place where traditional languages can be communicated and thrive."
				],
				"Correct": "The Internet spreads the use of English as a global lingua franca, but the Internet is also a place where traditional languages can be communicated and thrive."
			},
			{
				"Question": "The photograph shows a road sign in the Republic of Ireland. Which of the following best describes the sign's significance within the cultural landscape?",
				"Image": "2_16_17.png",
				"Options": [
					"The sign indicates that County Cork is a linguistic region of the Republic of Ireland.",
					"The sign delineates an international political border between the Republic of Ireland and Northern Ireland.",
					"The sign promotes the use of a single language in the region.",
					"The sign represents a uniform cultural identity within the region.",
					"The sign promotes the use of traditional language among citizens of the Republic of Ireland."
				],
				"Correct": "The sign promotes the use of traditional language among citizens of the Republic of Ireland."
			},
			{
				"Question": "According to the figure above, which of the following choices best describes the changes in interaction as distance increases?",
				"Image": "2_18.png",
				"Options": [
					"It remains unchanged.",
					"It increases at first and then decreases.",
					"It increases.",
					"It changes randomly.",
					"It decreases. "
				],
				"Correct": "It decreases. "
			},
			{
				"Question": "Which of the following scenarios best exemplifies the concept of hierarchical diffusion?",
				"Image": "",
				"Options": [
					"The practice of selling pizza by the slice in America, whereas pizzas in Italy were traditionally sold as whole pies",
					"The addition of hands-free driving features to cars manufactured by companies headquartered throughout the world",
					"The migration of asylum seekers from Syria to Europe",
					"The increasing popularity of Korean pop music around the world because of social media",
					"The increasing sales of clothing brands endorsed by professional athletes to customers in Europe"
				],
				"Correct": "The increasing sales of clothing brands endorsed by professional athletes to customers in Europe"
			},
			{
				"Question": "A world map of hog production per capita would reveal the lowest values in which of the following regions?",
				"Image": "",
				"Options": [
					"The United States Midwest",
					"Southeast Asia",
					"Western Europe",
					"China",
					"The Middle East"
				],
				"Correct": "The Middle East"
			},
			{
				"Question": "Cities in India have a competitive advantage over cities in China as locations for international consumer services, such as call centersand bill processing. This advantage has its origins in which of the following?",
				"Image": "",
				"Options": [
					"Low levels of primary-level education in China ",
					"The Indian government’s status as a neutral state in global political affairs ",
					"Large amounts of mineral resources found in China used to manufacture goods for export ",
					"Chinese emigration to Southeast Asia in the 1800s and 1900s ",
					"The English language legacy of British colonialism in India "
				],
				"Correct": "The English language legacy of British colonialism in India "
			},
			{
				"Question": "Which of the following best explains the Internet’s homogenizing effect on global language patterns?",
				"Image": "",
				"Options": [
					"Social media applications commonly support dozens of different languages.",
					"Many governments censor citizens’ Internet access.",
					"An increasing number of Internet users communicate exclusively through emojis.",
					"The Internet accelerates communication so that people from different cultures can interact quickly and easily.",
					"The English language is widely used on the Internet."
				],
				"Correct": "The English language is widely used on the Internet."
			},
			{
				"Question": "The world’s three major monotheistic religions originated in which of the following regions? ",
				"Image": "",
				"Options": [
					"East Asia ",
					"Eastern Europe ",
					"Western Europe ",
					"Africa",
					"Southwest Asia "
				],
				"Correct": "Southwest Asia "
			},
			{
				"Question": "Which of the following best explains the practice of placing indigenous children in boarding schools in the late nineteenth and early twentieth centuries?",
				"Image": "",
				"Options": [
					"The schools were intended to promote multiculturalism by introducing European culture to indigenous youth.",
					"Many schools appropriated indigenous culture by using tribal names for sports teams.",
					"The schools represented a traditional cultural trait of many indigenous societies.",
					"The schools were intended to blend indigenous and European cultures through syncretism.",
					"The schools were intended to diffuse Christianity and assimilate indigenous youth into European culture."
				],
				"Correct": "The schools were intended to diffuse Christianity and assimilate indigenous youth into European culture."
			},
			{
				"Question": "How does the map illustrate global diffusion of the French language from its cultural hearth in Paris?",
				"Image": "2_25.png",
				"Options": [
					"The map shows how French-language movies, music, and literature dominate global entertainment media.",
					"The map shows how France was an ancient-culture hearth from which the French language spread through expansion diffusion.",
					"The map shows how French civil servants established schools in many parts of the French colonial empire.",
					"The map shows how people’s love of French food has facilitated the spread of the French language to many parts of the world.",
					"The map shows how in many areas of the former French empire the language persists despite the independence of former colonies."
				],
				"Correct": "The map shows how in many areas of the former French empire the language persists despite the independence of former colonies."
			},
			{
				"Question": "Which of the following is NOT a characteristic of Hinduism?",
				"Image": "",
				"Options": [
					"It uses human and animal images in its sacred spaces.",
					"Pilgrims bathe in holy rivers.",
					"Religious functions most likely take place at home within the family.",
					"Sacred places are established by tradition.",
					"It is a universalizing religion. "
				],
				"Correct": "It is a universalizing religion. "
			},
			{
				"Question": "Which of the following religions is predominant in the states of Wisconsin, Minnesota, and North Dakota? ",
				"Image": "",
				"Options": [
					"Catholic",
					"Mormon",
					"Baptist",
					"Methodist",
					"Lutheran"
				],
				"Correct": "Lutheran"
			},
			{
				"Question": "Which of the following religions is appropriately matched with its region of origin?",
				"Image": "",
				"Options": [
					"Islam . . Egypt ",
					"Judaism . . Spain ",
					"Hinduism . . China ",
					"Christianity . . Germany",
					"Buddhism . . India "
				],
				"Correct": "Buddhism . . India "
			},
			{
				"Question": "The image shows a religious structure in Mexico City. Which of the following conclusions can be drawn based on the image?",
				"Image": "2_29.png",
				"Options": [
					"Social class divisions determined by the Spanish aristocracy are evident in Latin American cities.",
					"Socialist planning resulted in segregation of Mexico City.",
					"Gentrification of the central market area of an urbanized zone led to an increase economic development.",
					"Mass transportation systems were designed to alleviate traffic congestion.",
					"Spanish colonialism influenced architecture of the cultural landscape."
				],
				"Correct": "Spanish colonialism influenced architecture of the cultural landscape."
			},
			{
				"Question": "Which of the following language-location pairs best exemplifies the process of relocation diffusion of language in the twentieth century?",
				"Image": "",
				"Options": [
					"English in India",
					"Mandarin in China",
					"French in Canada",
					"Russian in Brazil",
					"Hmong in the United States"
				],
				"Correct": "Hmong in the United States"
			},
			{
				"Question": "In which of the following countries has the diffusion of Christianity met the most resistance?",
				"Image": "",
				"Options": [
					"Brazil",
					"Italy",
					"Mexico",
					"South Africa",
					"China"
				],
				"Correct": "China"
			},
			{
				"Question": "Which of the following is a term used in the study of place names?",
				"Image": "",
				"Options": [
					"Isonyms",
					"Phenonyms",
					"Acronyms ",
					"Loconyms",
					"Toponyms"
				],
				"Correct": "Toponyms"
			},
			{
				"Question": "The Gullah language is spoken in African-American communities of the coastal southeastern United States, particularly in South Carolina, Georgia, and northeastern Florida. It is a combination of Elizabethan English and African dialects. One can describe Gullah as a",
				"Image": "",
				"Options": [
					"lingua franca ",
					"Sino-Tibetan dialect ",
					"language family ",
					"linguistic branch of the Niger-Congo family",
					"creolized language "
				],
				"Correct": "creolized language "
			},
			{
				"Question": "The Indo-European language family includes the major languages of Europe and those dominant in all the following regions EXCEPT ",
				"Image": "",
				"Options": [
					"Russia ",
					"Northern India ",
					"Iran ",
					"Eastern and Southern Australia ",
					"Central Asia"
				],
				"Correct": "Central Asia"
			},
			{
				"Question": "The spread of the use of chopsticks into Southeast Asian countries with the influx of Chinese immigrants is an example of which of the following concepts?",
				"Image": "",
				"Options": [
					"Stimulus diffusion ",
					"Hierarchical diffusion ",
					"Assimilation",
					"Acculturation ",
					"Relocation diffusion"
				],
				"Correct": "Relocation diffusion"
			},
			{
				"Question": "Toponyms in southern California reflect which of the following?",
				"Image": "",
				"Options": [
					"Growing influence of globalization ",
					"Importance of time-space convergence ",
					"Significance of locational theory ",
					"Role of popular culture in American society",
					"Cultural heritage of the settlers "
				],
				"Correct": "Cultural heritage of the settlers "
			},
			{
				"Question": "Which of the following best accounts for the universal appeal of blue jeans? ",
				"Image": "",
				"Options": [
					"Adoption of unique folk culture ",
					"Impact of high income on clothing habits ",
					"Lack of barriers in communist countries ",
					"Need for durable clothing ",
					"Diffusion of popular culture"
				],
				"Correct": "Diffusion of popular culture"
			},
			{
				"Question": "Hinduism and Buddhism have their origins in South Asia. Much of Hinduism’s population is concentrated in South Asia, whereas much of Buddhism’s population has diffused to other parts of Asia. Which of the following best explains this difference in the cultural diffusion of Hinduism and Buddhism?",
				"Image": "2_38.png",
				"Options": [
					"Hinduism is a polytheistic religion concentrated in the region near its cultural hearth, and Buddhism is a monotheistic religion that has spread to regions where the religion has been adopted.",
					"Hinduism is a monotheistic religion concentrated in the region near its cultural hearth, and Buddhism is a polytheistic religion that has spread to regions where the religion has been adopted.",
					"Hinduism is a polytheistic religion concentrated in the region near its cultural hearth, and Buddhism is an ethnic religion that has spread to regions where the religion has been adopted.",
					"Hinduism is a universalizing religion concentrated in the region near its cultural hearth, and Buddhism is an ethnic religion that has spread to regions where the religion has been adopted.",
					"Hinduism is an ethnic religion concentrated in the region near its cultural hearth, and Buddhism is a universalizing religion that has spread to regions where the religion has been adopted."
				],
				"Correct": "Hinduism is an ethnic religion concentrated in the region near its cultural hearth, and Buddhism is a universalizing religion that has spread to regions where the religion has been adopted."
			},
			{
				"Question": "The diffusion pattern of Walmart stores, which have spread from small towns to large cities throughout the United States, is an example of",
				"Image": "",
				"Options": [
					"relocation diffusion ",
					"contagious diffusion ",
					"stimulus diffusion ",
					"distance decay ",
					"reverse hierarchical diffusion"
				],
				"Correct": "reverse hierarchical diffusion"
			}
		],
		[ // Unit 4
			{
				"Question": "Based on the map, which of the following can be identified as a true statement about Northern Ireland?",
				"Image": "3_0.png",
				"Options": [
					"It is united with the rest of the island to form a sovereign nation-state.",
					"It forms its own sovereign nation-state predominately made up of the Irish ethnic group.",
					"It is a frontier that is not formally part of a state, but the United Kingdom claims the area.",
					"It is a stateless nation, as the entire island of Ireland is under the control of the United Kingdom.",
					"It is physically separate from the rest of the United Kingdom, a multinational state."
				],
				"Correct": "It is physically separate from the rest of the United Kingdom, a multinational state."
			},
			{
				"Question": "The Philippines and Malaysia lay claim to resources under and around the Spratly Islands. Which of the following best explains how the United Nations Convention on the Law of the Sea (UNCLOS) influences claims to the islands by both countries?",
				"Image": "3_1.png",
				"Options": [
					"The Philippines and Malaysia both claim the islands lie within their territorial seas up to 12 nautical miles from their coasts.",
					"The claims to the islands by the Philippines and Malaysia overlap due to the median line principle.",
					"The Philippines and Malaysia both claim ownership to the resources based on a historic possession of the islands.",
					"The Philippines and Malaysia both claim the islands lie within their contiguous zones between 12 and 24 nautical miles from their coasts.",
					"The claims to the Spratly Islands by both the Philippines and Malaysia overlap due to exclusive economic zones up to 200 nautical miles from their coasts."
				],
				"Correct": "The claims to the Spratly Islands by both the Philippines and Malaysia overlap due to exclusive economic zones up to 200 nautical miles from their coasts."
			},
			{
				"Question": "Which of the following describes a federal form of governance?",
				"Image": "",
				"Options": [
					"A centralized government creates a barrier to local participation in the political process.",
					"Autonomous regions act outside the authority of a central government.",
					"Federal states encourage devolutionary movements and break apart quickly.",
					"Laws are enacted in a single language to promote cultural unity.",
					"Multiple substates have local control and are unified to pursue common goals at the national level."
				],
				"Correct": "Multiple substates have local control and are unified to pursue common goals at the national level."
			},
			{
				"Question": "The former international border between East Germany and West Germany is best described as",
				"Image": "",
				"Options": [
					"an open border",
					"a demilitarized zone",
					"an antecedent boundary",
					"a geometric boundary",
					"a relict boundary"
				],
				"Correct": "a relict boundary"
			},
			{
				"Question": "The provisions of the United Nations Conference on the Law of the Sea give coastal countries navigational and economic sovereignty over which of the following zones?",
				"Image": "",
				"Options": [
					"Export processing zone (EPZ) ",
					"200-nautical-mile exclusive economic zone ",
					"Empowerment zone ",
					"Continental shelf ",
					"Twelve-nautical-mile territorial sea zone "
				],
				"Correct": "Twelve-nautical-mile territorial sea zone "
			},
			{
				"Question": "At some point in their recent history, all of the following countries became divided into two political entities as a result of cultural or ideological conflict EXCEPT",
				"Image": "",
				"Options": [
					"Korea",
					"Vietnam",
					"Germany",
					"Ireland",
					"Japan"
				],
				"Correct": "Japan"
			},
			{
				"Question": "What do the maps indicate regarding the political geography of the Aegean Sea?",
				"Image": "3_6_7.png",
				"Options": [
					"Turkey controls most of the islands in the Aegean Sea.",
					"Turkey and Greece share control of most of the islands in the Aegean Sea.",
					"Turkey controls all access from the Dardanelles to the Mediterranean Sea.",
					"Greece controls all access from the Aegean Sea to the Black Sea.",
					"Greece controls most of the islands in the Aegean Sea."
				],
				"Correct": "Greece controls most of the islands in the Aegean Sea."
			},
			{
				"Question": "If Greece and Turkey adopted the UNCLOS system and expanded their territorial seas to 12 nautical miles, as shown in Map 2, which of the following would be true for a Turkish-owned oil tanker sailing into Greek territorial waters?",
				"Image": "3_6_7.png",
				"Options": [
					"The ship and its cargo would be confiscated for violating a United Nations treaty.",
					"The ship could be sunk by the Greek Navy for entering Greece’s territorial waters.",
					"The ship would be charged tolls for sailing through Greek canals and internal waterways.",
					"The ship would be ordered by a Greek naval blockade to turn away as it is considered a threat.",
					"The ship could be stopped by Greece’s Coast Guard for safety and environmental inspections."
				],
				"Correct": "The ship could be stopped by Greece’s Coast Guard for safety and environmental inspections."
			},
			{
				"Question": "Which of the following terms identifies the type of regions shown in the dark gray-shaded areas on the map?",
				"Image": "3_8.png",
				"Options": [
					"Functional regions",
					"Urban regions",
					"Physical regions",
					"Vernacular regions",
					"Semiautonomous regions"
				],
				"Correct": "Semiautonomous regions"
			},
			{
				"Question": "Which of the following describes typical characteristics of federal states?",
				"Image": "",
				"Options": [
					"A centralized government and strong centripetal forces",
					"A fragmented land area and a single ethnic group",
					"A small land area and high population density",
					"A compact shape and a primate city",
					"A large land area and multiple ethnic groups"
				],
				"Correct": "A large land area and multiple ethnic groups"
			},
			{
				"Question": "Which of the following compares the impact of increased global communications technology to the impact of state-controlled media?",
				"Image": "",
				"Options": [
					"Both global communication technology and state-controlled media act as centripetal forces that present a common message, which is utilized by the government to bind citizens together.",
					"Neither global communications technology nor state-controlled media have any impact on the viability of a state when it comes to centripetal or centrifugal forces.",
					"Global communications technology is utilized as a centripetal force to present a common message, whereas state-controlled media may bring in new ideas that act as centrifugal forces.",
					"Both global communications technology and state-controlled media act as centrifugal forces because they give citizens access to concepts or ideas that may inspire dissent.",
					"Global communications technology may bring in new ideas that act as centrifugal forces, whereas state-controlled media is utilized as a centripetal force to present a common message."
				],
				"Correct": "Global communications technology may bring in new ideas that act as centrifugal forces, whereas state-controlled media is utilized as a centripetal force to present a common message."
			},
			{
				"Question": "Based on the map, which of the following best explains the implications of physical geography as the Kurds continue to struggle for an independent state in their ethnic homeland?",
				"Image": "3_11.png",
				"Options": [
					"Israel, Turkey, and Russia have voiced their support for an independent Kurdistan in areas with a majority Kurdish population, showing potential validation for Kurdistan.",
					"In September 2017 a public referendum was carried out that demonstrated that a majority of Kurds overwhelmingly support independence.",
					"Even in areas with a Kurdish minority population, Kurdish people have their own unique culture and identity separately from the states in which their nation is located.",
					"Unstable oil prices have created economic problems both in parts of the region with a Kurdish majority population and in parts with a Kurdish minority, leaving the Kurdistan Regional Government weakened and struggling to pay off debt. ",
					"Most areas with a Kurdish majority population are landlocked and therefore dependent on good relationships with their neighbors in order to access trade and prosper economically."
				],
				"Correct": "Most areas with a Kurdish majority population are landlocked and therefore dependent on good relationships with their neighbors in order to access trade and prosper economically."
			},
			{
				"Question": "Which of the following terms best describes the political entity of the Republic of Ireland?",
				"Image": "",
				"Options": [
					"Stateless nation",
					"Multinational state",
					"Autonomous region",
					"Dependent territory",
					"Nation-state"
				],
				"Correct": "Nation-state"
			},
			{
				"Question": "Which of the following is the correct organizational scale for the Economic Community of West African States (ECOWAS)?",
				"Image": "3_13.png",
				"Options": [
					"Global",
					"National",
					"State",
					"Local",
					"Supranational"
				],
				"Correct": "Supranational"
			},
			{
				"Question": "Which of the following best explains the effect of French language and culture on the federal state of Canada’s political power?",
				"Image": "",
				"Options": [
					"French language and culture act as a centripetal force throughout Canada as the majority of Canadians have English as a first language and the government uses both languages in official communications.",
					"As an expression of political power, the Canadian federal government restricts French language and culture from media and government proceedings.",
					"French language and culture act as centripetal forces and unify all of Canada’s people and government into a single nation.",
					"Because French Canadians are spread across the country’s provinces, the Canadian government implemented federal laws to create a common culture and language for all Canadians.",
					"French language and culture act as a centrifugal force in Canada because independence movements in Quebec have attempted to secede the province from Canada."
				],
				"Correct": "French language and culture act as a centrifugal force in Canada because independence movements in Quebec have attempted to secede the province from Canada."
			},
			{
				"Question": "Based on the data in the table, which of the following is a possible impact of ethnic and religious diversity in Iraq?",
				"Image": "3_15.png",
				"Options": [
					"Ethnicity and religion act as centripetal forces in the country by creating a common Iraqi identity among the population.",
					"Ethnicity and religion facilitate democratization in the country by motivating participation in elections.",
					"Ethnicity and religion promote economic development in the country by generating national pride in the country’s accomplishments.",
					"Ethnicity and religion increase cultural cohesion in the country by promoting shared political ideology.",
					"Ethnicity and religion lead to devolutionary pressures in the country by politically dividing regions."
				],
				"Correct": "Ethnicity and religion lead to devolutionary pressures in the country by politically dividing regions."
			},
			{
				"Question": "Nunavut in Canada is a semiautonomous region that allows an indigenous group within Canada to maintain their own culture and local government, reducing the threat of fragmentation. Which of the following best compares the impact of the creation of Nunavut at both local and national scales?",
				"Image": "",
				"Options": [
					"It created centrifugal forces at both local and national scales.",
					"It created centrifugal forces at the local scale but not the national scale.",
					"It created centrifugal forces locally and centripetal forces nationally.",
					"It created centripetal forces at the national scale but not the local scale.",
					"It created centripetal forces at both local and national scales."
				],
				"Correct": "It created centripetal forces at both local and national scales."
			},
			{
				"Question": "Which of the following can be an example of a centrifugal political force?",
				"Image": "",
				"Options": [
					"Homogeneous ethnic population ",
					"Strong central government ",
					"Shift to tertiary economy ",
					"Concentrated ownership of media ",
					"Variation of language within the country "
				],
				"Correct": "Variation of language within the country "
			},
			{
				"Question": "Crossing which of the following borders requires few, if any, formalities and thus encourages the free flow of people and products?",
				"Image": "",
				"Options": [
					"India-Pakistan ",
					"United States-Canada ",
					"Romania-Ukraine ",
					"North Korea-South Korea",
					"Netherlands-Belgium "
				],
				"Correct": "Netherlands-Belgium "
			},
			{
				"Question": "A good example of a centripetal force in political geography is ",
				"Image": "",
				"Options": [
					"rugged topography ",
					"rugged topography ",
					"religious diversity and conflict ",
					"a poorly developed road network ",
					"a primate city "
				],
				"Correct": "a primate city "
			},
			{
				"Question": "Historically, Iceland had only one period of human migration. The country has never been invaded and possesses a common culture and language. As a result, Iceland is regarded as a good example of which of the following concepts?",
				"Image": "",
				"Options": [
					"Absolute monarchy ",
					"Theocracy",
					"Constitutional monarchy ",
					"Exclave",
					"Nation-state "
				],
				"Correct": "Nation-state "
			},
			{
				"Question": "Which of the following explains why Korea and Vietnam were viewed as shatterbelts during the Cold War?",
				"Image": "",
				"Options": [
					"Korea and Vietnam were politically controlled by regional powers.",
					"Korea and Vietnam kept two political adversaries geographically separated.",
					"Korea and Vietnam fragmented into new states due to internal tensions.",
					"Korea and Vietnam tried to control land and sea areas around their states.",
					"Korea and Vietnam experienced conflict due to a dispute between global powers."
				],
				"Correct": "Korea and Vietnam experienced conflict due to a dispute between global powers."
			},
			{
				"Question": "What is the source of dispute between Canada, Russia, Norway, Denmark, and the United States over political boundaries in the Arctic Ocean and ownership of the North Pole?",
				"Image": "",
				"Options": [
					"They all claim to have had indigenous residents from their countries living on the polar ice pack at sometime in the past.",
					"Each claims the first explorer to reach the North Pole came from their country and planted their flag, signifying ownership.",
					"The northern polar region has the same international treaties that govern land use and resources in Antarctica.",
					"The North Pole is the focal point of all the intersecting boundaries on the map. However, it floats on a constantly moving ice sheet.",
					"They all claim the right to extract natural resources out to the edge of the continental shelf, beyond their exclusive economic zones."
				],
				"Correct": "They all claim the right to extract natural resources out to the edge of the continental shelf, beyond their exclusive economic zones."
			},
			{
				"Question": "Which of the following is an accurate comparison of devolutionary movements in Spain and Canada?",
				"Image": "",
				"Options": [
					"There is an economic aspect to the Quebecois independence movement, while the Catalans focus mainly on culture.",
					"Both independence movements utilize cultural distinctiveness as their only reason for seeking independence.",
					"Both independence movements focus on religious differences with the nations they currently belong to.",
					"Both independence movements utilize economic power as their main reason for seeking independence.",
					"There is an economic aspect to the Catalan independence movement, while the Quebecois focus mainly on cultural differences."
				],
				"Correct": "There is an economic aspect to the Catalan independence movement, while the Quebecois focus mainly on cultural differences."
			},
			{
				"Question": "Which of the following is a likely outcome of gerrymandering?",
				"Image": "",
				"Options": [
					"Splitting areas of majority group voters across a number of legislative representatives' districts",
					"Disrupting electronic polling machines or the data networks run by elections officials",
					"Placing a legislative representative’s districts in a row pattern while drawing a new electoral map",
					"Supporting political party candidates with campaign funds intended to be used in particular geographic areas",
					"Packing areas of minority group voters into a single legislative representative’s district"
				],
				"Correct": "Packing areas of minority group voters into a single legislative representative’s district"
			},
			{
				"Question": "Compare the centralized power of the Soviet Union with the contemporary Russian Federation, in terms of the control of territory. Which of the following statements does the information in the map best support?",
				"Image": "3_25.png",
				"Options": [
					"Russia is a global power with concentrated power in East Asia.",
					"Russia is a multistate nation made up of numerous sovereign independent entities.",
					"Russia’s autonomous regions illustrate a strategy to counter the difficulty in governing such a large area from a single centralized location.",
					"Russia used to control fifteen additional republics that regained their independence in 1990.",
					"Russia is an ethnically diverse region with many subnational units."
				],
				"Correct": "Russia is an ethnically diverse region with many subnational units."
			},
			{
				"Question": "The shape of North Carolina’s Twelfth Congressional District, shown above, is most likely the result of",
				"Image": "3_26.png",
				"Options": [
					"watershed boundaries ",
					"county boundaries ",
					"decentralization",
					"amalgamation",
					"gerrymandering"
				],
				"Correct": "gerrymandering"
			},
			{
				"Question": "Which of the following best describes the role of the federal state in a country’s political organization?",
				"Image": "",
				"Options": [
					"To act as a system of defense that protects subnational states from threats emerging outside of the country’s international borders",
					"To act as a single centralized economy for a collection of subnational states allied for a common purpose",
					"To act as a strong centralized administration that eliminates the need for self-governing subnational or local governments",
					"To act as a virtual public-service provider that eliminates the need for self-governing subnational or local governments",
					"To act as an overarching government for a collection of subnational states allied for a common purpose"
				],
				"Correct": "To act as an overarching government for a collection of subnational states allied for a common purpose"
			},
			{
				"Question": "The Canadian government created the new territory of Nunavut in order to ",
				"Image": "",
				"Options": [
					"re-create the pre-1912 boundary of Quebec ",
					"facilitate the exploration of mineral resources in the Northwest Territories ",
					"grant autonomy to the Cree and Mohawk people living in eastern Canada ",
					"guarantee Canadian fishing rights in the Atlantic Ocean ",
					"recognize the territorial rights of indigenous people in the area "
				],
				"Correct": "recognize the territorial rights of indigenous people in the area "
			},
			{
				"Question": "Which of the following best explains the governance of the shaded areas shown on the map?",
				"Image": "3_29.png",
				"Options": [
					"These areas are established as nation-states for indigenous peoples at the local scale.",
					"These areas show territory occupied by indigenous peoples as stateless nations at a local scale.",
					"These areas show territory controlled by indigenous peoples as a single multistate nation.",
					"These areas are lands of indigenous peoples that are sovereign independent states at an international scale.",
					"These areas show where indigenous peoples have a limited amount of self-government at a national scale."
				],
				"Correct": "These areas show where indigenous peoples have a limited amount of self-government at a national scale."
			},
			{
				"Question": "Boundaries based on the median-line principle  are generally associated with ",
				"Image": "",
				"Options": [
					"major highways ",
					"converging ethnic territories",
					"unsettled frontier zones ",
					"mountain ridges ",
					"bodies of water "
				],
				"Correct": "bodies of water "
			},
			{
				"Question": "The boundaries of congressional districts of the United States are",
				"Image": "",
				"Options": [
					"set according to a process developed by the writers of the United States Constitution ",
					"redrawn whenever a member of Congress feels his or her constituency has changed ",
					"redrawn after every presidential election ",
					"drawn to cross over state boundaries",
					"redrawn every ten years "
				],
				"Correct": "redrawn every ten years "
			},
			{
				"Question": "The Berlin Conference established the borders of North African countries including Egypt, Libya, and Sudan. The landscape of these countries influenced the types of boundaries imposed by the European colonial powers. Which of the following boundary types best explains the influence of landscape on the political borders of the North African region?",
				"Image": "",
				"Options": [
					"Antecedent, based on tribal cultural boundaries that existed before European colonization",
					"Subsequent, with smaller buffer states placed between larger states to prevent political conflicts",
					"Consequent, accounting for local differences in language and religion during European colonization",
					"Natural, with irregular lines, accounting for regional physical features such as mountains or water bodies",
					"Geometric, with straight lines, disregarding physical features or tribal cultural differences of the areas"
				],
				"Correct": "Geometric, with straight lines, disregarding physical features or tribal cultural differences of the areas"
			},
			{
				"Question": "Which of the following correctly lists the usual hierarchy of political-administrative units in order from the largest to the smallest? ",
				"Image": "",
				"Options": [
					"Empire, county, province, nation-state ",
					"Province, empire, nation-state, county ",
					"County, nation-state, province, empire ",
					"Empire, nation-state, county, province ",
					"Empire, nation-state, province, county "
				],
				"Correct": "Empire, nation-state, province, county "
			},
			{
				"Question": "Which of the following describes a unitary form of governance?",
				"Image": "",
				"Options": [
					"Stronger states and transnational corporations indirectly control weaker states.",
					"A collection of independent communities shares government services.",
					"A state’s more powerful central government shares power with its regions.",
					"A sense of unity, often derived from ethnic or cultural traits, binds a country together.",
					"A state has a strong central government with no power given to regions."
				],
				"Correct": "A state has a strong central government with no power given to regions."
			},
			{
				"Question": "Which of the following describes an example of a consequent boundary?",
				"Image": "",
				"Options": [
					"The Berlin Wall between East and West Germany no longer exists, but the location is still evident.",
					"European powers divided Africa at the Berlin Conference and drew boundaries across the continent.",
					"The United States–Canadian boundary was set at the 49th parallel by a treaty before the area was settled.",
					"The Andes Mountains are used as a political boundary to divide Chile and Argentina.",
					"Canada created the province of Nunavut to provide greater autonomy for the First Nations."
				],
				"Correct": "Canada created the province of Nunavut to provide greater autonomy for the First Nations."
			},
			{
				"Question": "Which of the following best explains why the region of Catalonia in Spain could be a viable country?",
				"Image": "3_36.png",
				"Options": [
					"Catalonia is linguistically distinct compared to other regions in Spain.",
					"Catalonia's population is ethnically distinct compared to other regions in Spain.",
					"Catalonia has a large population compared to other regions in Spain.",
					"Catalonia has a major city, Barcelona, which has a notoriety comparable to that of the Spanish capital, Madrid.",
					"Catalonia is well developed economically compared to other regions in Spain."
				],
				"Correct": "Catalonia is well developed economically compared to other regions in Spain."
			},
			{
				"Question": "Some territories within the Russian Federation are characterized by concentrated populations of ethnic groups and these areas function as autonomous republics. Which of the following best explains the political relationship between the autonomous republics and the central government of Russia?",
				"Image": "",
				"Options": [
					"The central government of Russia exerts complete control over the autonomous republics to counteract devolutionary pressures.",
					"Russia is a multistate nation characterized by contested regional boundaries.",
					"The autonomous republics are able to function independently from the central government because of an abundance of natural resources",
					"Russia is a unitary state characterized by many ethnic groups united within a single country.",
					"The autonomous republics provide ethnic groups with some political control over their homelands while preserving Russia’s territorial integrity."
				],
				"Correct": "The autonomous republics provide ethnic groups with some political control over their homelands while preserving Russia’s territorial integrity."
			},
			{
				"Question": "Which of the following correctly compares the impact of centripetal forces at the local scale with the impact of centripetal forces at the national scale?",
				"Image": "",
				"Options": [
					"Centripetal forces may cause uneven development at the local scale but not at the national scale.",
					"Centripetal forces may lead to stateless nations at the national scale but not the local scale.",
					"Centripetal forces may result in nationalism at the local scale but not at the national scale.",
					"Centripetal forces at both the local scale and the national scale may lead to failed states.",
					"Centripetal forces at both the local scale and the national scale may lead to increased cultural cohesion."
				],
				"Correct": "Centripetal forces at both the local scale and the national scale may lead to increased cultural cohesion."
			},
			{
				"Question": "Which of the following is the name for political redistricting that produces unusually shaped districts to create a political advantage? ",
				"Image": "",
				"Options": [
					"Redlining ",
					"Zoning",
					"Politicization",
					"Gentrification",
					"Gerrymandering"
				],
				"Correct": "Gerrymandering"
			}
		],
		[ // Unit 5
			{
				"Question": "In 2017 the Ivory Coast exported $5.6 billion worth of cocoa beans and cocoa-derived products, such as cocoa butter. This represented 55 percent of the country’s exports and was worth four times the country’s combined gold and oil exports in that year. Which of the following best explains the international trade economy of the Ivory Coast?",
				"Image": "",
				"Options": [
					"High level of dependency on a single agricultural commodity that increases national economic development and increases foreign direct investment",
					"Low level of dependency on primary-sector production and resource processing that will increase the country’s level of development",
					"Low level of dependency on a single agricultural commodity that decreases national economic risks during times of global economic crisis",
					"Low level of dependency on a single agricultural commodity that increases national economic development and increases foreign direct investment",
					"High level of dependency on a single agricultural commodity that increases national economic risks during times of global economic crisis"
				],
				"Correct": "High level of dependency on a single agricultural commodity that increases national economic risks during times of global economic crisis"
			},
			{
				"Question": "Which of the following explains the diffusion and successful cultivation of many plants and animals in new regions of the world through the Columbian Exchange?",
				"Image": "",
				"Options": [
					"The plants and animals diffused only a short distance away from their point of domestication.",
					"Navigational technology allowed ships to travel more efficiently, enabling safe transport of plants and animals to new destinations.",
					"Diffusion of plants and animals filled the loss in many areas from a number of plant and animal extinctions.",
					"The plants and animals diffused to regions with variation in the climates between the hearth and the new region.",
					"The plants and animals diffused to a region with climate and geography similar to that of their point of domestication."
				],
				"Correct": "The plants and animals diffused to a region with climate and geography similar to that of their point of domestication."
			},
			{
				"Question": "Which of the following best explains why farmers would plant both strawberries and watermelons in the same field?",
				"Image": "",
				"Options": [
					"Limited farmland encourages intensive farming and monocropping to produce high yields.",
					"Unlimited farmland encourages intensive farming with intercropping to produce high yields.",
					"Unlimited farmland encourages extensive farming with intercropping to produce high yields.",
					"Limited farmland encourages extensive farming with monocropping to produce high yields.",
					"Limited farmland encourages intensive farming with intercropping to produce high yields."
				],
				"Correct": "Limited farmland encourages intensive farming with intercropping to produce high yields."
			},
			{
				"Question": "In less developed countries, pesticides are typically applied by hand, whereas pesticides are typically applied by tractors or aircraft in more developed countries. Which of the following best explains the risks associated with pesticide applications?",
				"Image": "",
				"Options": [
					"Crop dusters are at risk when applying pesticides with aircraft in more developed countries, whereas environmental pollution is a risk in less developed countries.",
					"Farm animals used to plow fields are at risk from pesticides in more developed countries, whereas environmental pollution is a risk is less developed countries.",
					"Crops are at risk in more developed countries, whereas environmental pollution is a risk in less developed countries.",
					"Contract harvesters are at risk in more developed countries, whereas environmental pollution is a risk in less developed countries.",
					"Farmers' health is at risk in less developed countries, whereas environmental pollution is a risk in more developed countries."
				],
				"Correct": "Farmers' health is at risk in less developed countries, whereas environmental pollution is a risk in more developed countries."
			},
			{
				"Question": "Traditional labor-intensive agriculture often involves which of the following?",
				"Image": "",
				"Options": [
					"Mechanical plowing ",
					"Hybrid seeds ",
					"Use of pesticides ",
					"High levels of debt",
					"Field terracing "
				],
				"Correct": "Field terracing "
			},
			{
				"Question": "Which of the following best explains the potential impact of rising global temperatures on agricultural regions?",
				"Image": "",
				"Options": [
					"Mediterranean agriculture will expand southward.",
					"Polar regions will dry out, making cultivation impossible.",
					"Nomadic herding will end as conditions become too harsh.",
					"Centers of market gardening will shift to the Arctic Circle.",
					"The wheat belt will shift northward."
				],
				"Correct": "The wheat belt will shift northward."
			},
			{
				"Question": "In which of the following world regions has the Green Revolution had the least impact on agriculture?",
				"Image": "",
				"Options": [
					"East Asia ",
					"South Asia ",
					"Southeast Asia ",
					"Central America ",
					"Sub-Saharan Africa"
				],
				"Correct": "Sub-Saharan Africa"
			},
			{
				"Question": "Between 1950 and 1990, wheat production in India in average pounds per acre more than tripled, which allowed India to meet its population’s need for food. Which of the following best explains this change?",
				"Image": "",
				"Options": [
					"The elimination of poverty in India’s rural regions",
					"The use of genetically modified seeds",
					"The increase in microloan programs that provide farmers with credit",
					"The use of large farm tractors and combine harvesters",
					"The use of improved plant hybrids and agricultural chemicals"
				],
				"Correct": "The use of improved plant hybrids and agricultural chemicals"
			},
			{
				"Question": "Which of the following best explains the reasons for the similarities and differences between the two land survey systems shown?",
				"Image": "4_8.png",
				"Options": [
					"Both systems set specific property boundaries for landholders. However, the metes-and-bounds system is more orderly and efficient.",
					"Both systems require geometric calculations to survey property lines. However, only properties surveyed with the metes-and-bounds system can be subdivided into smaller plots.",
					"Both systems access the Global Navigational Satellite System (GNSS) to set property lines. However, GNSS is accurate only for township-and-range systems.",
					"Both systems are used in the United States. However, the township-and-range survey system is used only in the eastern part of the United States.",
					"Both systems require geometric calculations to survey property lines. However, the township-and-range system uses simplified calculation to create a more ordered landscape."
				],
				"Correct": "Both systems require geometric calculations to survey property lines. However, the township-and-range system uses simplified calculation to create a more ordered landscape."
			},
			{
				"Question": "What kind of agriculture is primarily practiced in the dark-shaded areas on the map above?",
				"Image": "4_9.png",
				"Options": [
					"Shifting cultivation ",
					"Pastoral nomadism ",
					"Cattle ranching ",
					"Plantation",
					"Mediterranean"
				],
				"Correct": "Mediterranean"
			},
			{
				"Question": "The growth potential of alternative agricultural practices such as the growing of amaranth grain and the raising of deer, elk, emus, and buffalo  for meat is limited because ",
				"Image": "",
				"Options": [
					"the dietary laws in the United States are restrictive ",
					"the animals and grain are difficult to raise ",
					"it is impossible to domesticate new plants  and animals ",
					"the high protein content of these meats and grains is thought to be unhealthy ",
					"the growers have not established  an integrated commodity chain "
				],
				"Correct": "the growers have not established  an integrated commodity chain "
			},
			{
				"Question": "Which of the following explains an impact of globalized agricultural commodity chains on consumers as compared to producers?",
				"Image": "",
				"Options": [
					"The shift from subsistence farming to value-added agriculture by small farmers in developed countries causes a drop in profits for global agribusiness corporations.",
					"The imposition of government-imposed tariffs on specialty crops in order to protect domestic farmers causes a worldwide decrease in all farm products.",
					"Farmers in developing countries who are unable to gain access to global food markets to sell their goods protest, leading to global unrest.",
					"Agricultural production with a focus on monocropping cash crops creates more vulnerability in a country’s exports if consumer preferences shift to a different commodity.",
					"Drought and depletion of groundwater sources in developing countries cause a rise in global grain prices and associated higher costs for food."
				],
				"Correct": "Drought and depletion of groundwater sources in developing countries cause a rise in global grain prices and associated higher costs for food."
			},
			{
				"Question": "The two images show different agricultural methods. In the context of the Second Agricultural Revolution, which of the following trends is represented in these images?",
				"Image": "4_12.png",
				"Options": [
					"The introduction of machines during the Second Agricultural Revolution resulted in many farmers being pushed off their land, leading to famine and starvation in the countryside.",
					"Although new farm machines were developed during the Second Agricultural Revolution, many farmers continued to practice agriculture in traditional ways because of cultural taboos associated with the adoption of modern farming techniques.",
					"During the Second Agricultural Revolution, many farmers continued to use traditional farming techniques that were more suited to the tropical environments they lived in.",
					"The developments associated with the Second Agricultural Revolution were applicable only to farmers growing grain in temperate regions of the world.",
					"The mechanization of farming in the Second Agricultural Revolution resulted in more reliable crop harvests and healthier populations in areas where the mechanization was adopted."
				],
				"Correct": "The mechanization of farming in the Second Agricultural Revolution resulted in more reliable crop harvests and healthier populations in areas where the mechanization was adopted."
			},
			{
				"Question": "Compared to North American ranchers,  commercial ranchers in the Pampas of  Argentina, Uruguay, and southern Brazil  are more likely to ",
				"Image": "",
				"Options": [
					"lease their grazing land ",
					"rely on feedlots  ",
					"raise mostly sheep ",
					"use practices developed by indigenous people ",
					"raise livestock primarily for export "
				],
				"Correct": "raise livestock primarily for export "
			},
			{
				"Question": "Which of the following best explains the economic advantage of the type of farm-produced goods shown in the images?",
				"Image": "4_14.png",
				"Options": [
					"Compared to fresh produce, these packaged agricultural goods significantly increase the gross national income that is sourced from industrial production and bring financial wealth to farmers.",
					"Compared to factory-made dairy products and condiments, these preservative-free goods have a decreased shelf life, which increases the prices of the goods sold.",
					"Compared to name-brand goods, farm-made agricultural goods are much lower in cost and provide significant value to consumers.",
					"Compared to organic foods sold at specialty grocery stores, these goods are sold as natural foods and considered to be of equal value to consumers.",
					"Compared to plain milk or fresh fruit, these value-added agricultural goods significantly increase the price of the farm products sold and increase earnings for farmers."
				],
				"Correct": "Compared to plain milk or fresh fruit, these value-added agricultural goods significantly increase the price of the farm products sold and increase earnings for farmers."
			},
			{
				"Question": "Subsistence agriculture is always characterized by ",
				"Image": "",
				"Options": [
					"double-cropping of specific grains ",
					"extensive use of the land ",
					"production only for trade ",
					"irrigation and inorganic fertilization ",
					"production only for family consumption "
				],
				"Correct": "production only for family consumption "
			},
			{
				"Question": "Which of the following best explains the diffusion of plants and animals from their hearths of domestication?",
				"Image": "",
				"Options": [
					"Animals were domesticated before plants and diffused rapidly from their hearth of domestication through contagious diffusion because they were mobile and moved easily from place to place.",
					"Domesticated plants spread through wind-borne dispersal of seeds from their original hearth, expanding slowly until a vast region was covered with new plants.",
					"The diffusion of plants and animals was limited to areas close to each hearth of domestication because the newly developed plants and animals could not readily adapt to different soil types.",
					"The diffusion of plants and animals was dependent on nomadic traders who traveled between agricultural villages because early farmers were sedentary and did not travel to other areas.",
					"Both domesticated plants and animals spread across the globe through contagious diffusion in early years by farmers and traders, and later by relocation diffusion through European exploration and colonialism."
				],
				"Correct": "Both domesticated plants and animals spread across the globe through contagious diffusion in early years by farmers and traders, and later by relocation diffusion through European exploration and colonialism."
			},
			{
				"Question": "Based on the different types of land use shown in the image, which of the following best explains why soil salinization is a concern in the arid landscape shown?",
				"Image": "4_17.png",
				"Options": [
					"Forests are being cleared as land is repurposed for agricultural uses, which reduces biodiversity in the region.",
					"Land is being farmed so intensively that soil nutrients are degraded to the point that crops will not grow.",
					"Fields are left fallow after being farmed intensively so that nutrients in the soil may be replenished.",
					"Multiple crops are being planted in the same field, which increases the chances of pest damage.",
					"Irrigation increases the salt content of the soil, which disrupts the growth of crops and degrades soil fertility."
				],
				"Correct": "Irrigation increases the salt content of the soil, which disrupts the growth of crops and degrades soil fertility."
			},
			{
				"Question": "Labor-intensive intertillage is often practiced in ",
				"Image": "",
				"Options": [
					"the Canadian wheat belt ",
					"the Turkish highlands ",
					"the English countryside",
					"New Zealand",
					"Southeast Asia"
				],
				"Correct": "Southeast Asia"
			},
			{
				"Question": "Why have many family farms in North America been replaced by agribusiness farms since the 1980s?",
				"Image": "",
				"Options": [
					"A decrease in the consumption of meat has resulted in less demand for cattle, which are mainly raised on family farms.",
					"Little available land for pasture farming has resulted in more concentrated agribusiness operations.",
					"More interest in genetically modified foods has led to an increase in agribusiness farms, which have greater access to advanced technology.",
					"Water shortages in regions where family farms were once common have led to a rise in agribusinesses in regions with more favorable climates.",
					"Agribusiness farms have the resources to take advantage of economies of scale."
				],
				"Correct": "Agribusiness farms have the resources to take advantage of economies of scale."
			},
			{
				"Question": "Which of the following agricultural practices has the most significant long-term environmental impact in tropical regions?",
				"Image": "",
				"Options": [
					"Clearing small patches of land to pasture dairy cows, which decreases water pollution from runoff",
					"Building terraces on sloping land to grow rice, which destabilizes hillsides",
					"Burning small areas of forested land for subsistence farming, which increases biodiversity",
					"Moving livestock to higher pasture areas in the spring, which leads to soil degradation",
					"Burning extensive areas of forested land to create pasture, which decreases biodiversity"
				],
				"Correct": "Burning extensive areas of forested land to create pasture, which decreases biodiversity"
			},
			{
				"Question": "Which of the following best explains why the New England region, located in the northeastern United States, would specialize in market gardening agriculture rather than other types of agriculture, such as grain farming?",
				"Image": "",
				"Options": [
					"Wheat farming would require more machinery, which conflicts with the environmental standards of many states in New England.",
					"Market gardening products can be easily transported to the primary market of California without spoiling.",
					"Farmers can specialize in market gardening products because of the rocky soil found in many New England states.",
					"Market gardening zones allow farmers the flexibility to grow market gardening crops along with other grain crops.",
					"Several large cities on the East Coast provide a growing market and shorter distances for transporting market gardening products."
				],
				"Correct": "Several large cities on the East Coast provide a growing market and shorter distances for transporting market gardening products."
			},
			{
				"Question": "The chickens shown in the image are an example of value-added agriculture used by small family-run farms to compete with large agribusiness poultry and egg farms. Which of the following types of value-added products best describes the kind of agriculture shown in the image?",
				"Image": "4_22.png",
				"Options": [
					"Local-food movement",
					"Nongenetically modified",
					"Fair-trade",
					"Community-supported",
					"Free-range"
				],
				"Correct": "Free-range"
			},
			{
				"Question": "Sheep production in New Zealand and poultry production in Arkansas produce food animals for human consumption. Which of the following best describes the differences in the agricultural practices and land use for these products?",
				"Image": "",
				"Options": [
					"Sheep production is an example of intensive agriculture requiring large amounts of fertilizer, whereas poultry production is an example of extensive agriculture practiced mainly in more developed countries.",
					"Sheep production and poultry production are both examples of extensive agriculture practiced on large areas of land, but requiring different climates.",
					"Sheep production and poultry production are both examples of intensive agriculture practiced on small areas of land but requiring different amounts of labor and capital.",
					"Sheep production is an example of extensive agriculture that is declining because of an insufficient supply of open land, whereas poultry production continues to be practiced on small areas of land.",
					"Sheep production is an example of extensive agriculture requiring large pastures, whereas poultry production is an example of intensive agriculture often practiced indoors."
				],
				"Correct": "Sheep production is an example of extensive agriculture requiring large pastures, whereas poultry production is an example of intensive agriculture often practiced indoors."
			},
			{
				"Question": "If the map was reproduced at the subnational state or provincial scale, as Hawaii is on the map, what changes in pattern would be expected in other parts of the world?",
				"Image": "4_24_25_26.png",
				"Options": [
					"The inland provinces of African countries would not show any production.",
					"Southeast Asian islands would not show any production.",
					"The Amazon Basin and Congo Basin would show concentrated areas of production.",
					"Provinces in southern China would show concentrated areas of production.",
					"The states in northern Mexico and northern India would not show any production."
				],
				"Correct": "The states in northern Mexico and northern India would not show any production."
			},
			{
				"Question": "Which of the following best describes the pattern of coffee bean production at the global scale?",
				"Image": "4_24_25_26.png",
				"Options": [
					"A core and periphery",
					"A hierarchical diffusion",
					"Inside arid climate regions",
					"In more developed countries",
					"Within tropical latitudes"
				],
				"Correct": "Within tropical latitudes"
			},
			{
				"Question": "Which of the following explains the limitations of the map shown for identifying the agricultural production regions of coffee beans?",
				"Image": "4_24_25_26.png",
				"Options": [
					"The map does not identify whether the country is a major exporter of coffee beans or whether the country consumes much of what it grows.",
					"The map is thematic, identifying countries by type, instead of a choropleth map that classifies countries by the amount produced.",
					"The map uses the descriptors “major” and “minor” and should instead use the amount of coffee beans produced per capita of the country’s total population.",
					"The map shows only coffee produced for the formal economy and does not account for informal or illegal production of coffee beans.",
					"The map mainly identifies all land within a country, as opposed to the foothills and upland areas where coffee beans are grown."
				],
				"Correct": "The map mainly identifies all land within a country, as opposed to the foothills and upland areas where coffee beans are grown."
			},
			{
				"Question": "A food assemblage that includes olives, pita bread, cheese, figs, lamb, and wine is most associated with which of the following?",
				"Image": "",
				"Options": [
					"Spain ",
					"Mexico",
					"France ",
					"Russia",
					"Greece"
				],
				"Correct": "Greece"
			},
			{
				"Question": "Which of the following spatial patterns is best explained by bid-rent theory?",
				"Image": "",
				"Options": [
					"Rural-to-urban migration increasing the population density to eastern China",
					"Linear settlements located along a major road in a densely forested area of Brazil",
					"Dispersed settlement throughout a large mountainous area of Switzerland",
					"The conversion of agricultural land to suburbs surrounding a city in the southeastern United States",
					"Concentric rings of different agricultural activities surrounding a city in the midwestern United States"
				],
				"Correct": "Concentric rings of different agricultural activities surrounding a city in the midwestern United States"
			},
			{
				"Question": "During the Green Revolution, agricultural practices from more developed countries diffused to less developed countries in Asia and Africa. Which of the following best explains the Green Revolution's highly variable level of success in increasing agricultural yields?",
				"Image": "",
				"Options": [
					"The increased yield of the Green Revolution in sub-Saharan Africa decreased the incidence of famine, but the program was unsuccessful in India because of poor soil quality.",
					"The Green Revolution was not successful in China because the strain of rice produced was prone to widespread crop failures, and China dropped out of the program.",
					"Rice production surpassed all other crop production in sub-Saharan Africa, but corn production in Mexico was less successful because of the negative impact on the environment.",
					"Persistent famine has occurred in India since new technologies associated with the Green Revolution were implemented because only the wealthy could afford the increased cost of the improved strains of rice.",
					"Small-scale farmers in Asia often lacked the resources necessary to acquire the hybrid seeds and the chemical inputs to grow them, leaving large gaps in the success of the Green Revolution outside of urban cores."
				],
				"Correct": "Small-scale farmers in Asia often lacked the resources necessary to acquire the hybrid seeds and the chemical inputs to grow them, leaving large gaps in the success of the Green Revolution outside of urban cores."
			},
			{
				"Question": "Which of the following best explains the importance of climate to agricultural practices?",
				"Image": "",
				"Options": [
					"Agricultural crops are successful only in midlatitude climates, where any crop can be grown.",
					"Tropical climates support plant-based agriculture, but animal-based agriculture is not successful in tropical areas.",
					"The sparse vegetation in arid or semiarid climates does not support animal-based agriculture.",
					"Cold midlatitude climates are associated with plantation agriculture and pastoral nomadism.",
					"Midlatitude climates tend to support similar agricultural crops and practices, such as wheat farming in the United States and China."
				],
				"Correct": "Midlatitude climates tend to support similar agricultural crops and practices, such as wheat farming in the United States and China."
			},
			{
				"Question": "During the winter months in North America, the primary source of fruits and vegetables found in grocery stores is ",
				"Image": "",
				"Options": [
					"Uruguay",
					"Nigeria",
					"Philippines",
					"Italy",
					"Chile"
				],
				"Correct": "Chile"
			},
			{
				"Question": "Which of the following pairs of agricultural  types occupies the largest percentage of the world’s total land area? ",
				"Image": "",
				"Options": [
					"Plantation agriculture and specialized horticulture ",
					"Cattle ranching and Mediterranean agriculture ",
					"Wheat farming and dairying ",
					"Intensive rice cultivation and subsistence farming ",
					"Shifting cultivation and nomadic herding "
				],
				"Correct": "Shifting cultivation and nomadic herding "
			},
			{
				"Question": "The shaded areas on the map above most likely indicate regions that are affected or threatened by which of the following?",
				"Image": "4_33.png",
				"Options": [
					"Depopulation",
					"Deforestation",
					"Deindustrialization",
					"Devolution",
					"Desertification"
				],
				"Correct": "Desertification"
			},
			{
				"Question": "Which of the following explains why multiple early hearths of domestication and diffusion of plants and animals arose across the world in Central America, the Fertile Crescent, the Indus River valley, and Southeast Asia?",
				"Image": "",
				"Options": [
					"Domestication of plants and animals began in Central America and the process diffused to other areas through the early explorers.",
					"Domestication of plants and animals began in Southeast Asia and the process diffused to other areas as nomadic warriors conquered other cultural groups and carried the new seeds and animals with them.",
					"Domestication of plants and animals began in the Fertile Crescent and the process diffused as pastoral nomads migrated to other areas.",
					"Domestication of plants and animals began in the Indus River valley and the process diffused to other areas across trade routes.",
					"Domestication of plants and animals evolved in each hearth independently of one another as societies in each area learned and applied the process to local plants and animals."
				],
				"Correct": "Domestication of plants and animals evolved in each hearth independently of one another as societies in each area learned and applied the process to local plants and animals."
			},
			{
				"Question": "According to Carl Sauer, which of the following is true about plant domestication?",
				"Image": "",
				"Options": [
					"It originated in marginal areas with limited food resources. ",
					"It was developed by farmers who were starving and desperate for food. ",
					"It owes its origins to the domestication of animals. ",
					"It was at first dependent on irrigation.",
					"It first occurred in diversified habitats with  a variety of species."
				],
				"Correct": "It first occurred in diversified habitats with  a variety of species."
			},
			{
				"Question": "Palm oil, an edible vegetable oil used in processing packaged food products, is obtained from the fruit of the oil palm tree, grown only in the tropics. Which of the following explains how global demand for palm oil has proved beneficial and detrimental for countries such as Indonesia and Malaysia?",
				"Image": "",
				"Options": [
					"Palm oil exports provided substantial corporate profits, but increased government subsidies to palm oil farmers led to increased poverty in the two countries.",
					"Palm oil exports provided substantial corporate profits, but the process led to high rates of unemployment for farmworkers at harvest time.",
					"Palm oil exports provided increased income to the governments of Indonesia and Malaysia, but the number of farmers employed on palm oil plantations decreased in the two countries.",
					"Palm oil exports aided in increasing the wealth of the two countries but also increased the diversity of plants in the two countries.",
					"Palm oil exports provided substantial corporate profits, but the growth in the industry resulted in heavy deforestation in both countries."
				],
				"Correct": "Palm oil exports provided substantial corporate profits, but the growth in the industry resulted in heavy deforestation in both countries."
			},
			{
				"Question": "The industrialization and mechanization of agriculture in the United States during the past 70 years have resulted in",
				"Image": "",
				"Options": [
					"an increase in the number of farms and a decrease in the size of farm fields ",
					"an increase in the diversity of crops and animals grown on individual farms ",
					"an increase in the economic viability of small towns in the agricultural regions ",
					"a decrease in the tonnage of pesticides and herbicides used on cropland ",
					"a decrease in the number of farms and an increase in the size of farms "
				],
				"Correct": "a decrease in the number of farms and an increase in the size of farms "
			},
			{
				"Question": "Genetic engineering of agricultural crops has primarily increased the productivity of modern farming by",
				"Image": "",
				"Options": [
					"converting annual plants to perennials, which do not require replanting ",
					"increasing the size of fruits and grains ",
					"cutting the cost of bulk seeds during planting seasons ",
					"changing vegetable and fruit colors to suit consumer demands ",
					"increasing plants’ drought resistance and resistance to pests "
				],
				"Correct": "increasing plants’ drought resistance and resistance to pests "
			},
			{
				"Question": "Which of the following agricultural inputs were the most recent technological innovations employed in less developed countries during the Green Revolution?",
				"Image": "",
				"Options": [
					"Metal plows and harvesting equipment",
					"Irrigated farm fields",
					"Chemical fertilizers and pesticides",
					"Terracing in highland terrain",
					"Seed hybrids and animal breeds"
				],
				"Correct": "Chemical fertilizers and pesticides"
			}
		],
		[ // Unit 6
			{
				"Question": "In the development of urban land, which of the following is typically built on the most accessible sites?",
				"Image": "",
				"Options": [
					"Single-family housing",
					"Farm markets",
					"Industrial parks",
					"High-rise apartment buildings",
					"Retail complexes"
				],
				"Correct": "Retail complexes"
			},
			{
				"Question": "Which of the following best explains why New York City has more specialized stores than do smaller urban places in the United States?",
				"Image": "",
				"Options": [
					"Its status as a primate city",
					"The rank-size rule",
					"The gravity model",
					"The Burgess concentric zone model",
					"Central place theory"
				],
				"Correct": "Central place theory"
			},
			{
				"Question": "In the fundamentals of central place theory, which of the following terms is defined as the maximum distance a consumer will travel to acquire a good or service?",
				"Image": "",
				"Options": [
					"Distance decay",
					"Threshold",
					"Cost-to-distance ratio",
					"Relative location",
					"Range"
				],
				"Correct": "Range"
			},
			{
				"Question": "Which of the following is a true statement about classic models of city structure?",
				"Image": "",
				"Options": [
					"The concentric zone model does not have a transitional area.",
					"The central business district has the most dominant position in the multiple nuclei model.",
					"The multiple nuclei model and the sector model are similar in that they both have only one core.",
					"The interaction between the central city and the suburbs is greatest in the urban realm model.",
					"The sector model is highly influenced by transportation patterns."
				],
				"Correct": "The sector model is highly influenced by transportation patterns."
			},
			{
				"Question": "Which of the following best explains the strength of the diagram shown as a theoretical model in human geography?",
				"Image": "5_4.png",
				"Options": [
					"The model presents a general theory that is applicable to metropolitan areas that were first settled in the era of postcolonial independence.",
					"The model presents a general theory that is most applicable to metropolitan areas that were once colonial-era Portuguese cities.",
					"The model presents a general theory that is most applicable to metropolitan areas with service-based urban economies.",
					"The model presents a general theory that is most applicable to metropolitan areas with technology-based urban economies.",
					"The model presents a general theory that is most applicable to metropolitan areas that were once colonial-era Spanish cities."
				],
				"Correct": "The model presents a general theory that is most applicable to metropolitan areas that were once colonial-era Spanish cities."
			},
			{
				"Question": "Which of the following was a consequence of blockbusting in North American cities?",
				"Image": "",
				"Options": [
					"European immigrants moved into housing vacated by upwardly mobile Americans.",
					"Poor residents were unable to acquire mortgages.",
					"Real estate agents lost sellers.",
					"Neighborhoods were razed for commercial establishments.",
					"The ethnic composition of neighborhoods changed"
				],
				"Correct": "The ethnic composition of neighborhoods changed"
			},
			{
				"Question": "Central place theory describes the ",
				"Image": "",
				"Options": [
					"tendency of different ethnic groups to congregate in a single location ",
					"tendency of civilizations to form around certain natural features ",
					"outward radiation of cultural patterns from  a central place ",
					"tendency of wealth to concentrate in urban core areas ",
					"spatial patterns of urban and outlying areas based on the flow of goods and services "
				],
				"Correct": "spatial patterns of urban and outlying areas based on the flow of goods and services "
			},
			{
				"Question": "An urban center that is disproportionately larger than the second largest city in a country and that dominates the country’s social, political, and economic activities can be best classified as  ",
				"Image": "",
				"Options": [
					"a megalopolis ",
					"a conurbation ",
					"an edge city ",
					"an imperial city ",
					"a primate city "
				],
				"Correct": "a primate city "
			},
			{
				"Question": "La Défense is an edge city constructed in the late twentieth century and characterized by high-rise office buildings. Which of the following best explains why La Défense is located on the outskirts of Paris?",
				"Image": "",
				"Options": [
					"Land in the city center is not as valuable as land on the edge of the city.",
					"The center of Paris is not well-served by public transportation.",
					"La Défense needs access to the river in order to export manufactured goods to other countries in Europe.",
					"The center of Paris is inhabited by low-income residents, and wealthy residents prefer to live in the suburbs.",
					"The land at the center of Paris is filled with numerous historic buildings that residents do not want torn down."
				],
				"Correct": "The land at the center of Paris is filled with numerous historic buildings that residents do not want torn down."
			},
			{
				"Question": "Although gentrification can revitalize cities by rehabilitating residential areas, which of the following problems can be explained by the type of building renovations shown in the before and after images?",
				"Image": "5_9.png",
				"Options": [
					"More parking leading to decreased public transportation use",
					"New buildings causing environmental sustainability issues",
					"Disuse changing areas into zones of abandonment",
					"Unfair real estate practices resulting in housing and insurance discrimination cases",
					"Higher rents causing displacement of existing residents"
				],
				"Correct": "Higher rents causing displacement of existing residents"
			},
			{
				"Question": "The presence of media hubs, coalitions focusing on specific environmental challenges, and headquarters for multinational corporations in major cities help explain how such cities",
				"Image": "",
				"Options": [
					"avoid participation in global processes and decision making",
					"are isolated and dependent on national political boundaries for security",
					"preserve cultural heritage and contribute to increasing isolation",
					"generate individual wealth and drive economic development within cities boundaries",
					"are linked globally in ways that transcend national political boundaries"
				],
				"Correct": "are linked globally in ways that transcend national political boundaries"
			},
			{
				"Question": "Which of the following groups would most likely engage in the gentrification of an older residential neighborhood?",
				"Image": "",
				"Options": [
					"University students on limited incomes ",
					"People above age sixty-five on limited incomes ",
					"Double-income households with children ",
					"Recent immigrants on limited incomes ",
					"Double-income households without children "
				],
				"Correct": "Double-income households without children "
			},
			{
				"Question": "Historically, the growth of North American suburbs was most constrained by",
				"Image": "",
				"Options": [
					"high land values",
					"zoning ordinances",
					"housing shortages",
					"cultural preferences",
					"limited transportation"
				],
				"Correct": "limited transportation"
			},
			{
				"Question": "Which of the following best explains the importance of stock exchanges in the cities of Mumbai, India and Shanghai, China?",
				"Image": "5_13.png",
				"Options": [
					"These cities have a large manufacturing labor force.",
					"These cities function as global economic centers in the core.",
					"These edge cities have a large number of high-technology companies.",
					"These edge cities are built at the intersection of transportation routes.",
					"These cities function as global economic centers in the semiperiphery."
				],
				"Correct": "These cities function as global economic centers in the semiperiphery."
			},
			{
				"Question": "Which of the following best explains what the central business district data indicate?",
				"Image": "5_14.png",
				"Options": [
					"Business owners want to have fast Internet available for their consumers in order to improve online ratings for local services and generate return customers.",
					"Consumers demand that the fastest Internet service available before they will consider visiting a city or selecting a hotel for work or business trips.",
					"Politicians and activists have made Internet connectivity a basic right of urban residents and feel that governments should provide services to increase the connectivity of citizens.",
					"Communications companies expect that increasing Internet speeds will lead to increased number of subscribers to their networks.",
					"Government policy makers and business partners have focused infrastructure efforts on creating a downtown work environment that is positive for economic development."
				],
				"Correct": "Government policy makers and business partners have focused infrastructure efforts on creating a downtown work environment that is positive for economic development."
			},
			{
				"Question": "International company headquarters, significant global financial functions, and a polarized social structure are defining characteristics of",
				"Image": "",
				"Options": [
					"primate cities",
					"entrepôts",
					"forward capitals",
					"edge cities",
					"world cities"
				],
				"Correct": "world cities"
			},
			{
				"Question": "Which of the following best explains what the concentric zone model and bid-rent curve illustrate about patterns of urban areas?",
				"Image": "5_16.png",
				"Options": [
					"Together they show how housing prices rise exponentially in rural areas.",
					"Together they show how rents for apartments drop precipitously closer to the central business district.",
					"Together they show how rents for agricultural land rise exponentially farther from cities.",
					"Together they show how rents for commercial office space rise exponentially on the urban periphery.",
					"Together they show how land prices rise exponentially closer to the central business district."
				],
				"Correct": "Together they show how land prices rise exponentially closer to the central business district."
			},
			{
				"Question": "Which of the following describes the connection between land values and population density?\nI. Higher population density indicates a higher demand for land and thus the price of land is bid up in densely settled regions.\nII. Higher prices make land less affordable so that expensive locations generally have lower population densities.\nII. Larger areas of land will cost more but will be less likely to be densely settled.",
				"Image": "",
				"Options": [
					"III only",
					"I and II",
					"II and III",
					"II only",
					"I only"
				],
				"Correct": "I only"
			},
			{
				"Question": "Which of the following resources is used to produce the largest amount of electricity in the United States?",
				"Image": "",
				"Options": [
					"Coal imported from foreign countries by ships ",
					"Natural gas drilled and imported from foreign countries by pipelines ",
					"Oil (petroleum) drilled and transported within the United States via pipelines ",
					"Oil (petroleum) imported from foreign countries by ships ",
					"Coal mined and transported within the United States by railroads "
				],
				"Correct": "Coal mined and transported within the United States by railroads "
			},
			{
				"Question": "Which of the following types of urban land use is most common on the periphery of cities in Latin America?",
				"Image": "",
				"Options": [
					"A plaza surrounded by a central business district ",
					"Parks and recreation areas ",
					"Upper-class residential developments ",
					"Rail transportation corridors",
					"Residential squatter settlements "
				],
				"Correct": "Residential squatter settlements "
			},
			{
				"Question": "With regard to environmental sustainability, which of the following explains an advantage of urban light-rail networks in Europe and East Asia compared to most light-rail systems in United States cities?",
				"Image": "",
				"Options": [
					"Light-rail networks connect locations in downtown central business districts.",
					"Light-rail stations tend to be simple boarding platforms that do not have parking areas.",
					"Light-rail lines tend to lack a large central train terminal for passengers to transfer between trains headed in different directions.",
					"Light-rail lines often work on the honor system where a pass or permit is used to ride the train and there may be random ticket checks.",
					"Light-rail is integrated with fast commuter railroad networks and subways and extends out to multiple suburbs."
				],
				"Correct": "Light-rail is integrated with fast commuter railroad networks and subways and extends out to multiple suburbs."
			},
			{
				"Question": "Many medium-sized metropolitan areas such as Minneapolis-Saint Paul, Minnesota, or Charlotte, North Carolina, have added light-rail train systems to their public-transit networks. Which of the following best explains the goals of light-rail projects?",
				"Image": "",
				"Options": [
					"Reduce highway accident numbers due to unsafe driving and outdated, less-safe vehicles",
					"Protect wetlands and local lakes from water pollution caused by industrial waste discharge",
					"Redevelop urban brownfields and promote farmland protection policies that reduce urban sprawl",
					"Plan for sustainable residential zoning and establish an urban-growth boundary around cities",
					"Reduce the ecological footprint of cities and reduce the air pollution created by vehicle exhaust"
				],
				"Correct": "Reduce the ecological footprint of cities and reduce the air pollution created by vehicle exhaust"
			},
			{
				"Question": "In the new global economy, an increasing proportion of influential financial decisions are being made in",
				"Image": "",
				"Options": [
					"the informal sector",
					"regional centers and small towns where fax machines are used",
					"the field, close to the sources of agricultural production",
					"national capitals because of the increasing importance of the nation state",
					"major corporate centers such as New York, London, and Tokyo"
				],
				"Correct": "major corporate centers such as New York, London, and Tokyo"
			},
			{
				"Question": "Prior to 1850 the location of all major North American cities was related, chiefly, to the presence of ",
				"Image": "",
				"Options": [
					"transcontinental highways ",
					"defensive sites ",
					"railroad junctions ",
					"water power ",
					"navigable waterways "
				],
				"Correct": "navigable waterways "
			},
			{
				"Question": "Today, most of the United States and Canadian population lives in which of the following?",
				"Image": "",
				"Options": [
					"Farming areas",
					"Rural nonfarming areas",
					"Central cities",
					"Small towns",
					"Metropolitan areas"
				],
				"Correct": "Metropolitan areas"
			},
			{
				"Question": "Locational advantages important to the development of the earliest cities included",
				"Image": "",
				"Options": [
					"availability of good harbors for large ships",
					"temperate climate and proximity to coal mines",
					"good connections by road and canal",
					"proximity to manufacturing areas ",
					"productive agricultural land and defensible sites"
				],
				"Correct": "productive agricultural land and defensible sites"
			},
			{
				"Question": "Which of the following is a correct statement about the major cities of the world?",
				"Image": "",
				"Options": [
					"Most are found in areas that are not very suitable for agriculture.",
					"Most primate cities are located in the United States and western Europe.",
					"They are concentrated between the tropic of Cancer and the tropic of Capricorn.",
					"The world's fastest-growing cities are found in areas with the highest standards of living.",
					"Most are located on rivers or seacoasts."
				],
				"Correct": "Most are located on rivers or seacoasts."
			},
			{
				"Question": "Which of the following best explains a geographic characteristic shared by megacities in the global periphery?",
				"Image": "",
				"Options": [
					"Megacities developed due to major investments in high-speed railways and subway systems.",
					"Abundant job opportunities in megacities lead to low unemployment rates.",
					"Deindustrialization is causing megacity populations to decline.",
					"Megacities were built in strategic defensive locations and maintain a strong military presence.",
					"Megacities demonstrate unplanned growth patterns and often contain squatter settlements."
				],
				"Correct": "Megacities demonstrate unplanned growth patterns and often contain squatter settlements."
			},
			{
				"Question": "Which of the following is the primary reason for the rapid population growth in megacities throughout the developing world?",
				"Image": "",
				"Options": [
					"A decline in the death rate ",
					"The natural increase rate ",
					"The decline in the dependency ratio ",
					"A decrease in the doubling time",
					"Interregional migration "
				],
				"Correct": "Interregional migration "
			},
			{
				"Question": "A primate city such as Mexico City is",
				"Image": "",
				"Options": [
					"most likely to share its rank size with at least one other city in the country",
					"always a national capital serving as the seat of government and industrial center of the country",
					"much larger than the cities in any neighboring country and serves as the region’s financial capital",
					"always located in the center of its country for maximum accessibility",
					"more than twice the size of any other city in its country and dominant economically and culturally"
				],
				"Correct": "more than twice the size of any other city in its country and dominant economically and culturally"
			},
			{
				"Question": "In the contemporary pattern of migration to cities in more developed countries, migrants are more likely to settle in ",
				"Image": "",
				"Options": [
					"The central city",
					"Brownfield sites",
					"Squatter settlements",
					"Areas of gentrification",
					"Suburban areas"
				],
				"Correct": "Suburban areas"
			},
			{
				"Question": "Since 1960 Brazil, Kazakhstan, Myanmar, Pakistan, and Tanzania have relocated their capital cities . Which of the following statements about the new locations is true for all five countries?",
				"Image": "",
				"Options": [
					"A militarily strategic location was chosen .",
					"An isolated location was chosen .",
					"An ethnically mixed location was chosen .",
					"A coastal location was chosen . ",
					"A more central location was chosen . "
				],
				"Correct": "A more central location was chosen . "
			},
			{
				"Question": "New Urbanism is an example of sustainable urban development. This type of development is intended to",
				"Image": "",
				"Options": [
					"increase the need for senior housing",
					"increase the need for shopping mall development",
					"decrease the density of the urban area",
					"reduce the need for mass transit",
					"reduce the miles driven on personal vehicles"
				],
				"Correct": "reduce the miles driven on personal vehicles"
			},
			{
				"Question": "Which of the following is useful for describing a settlement node whose primary function is to provide support for the population in its hinterland? ",
				"Image": "",
				"Options": [
					"Von Thünen’s model of land use ",
					"Concentric zone model ",
					"Core-periphery model ",
					"Rostow’s model of economic development ",
					"Christaller’s model of central place  "
				],
				"Correct": "Christaller’s model of central place  "
			},
			{
				"Question": "Which of the following describes a feature of the original central business district (CBD) found in most cities?",
				"Image": "",
				"Options": [
					"Manufacturing space is located in the middle of the original CBD.",
					"Residential space is generally not permitted in the original CBD.",
					"Retail space is generally not permitted in the original CBD.",
					"Land values are the lowest of any zone in the metropolitan area.",
					"Land values are the highest of any zone in the metropolitan area."
				],
				"Correct": "Land values are the highest of any zone in the metropolitan area."
			},
			{
				"Question": "An example of an important physical site characteristic is a",
				"Image": "",
				"Options": [
					"major airport",
					"grid street pattern",
					"major central park",
					"public sports facility",
					"natural harbor"
				],
				"Correct": "natural harbor"
			},
			{
				"Question": "Which of the following statements explains the characteristics of cities in a postindustrial economy?",
				"Image": "",
				"Options": [
					"The postindustrial city has new structures since the buildings of the industrial city cannot be reused.",
					"The postindustrial city has very few companies in the manufacturing sector.",
					"The postindustrial city is a high-density, compact city to facilitate information and technology businesses.",
					"The postindustrial city has few low-skill or general service jobs because of the demands of technology industries.",
					"The postindustrial city has a large share of offices housing technology and information services."
				],
				"Correct": "The postindustrial city has a large share of offices housing technology and information services."
			},
			{
				"Question": "Which of the following accurately describes the city population data in the table?",
				"Image": "5_37.png",
				"Options": [
					"Bangkok is both a metacity and a primate city.",
					"Hanoi is both a world city and a primate city.",
					"Ho Chi Minh City is both a megacity and a primate city.",
					"Hanoi is both a capital city and a primate city.",
					"Bangkok is both a megacity and a primate city."
				],
				"Correct": "Bangkok is both a megacity and a primate city."
			},
			{
				"Question": "The map above shows percent change in population for counties in Texas from the 2000 to the 2010 census. The three largest metropolitan areas are Dallas-Fort Worth (Tarrant and Dallas Counties), Houston (Harris County), and San Antonio (Bexar County). Which of the following statements best explains urban growth in the period from 2000 to 2010 ?",
				"Image": "5_38.png",
				"Options": [
					"Population in the extreme western counties in Texas remained stable with little growth or decline during the 2000–2010 period, indicating a low birth rate.",
					"The greatest percentage growth in population occurred in locations in central Texas during the 2000–2010 period, indicating a trend of city residents moving to rural areas.",
					"All of the counties surrounding the major metropolitan areas experienced negative growth in the 2000–2010 period, indicating the process of deindustrialization.",
					"There has been a steady increase in population growth for all counties in the extreme southeastern coastal area, indicating the popularity of coastal living.",
					"The greatest percentage growth in population occurred in counties adjacent to the three largest metropolitan areas, indicating continued suburbanization."
				],
				"Correct": "The greatest percentage growth in population occurred in counties adjacent to the three largest metropolitan areas, indicating continued suburbanization."
			},
			{
				"Question": "Which of the following occurs when the cities in a country follow the rank-size rule?",
				"Image": "",
				"Options": [
					"There are two large cities with similar population sizes.",
					"The largest city is three times the population of the next-largest city.",
					"The largest city is four times the population of the next-largest city.",
					"The largest city is five times the population of the next-largest city.",
					"The largest city is two times the population of the next-largest city."
				],
				"Correct": "The largest city is two times the population of the next-largest city."
			}
		]
	]
})();
