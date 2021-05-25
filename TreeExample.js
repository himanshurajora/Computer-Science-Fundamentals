/**
 * @author Himanshu Jangid 
 * @himanshurajora
 * @summary
 * Chatbot Tree
 * 
 */
class Chatbot{
    /** 
     * @param {string} question 
     */
    constructor(question){
        this.question = question
        this.yes = null
        this.no = null
    }

    /**
     * 
     * @param {number} value value for the new node to add
     * @returns {Tree} the new tree formed by insertion  
     */

    insertChild(question, side){
        const newQuestion = new Tree(question);
        this[side] = side;
        return newQuestion;
    }

}


