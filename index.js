/**
 * @param type
 * @param url
 * @param data
 * @param callback
 */
function callAjax(type, url, data, callback){

    /** compatible with IE7+, Firefox, Chrome, Opera, Safari */
    var ajaxRequest = new XMLHttpRequest();

    ajaxRequest.onreadystatechange = function () {
        var requestIsDone = 4;
        var successReturn = 200;
        if (ajaxRequest.readyState == requestIsDone) {
            if(ajaxRequest.status == successReturn){
                if(typeof(callback) == 'function'){
                    callback(ajaxRequest.responseText);
                }
            }else{
                console.log('Error');
            }
        }
    };

    ajaxRequest.open(type, url);
    ajaxRequest.send(makeUrlQuery(data));
}

/**
 * @param data
 * @returns {*}
 */
function makeUrlQuery(data)
{
    if(!data){
        return null;
    }

    var list = [];

    for(var name in data){
        list.push(name + '=' + data[name]);
    }

    return list.join('&');
}


/**
 * @param url
 * @param callback
 */
function ajaxGET(url, callback){
    callAjax('GET', url, null, callback);
}

/**
 * @param url
 * @param data
 * @param callback
 */
function ajaxPOST(url, data, callback){
    callAjax('POST', url, data, callback);
}

/**
 * @param url
 * @param data
 * @param callback
 */
function ajaxPUT(url, data, callback){
    callAjax('PUT', url, data, callback);
}

/**
 * @param url
 * @param data
 * @param callback
 */
function ajaxDELETE(url, data, callback){
    callAjax('DELETE', url, data, callback);
}

module.exports =
{
    get : ajaxGET,
    post : ajaxPOST,
    put : ajaxPUT,
    delete : ajaxDELETE
};