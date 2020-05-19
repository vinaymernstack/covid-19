$( document ).ready(function() {
    $.ajax({
        url:"https://pomber.github.io/covid19/timeseries.json",
        method:"GET",
        datatype:"JSON",
        success:(res)=>{
           let dataArrey = []
            let count = -1
            for(temp in res){
                dataArrey.push(res[temp])
               count++
              let list= $("<li>")
              let atag = $("<a>").attr({"id":count,"class":temp,"href":"#"}) 
              atag.html(temp)
              list.append(atag)
              
                $(".countrylist").append(list)

                $("#"+count).click((e)=>{
                   let countrydata = []
                    let index = e.target.id
                  let class1 = $("#"+index).attr("class")
                  console.log(class1)
                  $(".countryname").html('class1')
                  $(".countryname").html(class1)

                  $(".date").html("")
                  $(".conformed").html("")
                  $(".deaths").html("")
                  $(".recoverd").html("")
                   
                 

                    $(".tbody").html("")
                    for (i = 0; i < dataArrey[index].length; i++) {
                        countrydata.unshift(dataArrey[index][i])
                    }

                    $(".date").html(countrydata[0].date)
                    $(".conformed").html(countrydata[0].confirmed)
                    $(".deaths").html(countrydata[0].deaths)
                    $(".recoverd").html(countrydata[0].recovered)
                    console.log(countrydata)

                    let remning = countrydata[0].confirmed-(countrydata[0].deaths+countrydata[0].recovered)
                    let chart = bb.generate({
                        data: {
                          columns: [
                            ["conformed", remning],
                            ["Deaths", countrydata[0].deaths],
                            ["Recovered", countrydata[0].recovered],
                          ],
                          type: "donut",
                          onclick: function(d, i) {
                          console.log("onclick", d, i);
                         },
                          onover: function(d, i) {
                          console.log("onover", d, i);
                         },
                          onout: function(d, i) {
                          console.log("onout", d, i);
                         }
                        },
                        donut: {
                          title: countrydata[0].confirmed
                        },
                        bindto: "#donut-chart"
                      });

                    for (i = 0; i < countrydata.length; i++) {
                        
                        let tr=$("<tr>")
                        for(temp in countrydata[i]){
                            
                            let td=$("<td>").html(countrydata[i][temp])
                            tr.append(td)
                        }
                        $(".tbody").append(tr)
                       
                      }

                })



               
                  
                  
            }

            
            // for(temp in res){
            //    dataArrey.push(res[temp])
               
            //     let tr = $("<tr>")
            //     let td= $("<td>").html(temp)
            //     tr.append(td)
            //     for(let temp1 in res[temp]){
                    
            //         for(let temp2 in res[temp][temp1]){
                        
            //             let date = $("<td>").html(res[temp][temp1][temp2])
                        
            //         }
                  
            //     }
            //     $(".tbody").append(tr)
              
            // }

            
        }
    })
});

