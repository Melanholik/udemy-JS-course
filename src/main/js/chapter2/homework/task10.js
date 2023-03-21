const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};

function showExperience(plan) {
    return plan.skills.exp;
}

// console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
    let str = "";
    for (let key in plan){
        if (key === "skills") {
            for (const skillsKey in plan[key]) {
                if (skillsKey === "programmingLangs"){
                    for (const programmingLangsKey in plan[key][skillsKey]) {
                        str+=`Язык ${programmingLangsKey} изучен на ${plan[key][skillsKey][programmingLangsKey]}\n`
                    }
                    break;
                }
            }
        }
    }
    return str;
}
console.log(showProgrammingLangs(personalPlanPeter));