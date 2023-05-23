fetch('https://www.coursehubiitg.in/api/codingweek/contributions')
.then(
    response => response.json()
).then(
    response => {
        console.log(response);
        var sorted = response.sort(function(a,b){
            var x = a.points < b.points? 1:-1; 
            return x; 
            });
            for(let i=0;i<sorted.length;i++){
                if(i<3){
                    document.getElementById(`name${i+1}`).innerHTML = sorted[i].name;
                    document.getElementById(`img${i+1}`).src = sorted[i].avatar;
                    document.getElementById(`points${i+1}`).innerHTML = sorted[i].points;
                }else{
                    document.getElementById(`ls`).innerHTML+=`<li class="box"><div class="f">
                    <p class="posl">${i+1}</p>
                    <svg class="lframe" height="80px" width="80px">
                        <circle cx="40" cy="40" r="37.21" stroke="white" stroke-width="2.79"
                        style="fill:#BABEFF;">
                    </svg>
                    <img src="${sorted[i].avatar}" alt="abc" class="a limg" width="71.3">
                    <p class="lname">${sorted[i].name}</p>
                    <p class="lscore">${sorted[i].points}</p>
                </div></li>`;
                }
            }
        console.log(sorted)
    }
)
  
     
