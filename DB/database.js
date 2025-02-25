const products = [
    {
        name: "shoe1", price: 40, directory: ["./DB/images/shoes/shoe1.jpg"],
        category:"shoe", ranking: 4.5, quantity: 1, description: "good outing shoe, fits all, good fit for all"
    },
    {
        name: "shoe2", price: 46, quantity: 1, directory: ["./DB/images/shoes/shoe2.jpg"] ,
        category:"shoe", ranking: 4.3, description: "beta correct boot"
    },
    {
        name: "shoe3", quantity: 1, price: 40, directory : ["./DB/images/shoes/shoe3.jpg"],
        category:"shoe", ranking: 3.4, description: "a nice sporting shoe with a high sole of 3inch"
    },
    {
        name: "shoe4", quantity: 1, price: 40, directory: ["./DB/images/shoes/shoe4.jpg"],
        category:"shoe", ranking: 4.5, description: "regular outing shoe"
    },
    {
        name: "shoe5", quantity: 1, price: 40, directory: ["./DB/images/shoes/shoe5.jpg"] ,
        category:"shoe", ranking: 4.3, description: "trainer, water resistant"
    },
    {
        name: "shoe6", quantity: 1, price: 40, directory : ["./DB/images/shoes/shoe6.jpg"],
        category:"shoe", ranking: 3.4, description: "beta correct boot"
    },
    {
        name: "shoe7", quantity: 1, price: 40, directory : ["./DB/images/shoes/634567bb0cc79b407a89aae47eb86148.jpg"],
        category:"shoe", ranking: 3.4, description: "beta correct boot"
    },
    {
        name: "shoe8", quantity: 1, price: 40, directory : ["./DB/images/shoes/a1a719d445e39cc2c0c17901cd8a9351.jpg"],
        category:"shoe", ranking: 3.4, description: "beta correct boot"
    },
    {
        name: "shoe9", quantity: 1, price: 40, directory : ["./DB/images/shoes/b3f84e44529c641a26455d7efed5fd03.jpg"],
        category:"shoe", ranking: 3.4, description: "beta correct boot"
    },
    {
        name: "shoe10", quantity: 1, price: 40, directory : ["./DB/images/shoes/bd4652033750db074eb0f9d52dfc445a.jpg"],
        category:"shoe", ranking: 3.4, description: "beta correct boot"
    },
    {
        name: "shoe11", quantity: 1, price: 40, directory : ["./DB/images/shoes/bf6f59b280c18e2e1d4d34462dd42898.jpg"],
        category:"shoe", ranking: 3.4, description: "beta correct boot"
    },
    {
        name: "shoe12", quantity: 1, price: 40, directory : ["./DB/images/shoes/c200877d51efe688d6abff22dc66330a.jpg"],
        category:"shoe", ranking: 3.4, description: "beta correct boot"
    },
    {
        name: "shoe13", quantity: 1, price: 40, directory : ["./DB/images/shoes/cf6ee79928b1b78fc0b68433dbba1883.jpg"],
        category:"shoe", ranking: 3.4, description: "beta correct boot"
    },
    {
        name: "shoe14", quantity: 1, price: 40, directory : ["./DB/images/shoes/d52a94e993902a60940b76df8e600bb3.jpg"],
        category:"shoe", ranking: 3.4, description: "beta correct boot"
    },
    {
        name: "shoe15", quantity: 1, price: 40, directory : ["./DB/images/shoes/dcb3a2c78b30bafb90d1f33922154042.jpg"],
        category:"shoe", ranking: 3.4, description: "beta correct boot"
    },
    {
        name: "shoe16", quantity: 1, price: 40, directory : ["./DB/images/shoes/e135834f7a4be95ead8c3202fb3a8da9.jpg"],
        category:"shoe", ranking: 3.4, description: "beta correct boot"
    },
    {
        name: "shoe17", quantity: 1, price: 40, directory : ["./DB/images/shoes/ecf577233a1bf3d0ee490e67aae84532.jpg"],
        category:"shoe", ranking: 3.4, description: "beta correct boot"
    },
    {
        name: "shoe18", quantity: 1, price: 40, directory : ["./DB/images/shoes/edb25d1be295390618b7e1ef95111ce2.jpg"],
        category:"shoe", ranking: 3.4, description: "beta correct boot"
    },
    {
        name: "shoe19", quantity: 1, price: 40, directory : ["./DB/images/shoes/IMG-20241230-WA0020.jpg"],
        category:"shoe", ranking: 3.4, description: "beta correct boot"
    },
    {
        name: "shoe20", quantity: 1, price: 40, directory : ["./DB/images/shoes/IMG-20241230-WA0021.jpg"],
        category:"shoe", ranking: 3.4, description: "beta correct boot"
    },
    {
        name: "shoe21", quantity: 1, price: 40, directory : ["./DB/images/shoes/IMG-20241230-WA0022.jpg"],
        category:"shoe", ranking: 3.4, description: "beta correct boot"
    },
    {
        name: "shoe22", quantity: 1, price: 40, directory : ["./DB/images/shoes/IMG-20241230-WA0023.jpg"],
        category:"shoe", ranking: 3.4, description: "beta correct boot"
    },
    {
        name: "shoe23", quantity: 1, price: 40, directory : ["./DB/images/shoes/IMG-20241230-WA0024.jpg"],
        category:"shoe", ranking: 3.4, description: "beta correct boot"
    },
    {
        name: "shoe24", quantity: 1, price: 40, directory : ["./DB/images/shoes/IMG-20241230-WA0025.jpg"],
        category:"shoe", ranking: 3.4, description: "beta correct boot"
    },
    {
        name: "shoe25", quantity: 1, price: 40, directory : ["./DB/images/shoes/IMG-20241230-WA0026.jpg"],
        category:"shoe", ranking: 3.4, description: "beta correct boot"
    },

    {
        name: "skirt1", price: 140, directory: ["./DB/images/skirt/skirt1.jpg"],
        category:"skirt",ranking: 4.5, quantity: 1, description: "very nice skirt to wear, good for all ocassion"
    },
    {
        name: "skirt2" , price: 400, directory: ["./DB/images/skirt/skirt2.jpg"] ,
        category:"skirt", ranking: 4.3, quantity: 1, description: "very nice skirt to wear, good for all ocassion"
    },
    {
        name: "skirt3", price: 20, directory: ["./DB/images/skirt/skirt3.jpg"],
        category:"skirt", ranking: 3.4, quantity: 1, description: "very nice skirt to wear, good for all ocassion"
    },
    {
        name: "skirt4", price: 401, directory: ["./DB/images/skirt/skirt4.jpg"],
        category:"skirt",ranking: 3.4, quantity: 1, description: "very nice skirt to wear, good for all ocassion"
    },
    {
        name: "skirt5", price: 340, directory: ["./DB/images/skirt/skirt5.jpg"],
        category:"skirt", ranking: 3.4, quantity: 1, description: "very nice skirt to wear, good for all ocassion"
    },
    {
        name: "skirt6", price: 40, directory: ["./DB/images/skirt/skirt6.jpg"],
        category:"skirt", ranking: 3.4, quantity: 1, description: "very nice skirt to wear, good for all ocassion"
    },
    {
        name: "skirt7", price: 30, directory: ["./DB/images/skirt/skirt7.jpg"],
        category:"skirt",ranking: 3.4, quantity: 1, description: "very nice skirt to wear, good for all ocassion"
    },
    {
        name: "skirt8", price: 10, directory: ["./DB/images/skirt/skirt8.jpg"],
        category:"skirt",ranking: 3.4, quantity: 1, description: "very nice skirt to wear, good for all ocassion"
    },

    {
        name: "phone1", price: 140, directory: ["./DB/images/phones/phone1.jpg"],
        category:"phone",   ranking: 4.5, quantity: 1, description: "three camera's, color: pitch"
    },
    {
        name: "phone2" , price: 2440, directory: ["./DB/images/phones/phone2.jpg"] ,
        category:"phone",   ranking: 4.3, quantity: 1, description: "iphone 3 camera, 128gb storage and 6gb ram"
    },
    {
        name: "samsung s25", price: 150, directory: ["./DB/images/phones/phone3.jpg"],
        category:"phone",   ranking: 3.4, quantity: 1, description: "samsung s25, LCD, 500mp, 6000mAh"
    },
    {
        name: "smasung s24", price: 440, directory: ["./DB/images/phones/phone4.jpg"],
        category:"phone",   ranking: 3.4, quantity: 1, description: "samsung s25, LCD, 500mp, 6000mAh"
    },
    {
        name: "nokia", price: 440, directory: ["./DB/images/phones/phone5.jpg"],
        category:"phone",   ranking: 3.4, quantity: 1, description: "128gb storage and 6gb ram,  LCD, 500mp, 6000mAh"
    },
    {
        name: "phone6", price: 450, directory: ["./DB/images/phones/phone6.jpg"],
        category:"phone",   ranking: 3.4, quantity: 1, description: "very nice skirt to wear, good for all ocassion"
    },
    {
        name: "phone7", price: 404, directory: ["./DB/images/phones/phone7.jpg"],
        category:"phone",   ranking: 3.4, quantity: 1, description: "very nice skirt to wear, good for all ocassion"
    },
    {
        name: "phone8", price: 440, directory: ["./DB/images/phones/phone8.jpg"],
        category:"phone",   ranking: 3.4, quantity: 1, description: "very nice skirt to wear, good for all ocassion"
    },
    {
        name: "phone1", price: 140, directory: ["./DB/images/phones/phone9.jpg"],
        category:"phone",   ranking: 4.5, quantity: 1, description: "three camera's, color: pitch"
    },
    {
        name: "phone2" , price: 2440, directory: ["./DB/images/phones/phone10.jpg"] ,
        category:"phone",   ranking: 4.3, quantity: 1, description: "iphone 3 camera, 128gb storage and 6gb ram"
    },
    {
        name: "samsung s25", price: 150, directory: ["./DB/images/phones/phone11.jpg"],
        category:"phone",   ranking: 3.4, quantity: 1, description: "samsung s25, LCD, 500mp, 6000mAh"
    },
    {
        name: "smasung s24", price: 440, directory: ["./DB/images/phones/phone12.jpg"],
        category:"phone",   ranking: 3.4, quantity: 1, description: "samsung s25, LCD, 500mp, 6000mAh"
    },
    {
        name: "nokia", price: 440, directory: ["./DB/images/phones/phone13.jpg"],
        category:"phone",   ranking: 3.4, quantity: 1, description: "128gb storage and 6gb ram,  LCD, 500mp, 6000mAh"
    },
    {
        name: "phone14", price: 450, directory: ["./DB/images/phones/phone14.jpg"],
        category:"phone",   ranking: 3.4, quantity: 1, description: "very nice skirt to wear, good for all ocassion"
    },
    {
        name: "phone15", price: 404, directory: ["./DB/images/phones/phone15.jpg"],
        category:"phone",   ranking: 3.4, quantity: 1, description: "very nice skirt to wear, good for all ocassion"
    },
    {
        name: "phone16", price: 440, directory: ["./DB/images/phones/phone16.jpg"],
        category:"phone",   ranking: 3.4, quantity: 1, description: "very nice skirt to wear, good for all ocassion"
    },

    {
        name: "apartment1", price: 440, directory: ["./DB/images/apartment/apartment1.jpg"],
        category:"house",   ranking: 3.4, quantity: 1, description: "very nice apartment"
    },
    {
        name: "apartment3", price: 440, directory: ["./DB/images/apartment/apartment2.jpg"],
        category:"house",   ranking: 3.4, quantity: 1, description: "very nice apartment"
    },
    {
        name: "apartment2", price: 440, directory: ["./DB/images/apartment/apartment3.jpg"],
        category:"house",   ranking: 3.4, quantity: 1, description: "very nice apartment"
    },
    {
        name: "apartment4", price: 440, directory: ["./DB/images/apartment/apartment4.jpg"],
        category:"house",   ranking: 3.4, quantity: 1, description: "very nice apartment"
    },
    {
        name: "apartment5", price: 440, directory: ["./DB/images/apartment/apartment5.jpg"],
        category:"house",   ranking: 3.4, quantity: 1, description: "very nice apartment"
    },
    {
        name: "apartment6", price: 440, directory: ["./DB/images/apartment/apartment6.jpg"],
        category:"house",   ranking: 3.4, quantity: 1, description: "very nice apartment"
    },
    {
        name: "apartment7", price: 440, directory: ["./DB/images/apartment/apartment7.jpg"],
        category:"house",   ranking: 3.4, quantity: 1, description: "very nice apartment"
    },
    {
        name: "apartment8", price: 440, directory: ["./DB/images/apartment/apartment8.jpg"],
        category:"house",   ranking: 3.4, quantity: 1, description: "very nice apartment"
    },
    {
        name: "apartment9", price: 440, directory: ["./DB/images/apartment/apartment9.jpg"],
        category:"house",   ranking: 3.4, quantity: 1, description: "very nice apartment"
    },
    {
        name: "apartment10", price: 440, directory: ["./DB/images/apartment/apartment10.jpg"],
        category:"house",   ranking: 3.4, quantity: 1, description: "very nice apartment"
    },
    {
        name: "apartment11", price: 440, directory: ["./DB/images/apartment/apartment11.jpg"],
        category:"house",   ranking: 3.4, quantity: 1, description: "very nice apartment"
    },
    {
        name: "apartment13", price: 440, directory: ["./DB/images/apartment/apartment12.jpg"],
        category:"house",   ranking: 3.4, quantity: 1, description: "very nice apartment"
    },
    {
        name: "apartment12", price: 440, directory: ["./DB/images/apartment/apartment13.jpg"],
        category:"house",   ranking: 3.4, quantity: 1, description: "very nice apartment"
    },
    {
        name: "apartment14", price: 440, directory: ["./DB/images/apartment/apartment14.jpg"],
        category:"house",   ranking: 3.4, quantity: 1, description: "very nice apartment"
    },
    {
        name: "apartment15", price: 440, directory: ["./DB/images/apartment/apartment15.jpg"],
        category:"house",   ranking: 3.4, quantity: 1, description: "very nice apartment"
    },
    {
        name: "apartment16", price: 440, directory: ["./DB/images/apartment/apartment16.jpg"],
        category:"house",   ranking: 3.4, quantity: 1, description: "very nice apartment"
    },
    {
        name: "apartment17", price: 440, directory: ["./DB/images/apartment/apartment17.jpg"],
        category:"house",   ranking: 3.4, quantity: 1, description: "very nice apartment"
    },
    {
        name: "apartment18", price: 440, directory: ["./DB/images/apartment/apartment18.jpg"],
        category:"house",   ranking: 3.4, quantity: 1, description: "very nice apartment"
    },
    {
        name: "apartment19", price: 440, directory: ["./DB/images/apartment/apartment19.jpg"],
        category:"house",   ranking: 3.4, quantity: 1, description: "very nice apartment"
    },
    {
        name: "apartment20", price: 440, directory: ["./DB/images/apartment/apartment20.jpg"],
        category:"house",   ranking: 3.4, quantity: 1, description: "very nice apartment"
    },
    {
        name: "apartment21", price: 440, directory: ["./DB/images/apartment/apartment21.jpg"],
        category:"house",   ranking: 3.4, quantity: 1, description: "very nice apartment"
    },
    {
        name: "apartment22", price: 440, directory: ["./DB/images/apartment/apartment22.jpg"],
        category:"house",   ranking: 3.4, quantity: 1, description: "very nice apartment"
    },
    {
        name: "apartment23", price: 440, directory: ["./DB/images/apartment/apartment23.jpg"],
        category:"house",   ranking: 3.4, quantity: 1, description: "very nice apartment"
    },
    {
        name: "apartment24", price: 440, directory: ["./DB/images/apartment/apartment24.jpg"],
        category:"house",   ranking: 3.4, quantity: 1, description: "very nice apartment"
    },
    {
        name: "apartment25", price: 440, directory: ["./DB/images/apartment/apartment25.jpg"],
        category:"house",   ranking: 3.4, quantity: 1, description: "very nice apartment"
    },
    {
        name: "apartment26", price: 440, directory: ["./DB/images/apartment/apartment26.jpg"],
        category:"house",   ranking: 3.4, quantity: 1, description: "very nice apartment"
    },
    {
        name: "apartment27", price: 440, directory: ["./DB/images/apartment/apartment27.jpg"],
        category:"house",   ranking: 3.4, quantity: 1, description: "very nice apartment"
    },
    {
        name: "apartment28", price: 440, directory: ["./DB/images/apartment/apartment28.jpg"],
        category:"house",   ranking: 3.4, quantity: 1, description: "very nice apartment"
    },
    {
        name: "apartment29", price: 440, directory: ["./DB/images/apartment/apartment29.jpg"],
        category:"house",   ranking: 3.4, quantity: 1, description: "very nice apartment"
    },
    {
        name: "apartment30", price: 440, directory: ["./DB/images/apartment/apartment30.jpg"],
        category:"house",   ranking: 3.4, quantity: 1, description: "very nice apartment"
    },
    {
        name: "apartment31", price: 440, directory: ["./DB/images/apartment/apartment31.jpg"],
        category:"house",   ranking: 3.4, quantity: 1, description: "very nice apartment"
    },
    {
        name: "apartment32", price: 440, directory: ["./DB/images/apartment/apartment32.jpg"],
        category:"house",   ranking: 3.4, quantity: 1, description: "very nice apartment"
    },
    {
        name: "apartment33", price: 440, directory: ["./DB/images/apartment/apartment33.jpg"],
        category:"house",   ranking: 3.4, quantity: 1, description: "very nice apartment"
    },
    {
        name: "apartment34", price: 440, directory: ["./DB/images/apartment/apartment3.jpg"],
        category:"house",   ranking: 3.4, quantity: 1, description: "very nice apartment"
    },
    
    {
        name: "cap1", price: 440, directory: ["./DB/images/cap/cap1.jpg"],
        category:"cap",   ranking: 3.4, quantity: 1, description: "very nice cap"
    },
    {
        name: "cap2", price: 440, directory: ["./DB/images/cap/cap2.jpg"],
        category:"cap",   ranking: 3.4, quantity: 1, description: "very nice cap"
    },
    {
        name: "cap3", price: 440, directory: ["./DB/images/cap/cap3.jpg"],
        category:"cap",   ranking: 3.4, quantity: 1, description: "very nice cap"
    },
    {
        name: "cap4", price: 440, directory: ["./DB/images/cap/cap4.jpg"],
        category:"cap",   ranking: 3.4, quantity: 1, description: "very nice cap"
    },
    {
        name: "cap5", price: 440, directory: ["./DB/images/cap/cap5.jpg"],
        category:"cap",   ranking: 3.4, quantity: 1, description: "very nice cap"
    },
    {
        name: "cap6", price: 440, directory: ["./DB/images/cap/cap6.jpg"],
        category:"cap",   ranking: 3.4, quantity: 1, description: "very nice cap"
    },
    {
        name: "cap7", price: 440, directory: ["./DB/images/cap/cap7.jpg"],
        category:"cap",   ranking: 3.4, quantity: 1, description: "very nice cap"
    },

    {
        name: "facinator", price: 440, directory: ["./DB/images/facinator/facinator1.jpg"],
        category:"facinator",   ranking: 3.4, quantity: 1, description: "very nice facinator"
    },
    {
        name: "yellow facinator", price: 440, directory: ["./DB/images/facinator/facinator2.jpg"],
        category:"facinator",   ranking: 3.4, quantity: 1, description: "very nice facinator"
    },
    {
        name: "facinator", price: 440, directory: ["./DB/images/facinator/facinator3.jpg"],
        category:"facinator",   ranking: 3.4, quantity: 1, description: "very nice facinator"
    },
    {
        name: "facinator", price: 440, directory: ["./DB/images/facinator/facinator4.jpg"],
        category:"facinator",   ranking: 3.4, quantity: 1, description: "very nice facinator"
    },
    {
        name: "facinator", price: 440, directory: ["./DB/images/facinator/facinator5.jpg"],
        category:"facinator",   ranking: 3.4, quantity: 1, description: "very nice facinator"
    },

    {
        name: "glasses", price: 440, directory: ["./DB/images/glasses/glasses.jpg"],
        category:"glass",   ranking: 3.4, quantity: 1, description: "very nice eye glass"
    },
    {
        name: "glass1", price: 440, directory: ["./DB/images/glasses/glass1.jpg"],
        category:"glass",   ranking: 3.4, quantity: 1, description: "very nice eye glass"
    },
    {
        name: "glass2", price: 440, directory: ["./DB/images/glasses/glass2.jpg"],
        category:"glass",   ranking: 3.4, quantity: 1, description: "very nice eye glass"
    },
    {
        name: "glass3", price: 440, directory: ["./DB/images/glasses/glass3.jpg"],
        category:"glass",   ranking: 3.4, quantity: 1, description: "very nice eye glass"
    },
    {
        name: "glass4", price: 440, directory: ["./DB/images/glasses/glass4.jpg"],
        category:"glass",   ranking: 3.4, quantity: 1, description: "very nice eye glass"
    },

    {
        name: "hp laptop", price: 440, directory: ["./DB/images/laptop/1b9b243beef8cfb68bc7117a889eb991.jpg"],
        category:"laptop",   ranking: 3.4, quantity: 1, description: "core i7 laptop, 5gen"
    },
    {
        name: "hp laptop", price: 440, directory: ["./DB/images/laptop/9de1f2591223a29c2366cf87ff8035dc.jpg"],
        category:"laptop",   ranking: 3.4, quantity: 1, description: "core i7 laptop, 5gen"
    },
    {
        name: "hp laptop", price: 440, directory: ["./DB/images/laptop/13f9b2ad99f676874f1c4560b08b277a.jpg"],
        category:"laptop",   ranking: 3.4, quantity: 1, description: "core i7 laptop, 5gen, 1TB"
    },
    {
        name: "Mac Book", price: 440, directory: ["./DB/images/laptop/30ad0478e14c689ac56871eea4d2ee68.jpg"],
        category:"laptop",   ranking: 3.4, quantity: 1, description: "core i7 laptop, 5gen"
    },
    {
        name: "Mac Book", price: 440, directory: ["./DB/images/laptop/29f399aec2699d49113314f1e96d5063.jpg"],
        category:"laptop",   ranking: 3.4, quantity: 1, description: "core i7 laptop, 5gen"
    },
    {
        name: "Mac Book", price: 440, directory: ["./DB/images/laptop/362f47c55ccd45c5aea11ca12b018e04.jpg"],
        category:"laptop",   ranking: 3.4, quantity: 1, description: "core i7 laptop, 5gen"
    },
    {
        name: "hp laptop", price: 440, directory: ["./DB/images/laptop/112740860f91b8b3b57f5a9de70a5b51.jpg"],
        category:"laptop",   ranking: 3.4, quantity: 1, description: "core i7 laptop, 5gen, 1TB"
    },
    {
        name: "hp laptop", price: 440, directory: ["./DB/images/laptop/b26339818f764f1e7e9b6299b89082ab.jpg"],
        category:"laptop",   ranking: 3.4, quantity: 1, description: "core i7 laptop, 5gen"
    },
    {
        name: "hp laptop", price: 440, directory: ["./DB/images/laptop/c20a0f042ddb8e17ec3a6670329c8990.jpg"],
        category:"laptop",   ranking: 3.4, quantity: 1, description: "core i7 laptop, 5gen"
    },
    {
        name: "hp laptop", price: 440, directory: ["./DB/images/laptop/c84a2be2b4c26377fe0a7047f2f7d3b1.jpg"],
        category:"laptop",   ranking: 3.4, quantity: 1, description: "core i7 laptop, 5gen, 1TB"
    },
    {
        name: "hp laptop", price: 440, directory: ["./DB/images/laptop/f6cc8d80d11200389d581b991aa3d422.jpg"],
        category:"laptop",   ranking: 3.4, quantity: 1, description: "core i7 laptop, 5gen"
    },
    {
        name: "hp laptop", price: 440, directory: ["./DB/images/laptop/feb638a8d5cd6baa81e2b5dad6020586.jpg"],
        category:"laptop",   ranking: 3.4, quantity: 1, description: "core i7 laptop, 5gen, 1TB"
    },

    {
        name: "shirt", price: 440, directory: ["./DB/images/shirt/2ca8e85a36ea59cad808754a58af4639.jpg"],
        category:"shirt",   ranking: 3.4, quantity: 1, description: "shirt"
    },
    {
        name: "shirt", price: 440, directory: ["./DB/images/shirt/4c6ea85bec9a25c43b159af08d4361cb.jpg"],
        category:"shirt",   ranking: 3.4, quantity: 1, description: "shirt"
    },
    {
        name: "shirt", price: 440, directory: ["./DB/images/shirt/05ddded0d9d37b024e0a270726bb3699.jpg"],
        category:"shirt",   ranking: 3.4, quantity: 1, description: "shirt"
    },
    {
        name: "shirt", price: 440, directory: ["./DB/images/shirt/6ee166cb1fa64a9101f224a1933efc0a.jpg"],
        category:"shirt",   ranking: 3.4, quantity: 1, description: "military shirt"
    },
    {
        name: "shirt", price: 440, directory: ["./DB/images/shirt/9bfa35e3ec1c863abe376a2439093a09.jpg"],
        category:"shirt",   ranking: 3.4, quantity: 1, description: "shirt"
    },
    {
        name: "shirt", price: 440, directory: ["./DB/images/shirt/c47776174699002ec20eea06f2b34e84.jpg"],
        category:"shirt",   ranking: 3.4, quantity: 1, description: "shirt"
    },
    {
        name: "shirt", price: 440, directory: ["./DB/images/shirt/28ea732f8cbcca27411f656947f5c688.jpg"],
        category:"shirt",   ranking: 3.4, quantity: 1, description: "shirt"
    },
    {
        name: "shirt", price: 440, directory: ["./DB/images/shirt/31eb45f0dd3fd99bd33995801a046439.jpg"],
        category:"shirt",   ranking: 3.4, quantity: 1, description: "shirt"
    },
    {
        name: "shirt", price: 440, directory: ["./DB/images/shirt/27458324b56dcc8e149258f4508601d9.jpg"],
        category:"shirt",   ranking: 3.4, quantity: 1, description: "shirt"
    },
    {
        name: "shirt", price: 440, directory: ["./DB/images/shirt/906dd405522936b3c9f0dc50c0196309.jpg"],
        category:"shirt",   ranking: 3.4, quantity: 1, description: "shirt"
    },
    {
        name: "shirt", price: 440, directory: ["./DB/images/shirt/dd0de8d911e45bb6b0b5c36a963e06b6.jpg"],
        category:"shirt",   ranking: 3.4, quantity: 1, description: "shirt"
    },
    {
        name: "shirt", price: 440, directory: ["./DB/images/shirt/ddde149b1134c4387cd174a99b8d2e31.jpg"],
        category:"shirt",   ranking: 3.4, quantity: 1, description: "shirt"
    },
    {
        name: "shirt", price: 440, directory: ["./DB/images/shirt/b4136c5346d0503a0a4bbadb8ce48bfd.jpg"],
        category:"shirt",   ranking: 3.4, quantity: 1, description: "shirt"
    },
    {
        name: "shirt", price: 440, directory: ["./DB/images/shirt/c47776174699002ec20eea06f2b34e84.jpg"],
        category:"shirt",   ranking: 3.4, quantity: 1, description: "shirt"
    },
    {
        name: "shirt", price: 440, directory: ["./DB/images/shirt/f22c8447407fdc73ed041ec0472a538b.jpg"],
        category:"shirt",   ranking: 3.4, quantity: 1, description: "shirt"
    },
    {
        name: "shirt", price: 440, directory: ["./DB/images/shirt/e6d29e0e01c8df55e11112ce99d93631.jpg"],
        category:"shirt",   ranking: 3.4, quantity: 1, description: "shirt"
    },
    {
        name: "shirt", price: 440, directory: ["./DB/images/shirt/e16a25deb969797f9181464968fac6b8.jpg"],
        category:"shirt",   ranking: 3.4, quantity: 1, description: "shirt"
    },
    {
        name: "shirt", price: 440, directory: ["./DB/images/shirt/265a7add90f5682fc56ad7ccb656fd01.jpg"],
        category:"shirt",   ranking: 3.4, quantity: 1, description: "shirt"
    },

]



export default products;

console.log(products.length)