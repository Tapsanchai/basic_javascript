const GetCookieValue = (token_name) => {
    try {
        let cookie_str_all = 'sadfsadf;asdfweqrwr;csrftoken=tsadfsg';
        let cookie_lt_all = cookie_str_all.split(';');
        let cookie_val = '';

        cookie_lt_all.forEach(item => {
            let cookie_trm = item.trim();
            if (cookie_trm) {
                let new_token_name = `${token_name}=`;
                if (cookie_trm.substring(0, token_name.length + 1) === new_token_name) {
                    cookie_val = cookie_trm.replace(new_token_name, '');
                    return false;
                }
            }
        });
        return cookie_val;
    } catch (err) {
        console.log(err);
        return '';
    }  
}

const CallFetchAPI = async (url_path, method_val, obj_val) => {
    try {
        const res_data = await fetch(url_path, {
            headers: { 
                'Content-Type': 'application/json',
                'X-CSRFToken': GetCookieValue('csrftoken')
            }, 
            method: method_val,
            credentials: 'include',
            body: JSON.stringify(obj_val)
        });
        res_data.then(data => {
            if (data.status === 200) {
                return res_data.json();
            } else {
                return null;
            }
        })
    } catch (error) {
        console.log(error);
    }
}


// let obj_data = {
//     name: 'A',
//     number: 1,
// };
// let res_json = await CallFetchAPI('/api/', 'POST', {data_payload: obj_data});

// let old_lt = ['a','b']
// let new_lt = ['b']
// let deff_val = old_lt.filter(x => ! new_lt.includes(x));
// console.log(deff_val);


let names = ['a','b','a','c'];
// let dup = [...new Set(names)];

let dup = names => [...new Set(names)];
console.log(dup(names));
