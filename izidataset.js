/*
*               CREATEDE BY ALISSON DE PADUA
*         LIB FOR USE WITH FLUIG BY TOTVS
*/


IZIDATASET = {
            "name" : null,
      "param" : [],
      "rawJSON" : "",
      "customColumns" : "",
      "create" : function(nameparam = ""){
            if(nameparam == ""){
            console.log("== Create error: invalid_name ==");
          }else{
            this.name = nameparam;
            return this;
          }
      },
      "setParam" : function(n = "", vi = "", vf = ""){
            try{
            if(n != "" && vi != "" && vf != ""){
                this.param.push({
                    "_field" : n,
                  "_initialValue" : vi,
                  "_finalValue" : vf,
                  "_type" : 1
              });
            }else{
                throw {message: "== ParamType error: num_param_invalid =="};
            }
          }catch(e){
            console.log(e.message);
          }

      },
      "find" : function(){
            try{
                if(this.name == ""){
                throw {message: "== Find error: invalid_name =="};
              }else{
                            if($.isEmptyObject(this.param)){
                        this.param = null;
                }
              }
                            var dados = {
                                "name": this.name,
                                "fields": null,
                                "constraints":this.param,
                        "order":null
                        };
              var izi = this;
                $.ajax({
                    method: "POST",
                    url: WCMAPI.getServerURL() +"/api/public/ecm/dataset/datasets/",
                    data: JSON.stringify(dados),
                    contentType: "application/json", 
                    async: false,
                    error: function(e) {
                      if (x.status == 500) {
                            alert("Erro Interno do Servidor: entre em contato com o Administrador.");
                      }
                    },
                   success:function(model) {
                                izi.rawJSON = model.content;
                   }
                 });
          }catch(e){
            console.log(e.message);
          }
      },
      "setCustomColumns" : function(columns){
            this.customColumns = columns;
      },
      "tableHTML" : function(){
            var colunas = this.rawJSON.columns;
            var tablehead = "<thead><tr>";
          $.each(this.rawJSON.columns, function(index, value){
                tablehead += "<th>"+ value +"</th>";
          });
          tablehead += "</tr></thead>";
          var tablebody = "<tbody>";
          $.each(this.rawJSON.values, function(index, value){
                            tablebody += "<tr>";
                $.each(colunas, function(index1, value1){
                     tablebody += "<td>" + value[value1] + "</td>";
              });
              tablebody += "</tr>";
          });
          tablebody += "</tbody>";
          
          if(this.customColumns != ""){
                tablehead = '<thead><tr>';
                $.each(this.customColumns, function(index, value){
                    tablehead += '<th>'+ value.toUpperCase() +'</th>';
              });
              tablehead += '</tr></thead>';
          }
          
          var tablefull = '<div class="table-responsive"><table class="table table-hover">'+ tablehead + tablebody +'</table></div>';
          return tablefull;
      }
};
 