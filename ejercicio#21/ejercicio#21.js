const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
  ];

  const mayores = []
  const menores = []

  for (const element of users){
    if (element.years >= 18){
        mayores.push(element.name + " es mayor de edad.")
    }

    else {
        menores.push(element.name + " es menor de edad.")
    }
  }

  console.log(mayores)
  console.log(menores)