let facs=["Enit:Ecole nationale d'étude d'ingeineiur",
            "ensi:Ecole nationale de science d'Informatique","Ensit",'Other']//n7tou liste taa facet
for (let i=0;i<facs.length;i++){
    let aa=document.createElement("option");
    let txt=document.createTextNode(facs[i]);

    aa.appendChild(txt);
    let selec=document.getElementById("fac");
    console.log(selec);
    selec.appendChild(aa);

}