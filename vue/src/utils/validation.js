// 全局正则表达式方法

// 仅数字
export function numInput(input) {
    const regex = /^\d+$/; // 仅允许数字
    return regex.test(input);
}

// 名称空格限制
export function noblankInput(input) {
    // 匹配规则：不能以空格开头或结尾，英文和数字之间可以有单个空格，中文字符之间不能有空格
    const regex = /^(?! )(?:[A-Za-z0-9]+(?: [A-Za-z0-9]+)*)*$|^(?! )[\u4e00-\u9fa5]+(?! )$/;
    return regex.test(input);
}

export function validateMax100Chars(input) {
    // 匹配规则：允许任意字符但不超过 100 个字符
    const regex = /^.{0,100}$/;
    return regex.test(input);
}

export function validateCodeFormat(input) {
    // 匹配规则：以1-3个大写字母开头，后跟最多10位数字
    const regex = /^[A-Z]{1,3}\d{1,10}$/;
    return regex.test(input);
}

export function validateNoChinese(input) {
    // 匹配规则：不允许包含中文字符
    const regex = /^[^\u4e00-\u9fa5]*$/;
    return regex.test(input);
}

export function validateAlphanumeric(input) {
    // 匹配规则：仅允许数字和英文字符（包括大小写字母）
    const regex = /^[A-Za-z0-9]+$/;
    return regex.test(input);
}

