import {
  Http,
  BaseRequestOptions,
  Response,
  ResponseOptions,
  RequestMethod,
  XHRBackend,
  RequestOptions
} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';

export function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {
  // array in local storage for registered users
  const users = [
    {
      firstName: 'Tom',
      surname: 'Roberts',
      dateOfBirth: '21/04/1986',
      age: '29',
      salary: '59,783.00',
      takeHome: '41,999.84',
      id: '1',
      incomTax: '13,316.20',
      natInsurance: '4,466.96',
      title: 'Mr.',
      gender: 'male'
    },
    {
      firstName: 'Luid',
      surname: 'Singh',
      dateOfBirth: '16/04/1979',
      age: '36',
      salary: '50,739.00',
      takeHome: '36,754.32',
      id: '2',
      incomTax: '9,698.60',
      natInsurance: '4,286.08',
      title: 'Mr.',
      gender: 'male'
    },
    {
      firstName: 'Mohammed',
      surname: 'John',
      dateOfBirth: '18/05/1992',
      age: '23',
      salary: '26,389.00',
      takeHome: '21,032.00',
      id: '3',
      incomTax: '3,157.80',
      natInsurance: '2,199.48',
      title: 'Mr.',
      gender: 'male'
    },
    {
      firstName: 'Owen',
      surname: 'Humphreys',
      dateOfBirth: '15/05/1972',
      age: '43',
      salary: '31,336.00',
      takeHome: '24,395.68',
      id: '4',
      incomTax: '4,147.20',
      natInsurance: '2,793.12',
      title: 'Mr.',
      gender: 'male'
    },
    {
      firstName: 'Holly',
      surname: 'Gregory',
      dateOfBirth: '31/01/1993',
      age: '22',
      salary: '60,176.00',
      takeHome: '42,227.78',
      id: '5',
      incomTax: '13,473.40',
      natInsurance: '4,474.82',
      title: 'Ms.',
      gender: 'female'
    },
    {
      firstName: 'Skye',
      surname: 'Lawrence',
      dateOfBirth: '22/06/1979',
      age: '36',
      salary: '42,552.00',
      takeHome: '32,005.86',
      id: '6',
      incomTax: '6,423.80',
      natInsurance: '4,122.34',
      title: 'Mrs.',
      gender: 'female'
    },
    {
      firstName: 'Tom',
      surname: 'Carey',
      dateOfBirth: '03/06/1994',
      age: '21',
      salary: '75,316.00',
      takeHome: '51,008.98',
      id: '7',
      incomTax: '19,529.40',
      natInsurance: '4,777.62',
      title: 'Mr.',
      gender: 'male'
    },
    {
      firstName: 'Katherine',
      surname: 'Goddard',
      dateOfBirth: '20/07/1970',
      age: '45',
      salary: '16,203.00',
      takeHome: '14,105.24',
      id: '8',
      incomTax: '1,120.60',
      natInsurance: '977.16',
      title: 'Mrs.',
      gender: 'female'
    },
    {
      firstName: 'Rachel',
      surname: 'Lambert',
      dateOfBirth: '16/09/1987',
      age: '28',
      salary: '17,542.00',
      takeHome: '15,015.76',
      id: '9',
      incomTax: '1,388.40',
      natInsurance: '1,137.84',
      title: 'Ms.',
      gender: 'female'
    },
    {
      firstName: 'Daniel',
      surname: 'Abbott',
      dateOfBirth: '08/12/1972',
      age: '43',
      salary: '31,100.00',
      takeHome: '24,235.20',
      id: '10',
      incomTax: '4,100.00',
      natInsurance: '2,764.80',
      title: 'Mr.',
      gender: 'male'
    },
    {
      firstName: 'Harley',
      surname: 'Hobbs',
      dateOfBirth: '26/01/1988',
      age: '27',
      salary: '37,086.00',
      takeHome: '28,305.68',
      id: '11',
      incomTax: '5,297.20',
      natInsurance: '3,483.12',
      title: 'Mr.',
      gender: 'male'
    },
    {
      firstName: 'Abby',
      surname: 'Hopkins',
      dateOfBirth: '02/07/1976',
      age: '39',
      salary: '82,443.00',
      takeHome: '55,142.64',
      id: '12',
      incomTax: '22,380.20',
      natInsurance: '4,920.16',
      title: 'Ms.',
      gender: 'female'
    },
    {
      firstName: 'Evie',
      surname: 'Horton',
      dateOfBirth: '08/01/1995',
      age: '21',
      salary: '86,390.00',
      takeHome: '57,431.90',
      id: '13',
      incomTax: '23,959.00',
      natInsurance: '4,999.10',
      title: 'Mrs.',
      gender: 'female'
    },
    {
      firstName: 'Hayden',
      surname: 'Turnbull',
      dateOfBirth: '15/05/1966',
      age: '49',
      salary: '22,432.00',
      takeHome: '18,340.96',
      id: '14',
      incomTax: '2,366.40',
      natInsurance: '1,724.64',
      title: 'Mr.',
      gender: 'male'
    },
    {
      firstName: 'Grace',
      surname: 'Glover',
      dateOfBirth: '25/10/1996',
      age: '19',
      salary: '78,828.00',
      takeHome: '53,045.94',
      id: '15',
      incomTax: '20,934.20',
      natInsurance: '4,847.86',
      title: 'Ms.',
      gender: 'female'
    },
    {
      firstName: 'Harley',
      surname: 'Andrews',
      dateOfBirth: '18/02/1987',
      age: '28',
      salary: '73,900.00',
      takeHome: '50,187.70',
      id: '16',
      incomTax: '18,963.00',
      natInsurance: '4,749.30',
      title: 'Dr.',
      gender: 'male'
    },
    {
      firstName: 'Victoria',
      surname: 'Norris',
      dateOfBirth: '09/03/1975',
      age: '40',
      salary: '71,432.00',
      takeHome: '48,756.26',
      id: '17',
      incomTax: '17,975.80',
      natInsurance: '4,699.94',
      title: 'Ms.',
      gender: 'female'
    },
    {
      firstName: 'Amelia',
      surname: 'Sullivan',
      dateOfBirth: '24/12/1964',
      age: '51',
      salary: '25,067.00',
      takeHome: '20,132.76',
      id: '18',
      incomTax: '2,893.40',
      natInsurance: '2,040.84',
      title: 'Ms.',
      gender: 'female'
    },
    {
      firstName: 'Isabel',
      surname: 'Dyer',
      dateOfBirth: '03/06/1996',
      age: '19',
      salary: '27,904.00',
      takeHome: '22,061.92',
      id: '19',
      incomTax: '3,460.80',
      natInsurance: '2,381.28',
      title: 'Mrs.',
      gender: 'female'
    },
    {
      firstName: 'Liam',
      surname: 'Gibbons',
      dateOfBirth: '12/03/1971',
      age: '44',
      salary: '76,120.00',
      takeHome: '51,475.30',
      id: '20',
      incomTax: '19,851.00',
      natInsurance: '4,793.70',
      title: 'Mr.',
      gender: 'male'
    },
    {
      firstName: 'Elliot',
      surname: 'Herbert',
      dateOfBirth: '03/04/1991',
      age: '24',
      salary: '40,092.00',
      takeHome: '30,349.76',
      id: '21',
      incomTax: '5,898.40',
      natInsurance: '3,843.84',
      title: 'Mr.',
      gender: 'male'
    },
    {
      firstName: 'Gabriel',
      surname: 'Sheppard',
      dateOfBirth: '14/07/1987',
      age: '28',
      salary: '50,725.00',
      takeHome: '36,746.20',
      id: '22',
      incomTax: '9,693.00',
      natInsurance: '4,285.80',
      title: 'Mr.',
      gender: 'male'
    },
    {
      firstName: 'Francesca',
      surname: 'Patel',
      dateOfBirth: '12/10/1990',
      age: '25',
      salary: '25,986.00',
      takeHome: '20,757.68',
      id: '23',
      incomTax: '3,077.20',
      natInsurance: '2,151.12',
      title: 'Ms.',
      gender: 'female'
    },
    {
      firstName: 'Rosie',
      surname: 'Bryan',
      dateOfBirth: '04/02/1968',
      age: '47',
      salary: '34,702.00',
      takeHome: '26,684.56',
      id: '24',
      incomTax: '4,820.40',
      natInsurance: '3,197.04',
      title: 'Mrs.',
      gender: 'female'
    },
    {
      firstName: 'Maddison',
      surname: 'Bull',
      dateOfBirth: '29/10/1979',
      age: '36',
      salary: '66,131.00',
      takeHome: '45,681.68',
      id: '25',
      incomTax: '15,855.40',
      natInsurance: '4,593.92',
      title: 'Ms.',
      gender: 'female'
    },
    {
      firstName: 'Luis',
      surname: 'Ford',
      dateOfBirth: '02/11/1967',
      age: '48',
      salary: '55,963.00',
      takeHome: '39,784.24',
      id: '26',
      incomTax: '11,788.20',
      natInsurance: '4,390.56',
      title: 'Mr.',
      gender: 'male'
    },
    {
      firstName: 'Logan',
      surname: 'Ball',
      dateOfBirth: '14/12/1981',
      age: '34',
      salary: '78,716.00',
      takeHome: '52,980.98',
      id: '27',
      incomTax: '20,889.40',
      natInsurance: '4,845.62',
      title: 'Dr.',
      gender: 'male'
    },
    {
      firstName: 'Maya',
      surname: 'Hancock',
      dateOfBirth: '30/12/1967',
      age: '48',
      salary: '35,345.00',
      takeHome: '27,121.80',
      id: '28',
      incomTax: '4,949.00',
      natInsurance: '3,274.20',
      title: 'Ms.',
      gender: 'female'
    },
    {
      firstName: 'Niamh',
      surname: 'Gibbs',
      dateOfBirth: '29/07/1987',
      age: '28',
      salary: '44,479.00',
      takeHome: '33,123.52',
      id: '29',
      incomTax: '7,194.60',
      natInsurance: '4,160.88',
      title: 'Mrs.',
      gender: 'female'
    },
    {
      firstName: 'Morgan',
      surname: 'Taylor',
      dateOfBirth: '16/09/1993',
      age: '22',
      salary: '63,299.00',
      takeHome: '44,039.12',
      id: '30',
      incomTax: '14,722.60',
      natInsurance: '4,537.28',
      title: 'Mr.',
      gender: 'male'
    }
  ];

  // configure fake backend
  backend.connections.subscribe((connection: MockConnection) => {
    setTimeout(() => {
      if (connection.request.url.match('/api/users') && connection.request.method === RequestMethod.Get) {
        connection.mockRespond(new Response(new ResponseOptions({status: 200, body: users})));
        return;
      }

      // pass through any requests not handled above
      const realHttp = new Http(realBackend, options);
      const requestOptions = new RequestOptions({
        method: connection.request.method,
        headers: connection.request.headers,
        body: connection.request.getBody(),
        url: connection.request.url,
        withCredentials: connection.request.withCredentials,
        responseType: connection.request.responseType
      });
      realHttp.request(connection.request.url, requestOptions)
        .subscribe((response: Response) => {
            connection.mockRespond(response);
          },
          (error: any) => {
            connection.mockError(error);
          });

    }, 500);

  });

  return new Http(backend, options);
};

export let fakeBackend = {
  // use fake backend in place of Http service for backend-less development
  provide: Http,
  useFactory: fakeBackendFactory,
  deps: [MockBackend, BaseRequestOptions, XHRBackend]
};
