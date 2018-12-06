export function normalization(word: string) {

    let has = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ";
    let nohas = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr";
    let result = "";

    for (let i = 0; i < word.length; i++) {

        let check = false;

        for (let j = 0; j < has.length; j++) {

            if (word.substr(i, 1) === has.substr(j, 1)) {
                result += nohas.substr(j, 1);
                check = true;
                break;
            }

        }

        if (check === true) {
            result += word.substr(i, 1);
        }

    }

    return result;

}