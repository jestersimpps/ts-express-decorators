/**
 * @module common/mvc
 */ /** */

import {BadRequest} from "ts-httpexceptions";

/**
 * @private
 */
export class ParseExpressionError extends BadRequest {

    constructor(name: string, expression: string | RegExp, message?: string) {
        super(ParseExpressionError.buildMessage(name, expression, message));
    }

    /**
     *
     * @param name
     * @param expression
     * @param message
     * @returns {string}
     */
    static buildMessage(name: string, expression: string | RegExp, message?: string) {
        name = name.toLowerCase().replace(/parse|params|filter/gi, "");

        return `Bad request, parameter request.${name}.${expression}. ${message ? message : ""}`.trim();
    }
}