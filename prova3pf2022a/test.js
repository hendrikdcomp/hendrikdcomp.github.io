const CHECK = '\u2705'
const FAIL = '\u274C'
const UNABLE = '\u2753'
const log = (msg) => console.log(msg)

// const assert = (fstr,value) => {
//     try {
//         const f = fstr.subs
//         if (f.apply(this,params) === value) return log(`${f.name} ${CHECK}`)
//         else return log(`${f.name} ${FAIL}`)
//     } catch(err) {
//         log(`${f.name} ${UNABLE} ${err}`)
//     }
// }
const equals = (list1, list2) =>
  list1.length === list2.length &&
  list1.every((value, i) => value === list2[i])

/**
 * @param {any} result resultado da aplicação da função
 * @param {any} value Resultado correto
 * @param {string} f nome da função (opcional)
 * @returns Mensagem 
 */
const assert = (result,value,f='') => {
    try {
        if (result === value) return log(`${f} ${CHECK}`)
        else return log(`${f} ${FAIL}`)
    } catch(err) {
        log(`${f} ${UNABLE} ${err}`)
    }
}

/**
 * Função que testa se recursão foi utilizada
 * em uma dada função. 
 */
const checkRecursion = (f) => {
    const expr = (`${f}`.match(RegExp(`${f.name}`,'gm'))||[]).length > +(/function/.test(f))
    if (expr) return log(`${f.name} {recursion ${CHECK}}`)
    else return log(`${f.name} {recursion ${FAIL}}`)
}

 /**
  * Função que testa se algum operador específico
  * foi utilizado.
  */
const checkOp = (f) => (op) => {
    const expr = !`${f}`.match(RegExp(op, 'gm'))
    if (expr) return log(`${f.name} {avoid op ${CHECK}}`)
    else return log(`${f.name} {avoid op ${FAIL}}`)
}

module.exports = {assert,checkRecursion,checkOp}