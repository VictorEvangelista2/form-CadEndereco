# ![registration form](imagens/registration%20form%20logo.png)

# Registration Form 

### Develop an intuitive and efficient registration form, capable of automating the search for address information based on the CEP (Postal Address Code) provided by the user. This functionality will be implemented through integration with an external API specialized in CEP code query, optimizing the registration process and reducing the possibility of typing errors.

# Development

### Searching by CEP code in registration forms is a common practice in several web applications and information systems. However, manually entering address data can be a tedious and error-prone task, which negatively impacts the quality of the data collected. Implementing an automatic zip code query via API offers the following advantages:

 - **Agility:** Automatically filling in address fields speeds up the registration process, providing a better user experience.
 - **Accuracy:** API querying ensures the accuracy of address data, eliminating the need for manual validation and reducing the occurrence of inconsistent information.
 - **Error reduction:** Automating the search by ZIP code reduces the possibility of typing errors, such as incorrect numbers or incorrect street names.
 - **Improving data quality:** Collecting more accurate and consistent data facilitates the analysis and processing of information, optimizing decision making.


# Construction

### Therefore, for the proper construction of this CEP registration form, several functions were created in which they clean the form, check the size of the CEP sent by the user, consume the API, and last but not least the function that relates the API data to the corresponding fields.  Therefore, the functions mentioned above will be shown below.

#  CEP validation

# ![cep validation](images/)

### This JavaScript code checks whether a given string (stored in the number variable) represents a valid number. In other words, it checks if the string only contains digits from 0 to 9.

# API consumption

# ![api consumption](images/)

