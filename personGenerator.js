const month =['Января' , 'Февраля' , 'Марта' , 'Апреля' , 'Мая' , 'Июня' , 'Июля' , 'Августа' , 'Сентября' , 'Октября' , 'Ноября' , 'Декабря'];
let randomYear=0;
const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Данил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFeMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Мария",
            "id_3": "Иванна",
            "id_4": "Арина",
            "id_5": "Дарья",
            "id_6": "Нина",
            "id_7": "Марина",
            "id_8": "Дульсинея",
            "id_9": "Ирина",
            "id_10": "Анна"
        }
    }`,

    secondNameFeMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Сергеевна",
            "id_2": "Борисовна",
            "id_3": "Петровна",
            "id_4": "Ивановна",
            "id_5": "Михайловна",
            "id_6": "Федоровна",
            "id_7": "Олеговна",
            "id_8": "Иосифовна",
            "id_9": "Валерьевна",
            "id_10": "Андреевна"
        }
    }`,
    
    secondNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Петрович",
            "id_2": "Иванович",
            "id_3": "Семенович",
            "id_4": "Кузмич",
            "id_5": "Ильич",
            "id_6": "Константинович",
            "id_7": "Александрович",
            "id_8": "Олегович",
            "id_9": "Алексеевич",
            "id_10": "Александрович"
        }
    }`,
    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Грузчик",
            "id_2": "Пилот",
            "id_3": "Космонавт",
            "id_4": "Маляр",
            "id_5": "Скульптор",
            "id_6": "Водитель",
            "id_7": "Полицейский",
            "id_8": "Преподаватель",
            "id_9": "Агроном",
            "id_10": "Садовник"
        }
    }`,
    professionFeMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Ткачиха",
            "id_2": "Стюардесса",
            "id_3": "Космонавт",
            "id_4": "Маляр",
            "id_5": "Скульптор",
            "id_6": "Повар",
            "id_7": "Контролер",
            "id_8": "Преподаватель",
            "id_9": "Агроном",
            "id_10": "Доярка"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {
        if (this.person.gender==this.GENDER_FEMALE) {
            return this.randomValue(this.firstNameFeMaleJson)
        }
            else 
            return this.randomValue(this.firstNameMaleJson);
    },


    randomSurname: function() {
        return this.randomValue(this.surnameJson);
    },

    randomGender: function () {
        let gender;
        this.randomIntNumber (1, 0) ? gender=this.GENDER_MALE : gender=this.GENDER_FEMALE;// проще было if использовать
        return gender;
    }, 

    randomDate: function() {      
        const randomNow=this.randomIntNumber ((+Date.now()), -1576800000000);
        let   randomDate = new Date(randomNow).toLocaleDateString();
        const monthNumber=parseInt(randomDate.substring(3, 5));
        const randomMonth= month[monthNumber-1] ;
        const randomDay=randomDate.substring(0, 2);
              randomYear=parseInt(randomDate.substring(6, 10));
              randomDate=randomDay+" "+randomMonth+" "+randomYear+"г.";
        return randomDate;
    },

    randomSecondName: function() {
        if (this.person.gender==this.GENDER_FEMALE) {
            return this.randomValue(this.secondNameFeMaleJson)
        } else 
            return this.randomValue(this.secondNameMaleJson)
    },

    randomProfession: function() {
        let   todayYear =parseInt((new Date(Date.now()).toLocaleDateString()).substring(6, 10));
        if ((todayYear-randomYear>=65&&this.person.gender==this.GENDER_MALE)||(todayYear-randomYear>=60&&this.person.gender==this.GENDER_FEMALE)) {
            return this.randomValue="Пенсионер";
              } else
              if (todayYear-randomYear<=16) {
                  return this.randomValue="Не работает";
                  } else
                  if (this.person.gender==this.GENDER_FEMALE) {
                      return this.randomValue(this.professionFeMaleJson)
                      } else 
                      return this.randomValue(this.professionMaleJson);
    },
    
    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender(); 
        this.person.firstName = this.randomFirstName();
        this.person.gender==this.GENDER_FEMALE ? this.person.surName= this.randomSurname()+"а" : this.person.surName= this.randomSurname();
        this.person.date=this.randomDate();
        this.person.secondName= this.randomSecondName();
        this.person.randomProfession= this.randomProfession();
        return this.person;
    }
};
