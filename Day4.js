let assignmentInput = `
`

GetEncasingSets(assignmentInput, GetChecker(false))


function GetEncasingSets(assignmentInput, checker)
{

    let encasingCount = 0;
    var lineBreak = '\n';
    var i = j = 0;
    while ((j = assignmentInput.indexOf(lineBreak, i)) !== -1) {
        let assignments = assignmentInput.substring(i,j);
        let individualAssignmentRanges = assignments.split(",");
        const bounds1 = individualAssignmentRanges[0].split("-");
        const assignment1 = Array.from(new Array(bounds1[1] - bounds1[0] + 1), (x, z) => z +  parseInt(bounds1[0]));
        const bounds2 = individualAssignmentRanges[1].split("-");
        const assignment2 = Array.from(new Array(bounds2[1] - bounds2[0] + 1), (x, z) => z + parseInt(bounds2[0]));

        if(checker(assignment1, assignment2) || checker(assignment2, assignment1))
        {
            encasingCount += 1;
        }
        i = j + 1;
    }
    console.log(encasingCount)
}

function GetChecker(validateFull)
{
    
    if(validateFull)
    {
       return (arr, target) => target.every(v => arr.includes(v));
    }
    else
    {
        return (arr, target) => target.some(v => arr.indexOf(v) >=0);
    }
}