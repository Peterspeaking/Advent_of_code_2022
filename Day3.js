let ruckSacks = `
`

function GetBadgeSumFromRucksacks(ruckSacks)
{
    var badgeSum  = 0;
    var lineBreak = '\n';
    var i = j = 0;
    var sackCount = 0;
    const ruckSackGroup = [];
    j = calorieInput.indexOf(lineBreak, i);

    while (j !== -1) {
        if(sackCount == 2)
        {
            ruckSackGroup[sackCount] = ruckSacks.substring(i,j).split('');
            let badge = GetBadge(ruckSackGroup[0], ruckSackGroup[1], ruckSackGroup[2])
            badgeSum += GetItemValue(badge)
            sackCount = 0
        }
        else
        {
            ruckSackGroup[sackCount] = ruckSacks.substring(i,j).split('');
            sackCount++
        }
        
        i = j + 1;
    }
    console.log(badgeSum)
}


function GetPrioritySumFromInvalidItemRucksacks(ruckSacks)
{
    var prioritySum  = 0;
    var lineBreak = '\n';
    var i = j = 0;
    while ((j = ruckSacks.indexOf(lineBreak, i)) !== -1) {
        let invalidItem = GetInvalidItem(ruckSacks.substring(i,j))
        prioritySum += GetItemValue(invalidItem)
        i = j + 1;
    }
    console.log(prioritySum)
}


function GetInvalidItem(rucksack)
{
    rucksack = rucksack.split('');
    let firstCompartment = rucksack.slice(0, rucksack.length / 2)
    let secondCompartment = rucksack.slice(rucksack.length / 2, rucksack.length)
    var invalidItem = firstCompartment.filter(x => secondCompartment.indexOf(x) !== -1)[0]
    return invalidItem
}

function GetBadge(rucksack1, rucksack2, rucksack3)
{
    var commonItems = rucksack1.filter(x => rucksack2.includes(x))
    var badge = rucksack3.filter(x => commonItems.includes(x))[0]
    return badge
}

function GetItemValue(item)
{
    if (item.toUpperCase() === item) {
        return (item.charCodeAt(0) - 38)
      } 
    else {
        return (item.charCodeAt(0) - 96)
      }
}