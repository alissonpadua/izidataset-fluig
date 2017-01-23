# IZIDATASET
Biblioteca criada para facilitar a ultilização de datasets em formulários, widgets e layouts.
# IZIDATASET.create("colleague")
A função CREATE recebe o nome de um dataset existente, interno ou customizado,  para que possamos consulta-lo.
# IZIDATASET.setParam("nome", "valorInicial", "valorFinal")
Usada pra configurar parâmetros a serem passados para consulta, esta função pode ser usada várias vezes para adicionar mais de um parâmetro 
# IZIDATASET.find()
Faz a consulta síncrona na API dataset/dataset passando toda as configurações anteriores, armazenando o JSON de resposta do Fluig  no atributo rawJSON
# IZIDATASET.rawJSON
Retorna o JSON "cru" vindo do Fluig
# IZIDATASET.tableHTML()
Retorna os dados do dataset em HTML no formato tabela. Ex: $("#relatorio").html(IZIDATASET.tableHTML()); As colunas são as mesmas do atributo columns do JSON retornado pelo servidor
# IZIDATASET.setCustomColumns("Nome", "Sobrenome", "Email");
Personaliza as colunas da tabela HTML
# Dependências
-JQUERY 2.x+ <br>
-BOOTSTRAP 3 ou Fluig-Style
