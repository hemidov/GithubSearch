

class Storage {


    static getStorage() {
        let arr;
        if (localStorage.getItem("key") === null) {
            arr = [];

        }
        else {
            arr = JSON.parse(localStorage.getItem("key"))
        }
        return arr;
    }

    static setStorage(params) {
        let arr = Storage.getStorage();

        if (arr.indexOf(params) === -1) {
            arr.push(params); 
        }

        

        localStorage.setItem("key", JSON.stringify(arr))


    }

//   static  clearAll() {
        
//         localStorage.removeItem("key");
//       localStorage.clear();

//     }
}