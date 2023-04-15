import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from '../model/libro.model';

@Injectable({ providedIn: 'root' })
export class ApiService {
  url: string =
    'https://www.etnassoft.com/api/v1/get/?category=libros_programacion';
  url2: string = 'https://www.etnassoft.com/api/v1/get/?get_categories=all';
  urlLibro: string = 'https://www.etnassoft.com/api/v1/get/?id=589&callback=?';
  constructor(private httpClient: HttpClient) {}

  getElements() {
    return this.httpClient.get<Libro[]>(this.urlLibro);
  }
  getCategories() {
    return [
      { category_id: 677, name: 'Ajedrez', nicename: 'ajedrez' },
      {
        category_id: 2007,
        name: 'Arte - Bellas Artes',
        nicename: 'arte-bellas-artes',
      },
      {
        category_id: 234,
        name: 'Aspectos Legales',
        nicename: 'libros_aspecotos_legales',
      },
      { category_id: 201, name: 'Bases de datos', nicename: 'bases_de_datos' },
      { category_id: 206, name: 'Ciencia', nicename: 'ciencia' },
      { category_id: 1188, name: 'Cine', nicename: 'cine' },
      { category_id: 717, name: 'C\u00f3mics', nicename: 'comics' },
      {
        category_id: 209,
        name: 'Control de Versiones',
        nicename: 'control_de_versiones',
      },
      { category_id: 212, name: 'Desarrollo Web', nicename: 'desarrollo_web' },
      { category_id: 306, name: 'Dise\u00f1o / 3D', nicename: 'diseno_3d' },
      { category_id: 1441, name: 'Educaci\u00f3n', nicename: 'educacion' },
      { category_id: 2354, name: 'Electr\u00f3nica', nicename: 'electronica' },
      {
        category_id: 216,
        name: 'Ensayos / Novelas',
        nicename: 'ensayos_y_novelas',
      },
      { category_id: 2204, name: 'Filosof\u00eda', nicename: 'filosofia' },
      {
        category_id: 1941,
        name: 'Geograf\u00eda / Turismo',
        nicename: 'geografia-turismo',
      },
      { category_id: 2802, name: 'Historia', nicename: 'historia' },
      { category_id: 1149, name: 'Idiomas', nicename: 'idiomas' },
      { category_id: 640, name: 'Informaci\u00f3n', nicename: 'informacion' },
      {
        category_id: 217,
        name: 'Marketing / Business',
        nicename: 'marketing_y_business',
      },
      {
        category_id: 218,
        name: 'Metodolog\u00edas \u00c1giles',
        nicename: 'metodologias_agiles',
      },
      { category_id: 1805, name: 'Multimedia', nicename: 'multimedia' },
      { category_id: 1904, name: 'M\u00fasica', nicename: 'musica' },
      {
        category_id: 220,
        name: 'Programaci\u00f3n',
        nicename: 'libros_programacion',
      },
      {
        category_id: 230,
        name: 'Redes y Sys Admin',
        nicename: 'redes_y_sysadmins',
      },
      {
        category_id: 1859,
        name: 'Retroinform\u00e1tica',
        nicename: 'retroinformatica',
      },
      { category_id: 596, name: 'Revistas', nicename: 'revistas' },
      { category_id: 1295, name: 'Rob\u00f3tica', nicename: 'robotica' },
      { category_id: 231, name: 'SEO / SEM', nicename: 'seo_y_sem' },
      {
        category_id: 907,
        name: 'Software General',
        nicename: 'software-general',
      },
      {
        category_id: 232,
        name: 'Software Libre',
        nicename: 'libros_software_libre',
      },
      {
        category_id: 501,
        name: 'Textos Acad\u00e9micos',
        nicename: 'textos-academicos',
      },
      {
        category_id: 235,
        name: 'Web 2.0 y Social Media',
        nicename: 'libros_web_2_0_y_social_media',
      },
    ];
  }

  getLibro(id: string | number) {
    return [
      {
        ID: '589',
        title: 'Dise\u00f1o \u00c1gil con TDD',
        author: 'Carlos Bl\u00e9 Jurados y autores',
        content:
          '¿Dedicas una gran parte de tu tiempo de desarrollo a resolver incidencias de aplicaciones en producción?, ¿te enfrentas a sesiones de depuración interminables para encontrar la raíz de un problema?, ¿te extenúa descubrir innumerables fallos cada vez que introduces nuevas características a funcionalidades ya existentes?. Si respondes afirmativamente estas cuestiones y quieres promover el cambio, en este libro encontrarás la clave.\r\n\r\nTDD es una técnica de desarrollo que se lleva aplicando durante años con gran éxito en lugares como EEUU y Reino Unido, sin embargo, la ausencia de información en español sobre la misma ha supuesto un freno para su difusión en los países hispano-parlantes. El objetivo de este libro es poner solución a este dilema y ofrecer una referencia completa, tanto teórica como práctica, que permita al lector iniciarse en su comprensión y aplicación.\r\n\r\nA estas alturas sabemos que aprender nuevos lenguajes o frameworks incrementa nuestra productividad a corto plazo, pero los problemas más graves a los que nos enfrentamos siguen sin solución. TDD propone una nueva forma de afrontar los desarrollos atacando estas dificultades de frente y permitiendo entregar software más robusto y fiable. Con TDD, nuestro rendimiento a largo plazo sí se ve beneficiado, no olvidemos que uno de los factores con más influencia en la productividad de hoy es la calidad del código escrito ayer.\r\n\r\nDiseño Ágil con TDD nos enseñará a:\r\n<ul>\r\n<li>Escribir tests que aumenten la fiabilidad del código.</li>\r\n<li>Escribir tests de aceptación que nos ayudarán a centrarnos, específicamente, en el problema a resolver.</li>\r\n<li>Mejorar nuestros diseños para hacerlos más simples y flexibles.</li>\r\n<li>Escribir código fácil de mantener. Con TDD, los test son documentación viva y actualizada de nuestro código, la mejor documentación posible.</li>\r\n<li>Encajar TDD dentro del paradigma ágil y relacionarlo con otras técnicas como la integración continua.</li>\r\n</ul>',
        content_short:
          '¿Dedicas una gran parte de tu tiempo de desarrollo a resolver incidencias de aplicaciones en producción?, ¿te enfrentas a sesiones de depuración interminables para encontrar la raíz de un problema?, ...',
        publisher: 'www.iExpertos.com',
        publisher_date: '2010',
        pages: '309',
        language: 'spanish',
        url_details:
          'https://www.etnassoft.com/biblioteca/diseno-agil-con-tdd/',
        url_download: 'https://openlibra.com/book/diseno-agil-con-tdd',
        cover:
          'http://collection.openlibra.com.s3.amazonaws.com/covers/2011/04/disenoAgilConTDD.jpg',
        thumbnail:
          'http://collection.openlibra.com.s3.amazonaws.com/covers/2011/04/disenoAgilConTDD-110x153.jpg',
        num_comments: '0',
        categories: [
          { category_id: 222, name: 'Java', nicename: 'programacion_java' },
          {
            category_id: 218,
            name: 'Metodolog\u00edas \u00c1giles',
            nicename: 'metodologias_agiles',
          },
          {
            category_id: 220,
            name: 'Programaci\u00f3n',
            nicename: 'libros_programacion',
          },
          {
            category_id: 219,
            name: 'TDD',
            nicename: 'tdd_metodologias_agiles',
          },
        ],
        tags: [
          { tag_id: 290, name: 'agil', nicename: 'agil' },
          { tag_id: 97, name: 'java', nicename: 'java' },
          { tag_id: 103, name: 'tdd', nicename: 'tdd' },
          { tag_id: 104, name: 'tests', nicename: 'tests' },
        ],
      },
    ];
  }
  getLibrosReComenadados(name: string) {
    //https://www.etnassoft.com/api/v1/get/?category=libros_programacion&criteria=most_viewed&num_items=6
    return [
      {
        "ID": "1471",
        "title": "POO y MVC en PHP",
        "author": "Eugenia Bahit",
        "content": "&lt;strong&gt;El paradigma de la Programaci&oacute;n Orientada a Objetos en PHP con el patr&oacute;n arquitect&oacute;nico MVC.&lt;\/strong&gt;\r\n\r\n&quot;Me propuse escribir este libro, fundamentalmente porque me apasionan de igual forma, tanto la programaci&oacute;n orientada a objetos como el patr&oacute;n MVC y el lenguaje PHP. Pero &eacute;ste, seguramente, no fue el &uacute;nico agente motivador.  Hac&iacute;a tiempo que ten&iacute;a ganas de sentarme tranquila y escribir algo que pudiese ser de gran utilidad para otros programadores.\r\n\r\nA lo largo del libro, aprender&aacute;s a construir una aplicaci&oacute;n orientada a objetos en PHP, utilizando el patr&oacute;n arquitect&oacute;nico MVC, desde cero, sin necesidad de utilizar ning&uacute;n framework, incluso aunque tus conocimientos de programaci&oacute;n sean b&aacute;sicos. Aprender&aacute;s a hacerlo t&uacute; mismo, logrando una abstracci&oacute;n completa y absoluta, tanto del modelo, la vista y el controlador, como de la independencia de lenguajes de programaci&oacute;n y dise&ntilde;o.&quot;\r\n\r\n(&lt;a href=&quot;http:\/\/eugeniabahit.blogspot.com\/p\/poo-y-mvc-en-php.html&quot;&gt;Eugenia Bahit&lt;\/a&gt;)",
        "content_short": "&lt;strong&gt;El paradigma de la Programaci&oacute;n Orientada a Objetos en PHP con el patr&oacute;n arquitect&oacute;nico MVC.&lt;\/strong&gt;\r\n\r\n&quot;Me propuse escribir este libro, fundamentalmente porque me apasionan de igual forma, tanto la programaci&oacute;n orientada ...",
        "publisher": "Autoedición",
        "publisher_date": "2011",
        "pages": "66",
        "language": "spanish",
        "url_details": "https:\/\/www.etnassoft.com\/biblioteca\/poo-y-mvc-en-php\/",
        "url_download": "https:\/\/openlibra.com\/book\/poo-y-mvc-en-php",
        "cover": "http:\/\/collection.openlibra.com.s3.amazonaws.com\/covers\/2011\/08\/POO_MVC_PHP_OpenLibra-350x459.gif",
        "thumbnail": "http:\/\/collection.openlibra.com.s3.amazonaws.com\/covers\/2011\/08\/POO_MVC_PHP_OpenLibra-110x153.gif",
        "num_comments": "0",
        "categories": [
          {
            "category_id": 226,
            "name": "PHP",
            "nicename": "programacion_php"
          },
          {
            "category_id": 90,
            "name": "POO",
            "nicename": "poo"
          },
          {
            "category_id": 220,
            "name": "Programación",
            "nicename": "libros_programacion"
          }
        ],
        "tags": [
          {
            "tag_id": 411,
            "name": "MVC",
            "nicename": "mvc"
          },
          {
            "tag_id": 45,
            "name": "php",
            "nicename": "php-2"
          },
          {
            "tag_id": 2990,
            "name": "POO",
            "nicename": "poo"
          }
        ]
      },
      {
        "ID": "595",
        "title": "Desarrollo de aplicaciones iPhone e iPad para principiantes",
        "author": "Varios",
        "content": "Quieres aprender c&oacute;mo programar para el iPad o iPhone, y seguro que te consideras una persona inteligente -pero cuando te has encontrado con l&iacute;neas de c&oacute;digo o instrucciones demasiado t&eacute;cnicas, has sentido que tu cabeza estaba a punto de estallar. &iquest;Se te ponen los ojos vidriosos cuando sigues instrucciones complicadas? Oyes una vocecita en tu cabeza que te susurra, &ldquo;Pero a d&oacute;nde vas! el cerebro se qued&oacute; seis l&iacute;neas atr&aacute;s, pero incomprensiblemente sigues escaneando la p&aacute;gina&mdash;creyendo que no eres tan lento c&oacute;mo piensas. Genial!&rdquo;\r\n\r\nA ver si esto te suena familiar... tienes una duda con algo bastante t&eacute;cnico y decides recurrir a Google para buscar la soluci&oacute;n del problema. Pinchas sobre un enlace y alguien ha hecho exactamente la misma pregunta! Te emocionas mientras que la p&aacute;gina carga, pero, por desgracia se trata de un foro, un chat donde geeks, gente con experiencia, habla con cierta base y postean inteligibles c&oacute;digos). Localizas la pregunta que buscabas, que no es m&aacute;s que la duda que tienes, y esa pregunta va seguida de&hellip; demasiado tarde! Tu cerebro ha echado el cierre y te  sientes frustrado y en tensi&oacute;n, como si tuvieras nudos en el est&oacute;mago.\r\n\r\nTe suena familiar?\r\n\r\n&iquest;S&iacute;? Entonces este libro va dirigido a t&iacute;! Te imagino en una tienda de libros o en el aeropuerto, echando un vistazo a una revista, buscando algo de inter&eacute;s. Debido a lo acotado de este tema, imagino que podr&aacute;s permitirte un iPhone, un Mac un coche y billetes  de avi&oacute;n. Probablemente est&eacute;s interesado en la floreciente industria de los dispositivos handhelds y en el tremendo ritmo de evoluci&oacute;n de las memorias y microprocesadores&hellip; en c&oacute;mo ideas fugaces pueden convertirse en plataformas de computaci&oacute;n totalmente nuevas , en aplicaciones de software potentes, en herramientas &uacute;tiles y juegos de inteligencia&hellip; quiz&aacute; incluso hasta en la pasta! Te estar&aacute;s preguntando si puedes entrar en acci&oacute;n haciendo uso de tu intelecto y experiencia t&eacute;cnica para servir a las masas.\r\n",
        "content_short": "Quieres aprender c&oacute;mo programar para el iPad o iPhone, y seguro que te consideras una persona inteligente -pero cuando te has encontrado con l&iacute;neas de c&oacute;digo o instrucciones demasiado t&eacute;cnicas, ...",
        "publisher": "Apress",
        "publisher_date": "2011",
        "pages": "297",
        "language": "spanish",
        "url_details": "https:\/\/www.etnassoft.com\/biblioteca\/desarrollo-de-aplicaciones-iphone-e-ipad-para-principiantes\/",
        "url_download": "https:\/\/openlibra.com\/book\/desarrollo-de-aplicaciones-iphone-e-ipad-para-principiantes",
        "cover": "http:\/\/collection.openlibra.com.s3.amazonaws.com\/covers\/2011\/04\/aplicaciones_iphone_e_ipad_principiantes.jpg",
        "thumbnail": "http:\/\/collection.openlibra.com.s3.amazonaws.com\/covers\/2011\/04\/aplicaciones_iphone_e_ipad_principiantes-110x153.jpg",
        "num_comments": "0",
        "categories": [
          {
            "category_id": 221,
            "name": "Dispositivos Móviles",
            "nicename": "dispositivos_moviles"
          },
          {
            "category_id": 220,
            "name": "Programación",
            "nicename": "libros_programacion"
          }
        ],
        "tags": [
          {
            "tag_id": 284,
            "name": "app",
            "nicename": "app"
          },
          {
            "tag_id": 133,
            "name": "iPad",
            "nicename": "ipad"
          },
          {
            "tag_id": 134,
            "name": "iPhone",
            "nicename": "iphone"
          },
          {
            "tag_id": 247,
            "name": "mobile",
            "nicename": "mobile"
          },
          {
            "tag_id": 248,
            "name": "phone",
            "nicename": "phone"
          }
        ]
      },
      {
        "ID": "853",
        "title": "jQuery Fundamentals",
        "author": "Rebecca Murphey",
        "content": "jQuery es una biblioteca o framework de JavaScript, creada inicialmente por John Resig, que permite simplificar la manera de interactuar con los documentos HTML, manipular el &aacute;rbol DOM, manejar eventos, desarrollar animaciones y agregar interacci&oacute;n con la t&eacute;cnica AJAX a p&aacute;ginas web. Fue presentada el 14 de enero de 2006 en el BarCamp NYC.\r\n\r\njQuery es software libre y de c&oacute;digo abierto, posee un doble licenciamiento bajo la Licencia MIT y la Licencia P&uacute;blica General de GNU v2, permitiendo su uso en proyectos libres y privativos. jQuery, al igual que otras bibliotecas, ofrece una serie de funcionalidades basadas en JavaScript que de otra manera requerir&iacute;an de mucho m&aacute;s c&oacute;digo, es decir, con las funciones propias de esta biblioteca se logran grandes resultados en menos tiempo y espacio.\r\n\r\nEste libro, creado en primer t&eacute;rmino por Rebecca Murphey y enriquecido por las aportaciones de algunos dise&ntilde;adores y desarrolladores web como James Padolsey o Paul Irish, es un excelente recurso para aprender los fundamentos de jQuery. El material est&aacute; en constante evoluci&oacute;n y adem&aacute;s del texto podemos encontrar ejemplos y ejercicios.\r\n",
        "content_short": "jQuery es una biblioteca o framework de JavaScript, creada inicialmente por John Resig, que permite simplificar la manera de interactuar con los documentos HTML, manipular el &aacute;rbol DOM, manejar eventos, ...",
        "publisher": "Autoedición",
        "publisher_date": "2010",
        "pages": "72",
        "language": "english",
        "url_details": "https:\/\/www.etnassoft.com\/biblioteca\/jquery-fundamentals\/",
        "url_download": "https:\/\/openlibra.com\/book\/jquery-fundamentals",
        "cover": "http:\/\/collection.openlibra.com.s3.amazonaws.com\/covers\/2011\/05\/jquery_fundamentals-325x461.gif",
        "thumbnail": "http:\/\/collection.openlibra.com.s3.amazonaws.com\/covers\/2011\/05\/jquery_fundamentals-110x153.gif",
        "num_comments": "0",
        "categories": [
          {
            "category_id": 223,
            "name": "Javascript \/ AJAX",
            "nicename": "programacion_javascript_ajax"
          },
          {
            "category_id": 329,
            "name": "jQuery",
            "nicename": "jquery_libros_programacion"
          },
          {
            "category_id": 220,
            "name": "Programación",
            "nicename": "libros_programacion"
          }
        ],
        "tags": [
          {
            "tag_id": 2991,
            "name": "AJAX",
            "nicename": "ajax"
          },
          {
            "tag_id": 2986,
            "name": "Javascript",
            "nicename": "javascript"
          },
          {
            "tag_id": 2987,
            "name": "jQuery",
            "nicename": "jquery"
          }
        ]
      },
      {
        "ID": "3752",
        "title": "Introducción a .NET",
        "author": "Jordi Ceballos Villach",
        "content": ".NET es el entorno de ejecuci&oacute;n en el que se cargan las aplicaciones desarrolladas en los distintos lenguajes, ampliando el conjunto de servicios del sistema operativo (W2k y W2003). Permite integrar proyectos en distintos lenguajes soportados por la plataforma .Net, como C++, Visual Basic, C#, entre otros.\r\n\r\nLa herramienta de desarrollo compila el c&oacute;digo fuente de cualquiera de los lenguajes soportados por .NET en un c&oacute;digo intermedio, el CIL (Common Intermediate Language) antes conocido como MSIL (Microsoft Intermediate Language), similar al BYTECODE de Java. Para generarlo, el compilador se basa en la especificaci&oacute;n CLS (Common Language Specification) que determina las reglas necesarias para crear el c&oacute;digo MSIL compatible con el CLR.\r\n\r\nEl siguiente presenta una divisi&oacute;n en m&oacute;dulos que tratan los siguientes aspectos:\r\n&lt;ul&gt;\r\n&lt;li&gt;La plataforma .NET&lt;\/li&gt;\r\n&lt;li&gt;El lenguaje C#&lt;\/li&gt;\r\n&lt;li&gt;.NET Framework&lt;\/li&gt;\r\n&lt;li&gt;ADO.NET&lt;\/li&gt;\r\n&lt;li&gt;Windows Forms&lt;\/li&gt;\r\n&lt;li&gt;ASP.NET&lt;\/li&gt;\r\n&lt;li&gt;WPF&lt;\/li&gt;\r\n&lt;li&gt;Windows Mobile&lt;\/li&gt;\r\n&lt;\/ul&gt;",
        "content_short": ".NET es el entorno de ejecuci&oacute;n en el que se cargan las aplicaciones desarrolladas en los distintos lenguajes, ampliando el conjunto de servicios del sistema operativo (W2k y W2003). Permite ...",
        "publisher": "UOC",
        "publisher_date": "2009",
        "pages": "102",
        "language": "spanish",
        "url_details": "https:\/\/www.etnassoft.com\/biblioteca\/introduccion-a-net\/",
        "url_download": "https:\/\/openlibra.com\/book\/introduccion-a-net",
        "cover": "http:\/\/collection.openlibra.com.s3.amazonaws.com\/covers\/2012\/07\/uoc-introduccion-net-325x461.jpg",
        "thumbnail": "http:\/\/collection.openlibra.com.s3.amazonaws.com\/covers\/2012\/07\/uoc-introduccion-net-110x153.jpg",
        "num_comments": "0",
        "categories": [
          {
            "category_id": 305,
            "name": ".NET",
            "nicename": "net"
          },
          {
            "category_id": 224,
            "name": "Otros Lenguajes",
            "nicename": "programacion_otros_lenguajes"
          },
          {
            "category_id": 220,
            "name": "Programación",
            "nicename": "libros_programacion"
          }
        ],
        "tags": [
          {
            "tag_id": 3000,
            "name": ".NET",
            "nicename": "net"
          },
          {
            "tag_id": 1413,
            "name": "ADO",
            "nicename": "ado"
          },
          {
            "tag_id": 638,
            "name": "ASP",
            "nicename": "asp"
          },
          {
            "tag_id": 2999,
            "name": "C",
            "nicename": "c"
          },
          {
            "tag_id": 262,
            "name": "Microsoft",
            "nicename": "microsoft"
          },
          {
            "tag_id": 32,
            "name": "programación",
            "nicename": "programacion"
          },
          {
            "tag_id": 239,
            "name": "UOC",
            "nicename": "uoc"
          },
          {
            "tag_id": 289,
            "name": "Windows Mobile",
            "nicename": "windows_mobile"
          },
          {
            "tag_id": 1414,
            "name": "WPF",
            "nicename": "wpf"
          }
        ]
      },
      {
        "ID": "1600",
        "title": "Practical Artifical Intelligence Programming with Java",
        "author": "Mark Watson",
        "content": "Este libro ha sido escrito para aquellos desarrolladores que ya conocen los fundamentos del lenguaje Java y que desean adentranrse en el aprendizaje pr&aacute;ctico de la programaci&oacute;n sobre Inteligencia Artificial (IA) y sus t&eacute;cnicas de procesado. \r\n\r\nLa propuesta de este libro ha sido revisada para resultar amena y divertida: redactado a modo de recetario de cocina, los cap&iacute;tulos pueden ser estudiados en cualquier orden y simepre presentan la misma estructura: la motivaci&oacute;n para aprender una determinada t&eacute;cnica, la teor&iacute;a y un ejemplo en Java con el que podemos experimentar lo estudiado. ",
        "content_short": "Este libro ha sido escrito para aquellos desarrolladores que ya conocen los fundamentos del lenguaje Java y que desean adentranrse en el aprendizaje pr&aacute;ctico de la programaci&oacute;n sobre Inteligencia Artificial ...",
        "publisher": "Autoedición",
        "publisher_date": "2008",
        "pages": "222",
        "language": "english",
        "url_details": "https:\/\/www.etnassoft.com\/biblioteca\/practical-artifical-intelligence-programming-with-java\/",
        "url_download": "https:\/\/openlibra.com\/book\/practical-artifical-intelligence-programming-with-java",
        "cover": "http:\/\/collection.openlibra.com.s3.amazonaws.com\/covers\/2011\/08\/Practical_AI_Programming_with_Java_OpenLibra-350x459.gif",
        "thumbnail": "http:\/\/collection.openlibra.com.s3.amazonaws.com\/covers\/2011\/08\/Practical_AI_Programming_with_Java_OpenLibra-110x153.gif",
        "num_comments": "0",
        "categories": [
          {
            "category_id": 222,
            "name": "Java",
            "nicename": "programacion_java"
          },
          {
            "category_id": 220,
            "name": "Programación",
            "nicename": "libros_programacion"
          }
        ],
        "tags": [
          {
            "tag_id": 692,
            "name": "AI",
            "nicename": "ai"
          },
          {
            "tag_id": 267,
            "name": "IA",
            "nicename": "ia"
          },
          {
            "tag_id": 97,
            "name": "java",
            "nicename": "java"
          },
          {
            "tag_id": 693,
            "name": "JVM",
            "nicename": "jvm"
          },
          {
            "tag_id": 694,
            "name": "RDF",
            "nicename": "rdf"
          }
        ]
      },
      {
        "ID": "9505",
        "title": "Desarrollo fácil y paso a paso de aplicaciones para Android usando MIT App Inventor",
        "author": "Rafael Alberto Moreno Parra",
        "content": "Android es actualmente (Mayo de 2013) el sistema operativo para smartphones y tablets m&aacute;s famoso, con una enorme cuota de mercado. \r\n\r\nDesarrollar software para esta plataforma permite llegar a una gran cantidad de p&uacute;blico. Sin embargo, abordar un desarrollo directo con el lenguaje de programaci&oacute;n Java, XML, emulaci&oacute;n virtual y ambiente de dispositivo m&oacute;vil puede ser intimidante. Esa es la raz&oacute;n por la que Google ide&oacute; una forma sencilla de desarrollar aplicaciones para Android: haciendo uso de programaci&oacute;n gr&aacute;fica y atraer as&iacute; a los desarrolladores. Google, sin embargo, dej&oacute; de lado este proyecto el cual fue retomado por el MIT y se ha mantenido as&iacute;.\r\n\r\nEl libro sigue el formato de llevar paso a paso al lector desde preparar el ambiente de desarrollo, pasando por el dise&ntilde;o de la pantalla en un Smartphone Android, los diferentes componentes visuales y no visuales, programaci&oacute;n usando bloques como si fuese un rompecabezas, variables, uso del s&iacute; condicional, ciclos o bucles, hasta el uso de las capacidades propias de un Smartphone como la c&aacute;mara, video o el aceler&oacute;metro.\r\n\r\nMIT App Inventor oficialmente es una herramienta para desarrollo en l&iacute;nea por lo que requiere conexi&oacute;n permanente a Internet. Sin embargo, en el Anexo 1 se muestra como trabajar fuera de l&iacute;nea o sin conexi&oacute;n a Internet.",
        "content_short": "Android es actualmente (Mayo de 2013) el sistema operativo para smartphones y tablets m&aacute;s famoso, con una enorme cuota de mercado. \r\n\r\nDesarrollar software para esta plataforma permite llegar a una ...",
        "publisher": "Autoedición",
        "publisher_date": "2013",
        "pages": "104",
        "language": "spanish",
        "url_details": "https:\/\/www.etnassoft.com\/biblioteca\/desarrollo-android-usando-mit-app-inventor\/",
        "url_download": "https:\/\/openlibra.com\/book\/desarrollo-android-usando-mit-app-inventor",
        "cover": "http:\/\/collection.openlibra.com.s3.amazonaws.com\/covers\/2013\/05\/Desarrollo-para-Android-usando-MIT-AppInventor-OpenLibra-325x461.gif",
        "thumbnail": "http:\/\/collection.openlibra.com.s3.amazonaws.com\/covers\/2013\/05\/Desarrollo-para-Android-usando-MIT-AppInventor-OpenLibra-110x153.gif",
        "num_comments": "0",
        "categories": [
          {
            "category_id": 221,
            "name": "Dispositivos Móviles",
            "nicename": "dispositivos_moviles"
          },
          {
            "category_id": 220,
            "name": "Programación",
            "nicename": "libros_programacion"
          }
        ],
        "tags": [
          {
            "tag_id": 132,
            "name": "android",
            "nicename": "android"
          },
          {
            "tag_id": 1585,
            "name": "apps",
            "nicename": "apps"
          },
          {
            "tag_id": 421,
            "name": "Inventor",
            "nicename": "inventor"
          },
          {
            "tag_id": 32,
            "name": "programación",
            "nicename": "programacion"
          }
        ]
      },
      {
        "ID": "897",
        "title": "A byte of VIM (for VIM v.7)",
        "author": "Swaroop Chitlur",
        "content": "Vim (del ingl&eacute;s Vi IMproved) es una versi&oacute;n mejorada del editor de texto vi, presente en todos los sistemas UNIX.\r\n\r\nSu autor, Bram Moolenaar, present&oacute; la primera versi&oacute;n en 1991, fecha desde la que ha experimentado muchas mejoras. La principal caracter&iacute;stica tanto de Vim como de Vi consiste en que disponen de diferentes modos entre los que se alterna para realizar ciertas operaciones, lo que los diferencia de la mayor&iacute;a de editores comunes, que tienen un s&oacute;lo modo en el que se introducen los &oacute;rdenes mediante combinaciones de teclas o interfaces gr&aacute;ficas.\r\n\r\n&quot;A Byte of Vim&quot; es un libro cuyo objetivo es ayudarle a sacar el m&aacute;ximo partido de este fant&aacute;stico editor. Est&aacute; especialmente planteado para usuarios que nunca han tenido contacto ni con este software, ni su antecesor vi.\r\n\r\nEl documento se divide en dos partes. La primera de ella se centra en explicar qu&eacute; es Vim y c&oacute;mo se usa en su nivel elemental.\r\n\r\nLa segunad parte del libro es para aquellos usuarios que ya tienen un conocimiento del programa y desean aprender todas las caracter&iacute;sticas que convierten a este editor en un poderoso aliado del programador. En este apartado se recoge tambi&eacute;n c&oacute;mo extender Vim y c&oacute;mo crear nuestros propios plugins.\r\n",
        "content_short": "Vim (del ingl&eacute;s Vi IMproved) es una versi&oacute;n mejorada del editor de texto vi, presente en todos los sistemas UNIX.\r\n\r\nSu autor, Bram Moolenaar, present&oacute; la primera versi&oacute;n en 1991, fecha ...",
        "publisher": "Autoedición",
        "publisher_date": "2010",
        "pages": "89",
        "language": "english",
        "url_details": "https:\/\/www.etnassoft.com\/biblioteca\/a-byte-of-vim\/",
        "url_download": "https:\/\/openlibra.com\/book\/a-byte-of-vim",
        "cover": "http:\/\/collection.openlibra.com.s3.amazonaws.com\/covers\/2011\/06\/A_Byte_of_VIM.png",
        "thumbnail": "http:\/\/collection.openlibra.com.s3.amazonaws.com\/covers\/2011\/06\/A_Byte_of_VIM.png",
        "num_comments": "0",
        "categories": [
          {
            "category_id": 241,
            "name": "Herramientas",
            "nicename": "herramientas"
          },
          {
            "category_id": 220,
            "name": "Programación",
            "nicename": "libros_programacion"
          }
        ],
        "tags": [
          {
            "tag_id": 242,
            "name": "editor",
            "nicename": "editor"
          },
          {
            "tag_id": 243,
            "name": "IDE",
            "nicename": "ide"
          },
          {
            "tag_id": 244,
            "name": "VIM",
            "nicename": "vim"
          }
        ]
      },
      {
        "ID": "772",
        "title": "Silverlight for Windows Phone",
        "author": "Puja Pramudya",
        "content": "Microsoft Silverlight es una estructura para aplicaciones web que agrega nuevas funciones multimedia como la reproducci&oacute;n de v&iacute;deos, gr&aacute;ficos vectoriales, animaciones e interactividad, en forma similar a lo que hace Adobe Flash.\r\n\r\nSilverlight compite con Adobe Flex, Nexaweb, OpenLaszlo y algunas presentaciones de componentes AJAX. La primera versi&oacute;n de Silverlight fue lanzada en septiembre de 2007 y actualmente su versi&oacute;n 4.0 se distribuye de forma gratuita.\r\n\r\nEn este nuevo libro, se ponen las bases para el desarrollo de aplicaciones complejas a trav&eacute;s del uso de Silverlight como est&aacute;ndar. Como t&oacute;nica general en la publicaci&oacute;n de manuales Microsoft, los c&oacute;digos resultan muy sencillos de seguir gracias a la gran cantidad de ilustraciones y comentarios.\r\n",
        "content_short": "Microsoft Silverlight es una estructura para aplicaciones web que agrega nuevas funciones multimedia como la reproducci&oacute;n de v&iacute;deos, gr&aacute;ficos vectoriales, animaciones e interactividad, en forma similar a lo que hace ...",
        "publisher": "Microsoft",
        "publisher_date": "2011",
        "pages": "157",
        "language": "english",
        "url_details": "https:\/\/www.etnassoft.com\/biblioteca\/silverlight-for-windows-phone\/",
        "url_download": "https:\/\/openlibra.com\/book\/silverlight-for-windows-phone",
        "cover": "http:\/\/collection.openlibra.com.s3.amazonaws.com\/covers\/2011\/05\/Silverlight-for-Windows-Phone-326x461.jpg",
        "thumbnail": "http:\/\/collection.openlibra.com.s3.amazonaws.com\/covers\/2011\/05\/Silverlight-for-Windows-Phone-110x153.jpg",
        "num_comments": "0",
        "categories": [
          {
            "category_id": 221,
            "name": "Dispositivos Móviles",
            "nicename": "dispositivos_moviles"
          },
          {
            "category_id": 224,
            "name": "Otros Lenguajes",
            "nicename": "programacion_otros_lenguajes"
          },
          {
            "category_id": 220,
            "name": "Programación",
            "nicename": "libros_programacion"
          }
        ],
        "tags": [
          {
            "tag_id": 2991,
            "name": "AJAX",
            "nicename": "ajax"
          },
          {
            "tag_id": 2986,
            "name": "Javascript",
            "nicename": "javascript"
          },
          {
            "tag_id": 262,
            "name": "Microsoft",
            "nicename": "microsoft"
          },
          {
            "tag_id": 247,
            "name": "mobile",
            "nicename": "mobile"
          },
          {
            "tag_id": 248,
            "name": "phone",
            "nicename": "phone"
          },
          {
            "tag_id": 360,
            "name": "SilverLight",
            "nicename": "silverlight"
          },
          {
            "tag_id": 263,
            "name": "Windows",
            "nicename": "windows"
          }
        ]
      },
      {
        "ID": "1870",
        "title": "Fundamentos de jQuery",
        "author": "Rebecca Murphey",
        "content": "jQuery se est&aacute; convirtiendo r&aacute;pidamente en una herramienta que todo desarrollador de interfaces web deber&iacute;a de conocer. El prop&oacute;sito de este libro es proveer un resumen de la biblioteca, de tal forma que para cuando lo haya terminado de leer, ser&aacute; capaz de realizar tareas b&aacute;sicas utilizando jQuery y tendr&aacute; una s&oacute;lida base para continuar el aprendizaje. El libro fue dise&ntilde;ado para ser utilizado como material en un sal&oacute;n de clases, pero tambi&eacute;n puede ser &uacute;til para estudiarlo de forma individual.\r\n\r\nLa modalidad de trabajo es la siguiente: En primer lugar se dedicar&aacute; tiempo a comprender un concepto para luego realizar un ejercicio relacionado. Algunos de los ejercicios pueden llegar a ser triviales, mientras que otros no tanto. El objetivo es aprender a resolver de manera f&aacute;cil lo que normalmente se resolver&iacute;a con jQuery.",
        "content_short": "jQuery se est&aacute; convirtiendo r&aacute;pidamente en una herramienta que todo desarrollador de interfaces web deber&iacute;a de conocer. El prop&oacute;sito de este libro es proveer un resumen de la biblioteca, de ...",
        "publisher": "Autoedición",
        "publisher_date": "2011",
        "pages": "112",
        "language": "spanish",
        "url_details": "https:\/\/www.etnassoft.com\/biblioteca\/fundamentos-de-jquery\/",
        "url_download": "https:\/\/openlibra.com\/book\/fundamentos-de-jquery",
        "cover": "http:\/\/collection.openlibra.com.s3.amazonaws.com\/covers\/2011\/10\/Fundamentos-de-jQuery-OpenLibra-350x459.gif",
        "thumbnail": "http:\/\/collection.openlibra.com.s3.amazonaws.com\/covers\/2011\/10\/Fundamentos-de-jQuery-OpenLibra-110x153.gif",
        "num_comments": "0",
        "categories": [
          {
            "category_id": 223,
            "name": "Javascript \/ AJAX",
            "nicename": "programacion_javascript_ajax"
          },
          {
            "category_id": 329,
            "name": "jQuery",
            "nicename": "jquery_libros_programacion"
          },
          {
            "category_id": 220,
            "name": "Programación",
            "nicename": "libros_programacion"
          }
        ],
        "tags": [
          {
            "tag_id": 2986,
            "name": "Javascript",
            "nicename": "javascript"
          },
          {
            "tag_id": 2987,
            "name": "jQuery",
            "nicename": "jquery"
          }
        ]
      },
      {
        "ID": "2295",
        "title": "Diseño de una Metodología Ágil de Desarrollo de Software",
        "author": "Schenone Marcelo Hernán",
        "content": "Esta t&eacute;sis tiene como prop&oacute;sito la construcci&oacute;n de una Metodolog&iacute;a &Aacute;gil de Desarrollo de Software la cual utiliza UML como notaci&oacute;n. Si bien podr&aacute; ser empleada en proyectos de distinto tama&ntilde;o y complejidad, su aplicaci&oacute;n tendr&aacute; como objetivo proyectos de peque&ntilde;a escala y riesgo limitado. Tambi&eacute;n ser&aacute; independiente del lenguaje o la arquitectura utilizada, as&iacute; como del tipo de software que se est&aacute; construyendo.  \r\n \r\nPara desarrollar esta metodolog&iacute;a se  comenzar&aacute; por un relevamiento de las metodolog&iacute;as y notaciones actualmente empleadas (Rational Unified Process, UML, SCRUM, OPEN, Extreme Programming, etc), un posterior refinamiento de las mismas y el desarrollo paulatino de un proceso  que incorpore las mejores y m&aacute;s avanzadas pr&aacute;cticas existentes en cada etapa del desarrollo. \r\n \r\nFinalmente, se describe la realizaci&oacute;n de dos casos pr&aacute;cticos resueltos con la metodolog&iacute;a propuesta. El primer caso pr&aacute;ctico estar&aacute; basado en un sistema de integraci&oacute;n de servicios para ONGs, y el segundo en un sistema de administraci&oacute;n de recursos de hardware y software. ",
        "content_short": "Esta t&eacute;sis tiene como prop&oacute;sito la construcci&oacute;n de una Metodolog&iacute;a &Aacute;gil de Desarrollo de Software la cual utiliza UML como notaci&oacute;n. Si bien podr&aacute; ser empleada en proyectos de distinto ...",
        "publisher": "Fiuba",
        "publisher_date": "2004",
        "pages": "199",
        "language": "spanish",
        "url_details": "https:\/\/www.etnassoft.com\/biblioteca\/diseno-de-una-metodologia-agil-de-desarrollo-de-software\/",
        "url_download": "https:\/\/openlibra.com\/book\/diseno-de-una-metodologia-agil-de-desarrollo-de-software",
        "cover": "http:\/\/collection.openlibra.com.s3.amazonaws.com\/covers\/2012\/01\/diseno-metodologia-agil-de-desarrollo-software-OpenLibra-350x459.gif",
        "thumbnail": "http:\/\/collection.openlibra.com.s3.amazonaws.com\/covers\/2012\/01\/diseno-metodologia-agil-de-desarrollo-software-OpenLibra-110x153.gif",
        "num_comments": "0",
        "categories": [
          {
            "category_id": 218,
            "name": "Metodologías Ágiles",
            "nicename": "metodologias_agiles"
          },
          {
            "category_id": 220,
            "name": "Programación",
            "nicename": "libros_programacion"
          }
        ],
        "tags": [
          {
            "tag_id": 495,
            "name": "agilismo",
            "nicename": "agilismo"
          },
          {
            "tag_id": 1074,
            "name": "metodologías",
            "nicename": "metodologias"
          },
          {
            "tag_id": 384,
            "name": "scrum",
            "nicename": "scrum"
          },
          {
            "tag_id": 312,
            "name": "UML",
            "nicename": "uml"
          },
          {
            "tag_id": 105,
            "name": "XP",
            "nicename": "xp"
          }
        ]
      },
      {
        "ID": "2464",
        "title": "Tecnología y Desarrollo en Dispositivos Móviles",
        "author": "Varios",
        "content": "Este material est&aacute; claramente orientado a iniciar a los ingenieros inform&aacute;ticos en el desarrollo de aplicaciones sobre dispositivos m&oacute;viles, con el objetivo de hacer que los conocimientos adquiridos puedan ser un valor a&ntilde;adido importante en su carrera profesional. La evoluci&oacute;n de estas tecnolog&iacute;as en los &uacute;ltimos a&ntilde;os ha sido espectacular.\r\n\r\nPor una parte, las &uacute;ltimas dos d&eacute;cadas hemos vivido una revoluci&oacute;n de las comunicaciones inal&aacute;mbricas que ha facilitado la movilidad de las personas al reducir la dependencia del cable para comunicarnos. Por otra parte, en la &uacute;ltima d&eacute;cada estamos viendo una evoluci&oacute;n espectacular de las prestaciones y caracter&iacute;sticas de los dispositivos m&oacute;viles, llegando en muchos casos a ser un posible sustituto del ordenador port&aacute;til o de sobremesa.\r\n\r\nFinalmente, durante los &uacute;ltimos a&ntilde;os ha habido una explosi&oacute;n de las herramientas y lenguajes de programaci&oacute;n para desarrollar aplicaciones sobre dispositivos m&oacute;viles, as&iacute; como la creaci&oacute;n de nuevas maneras de compartir y vender estas aplicaciones a partir de mercados espec&iacute;ficos llamados tienda de aplicaciones o AppStores. Todo ha hecho posible que numerosos programadores est&eacute;n desarrollando aplicaciones para m&oacute;viles de una manera r&aacute;pida, barata y f&aacute;cilmente comercializable. Nunca ha sido tan f&aacute;cil crear aplicaciones y poder tener un escaparate de alcance mundial para poder venderlas.",
        "content_short": "Este material est&aacute; claramente orientado a iniciar a los ingenieros inform&aacute;ticos en el desarrollo de aplicaciones sobre dispositivos m&oacute;viles, con el objetivo de hacer que los conocimientos adquiridos puedan ser ...",
        "publisher": "UOC",
        "publisher_date": "2011",
        "pages": "312",
        "language": "spanish",
        "url_details": "https:\/\/www.etnassoft.com\/biblioteca\/tecnologia-y-desarrollo-en-dispositivos-moviles\/",
        "url_download": "https:\/\/openlibra.com\/book\/tecnologia-y-desarrollo-en-dispositivos-moviles",
        "cover": "http:\/\/collection.openlibra.com.s3.amazonaws.com\/covers\/2012\/03\/Tecnologia-Desarrollo-Dispositivos-Moviles-OpenLibra-325x461.jpg",
        "thumbnail": "http:\/\/collection.openlibra.com.s3.amazonaws.com\/covers\/2012\/03\/Tecnologia-Desarrollo-Dispositivos-Moviles-OpenLibra-110x153.jpg",
        "num_comments": "0",
        "categories": [
          {
            "category_id": 221,
            "name": "Dispositivos Móviles",
            "nicename": "dispositivos_moviles"
          },
          {
            "category_id": 220,
            "name": "Programación",
            "nicename": "libros_programacion"
          }
        ],
        "tags": [
          {
            "tag_id": 132,
            "name": "android",
            "nicename": "android"
          },
          {
            "tag_id": 467,
            "name": "dispositivos moviles",
            "nicename": "dispositivos-moviles"
          },
          {
            "tag_id": 247,
            "name": "mobile",
            "nicename": "mobile"
          },
          {
            "tag_id": 239,
            "name": "UOC",
            "nicename": "uoc"
          }
        ]
      },
      {
        "ID": "2599",
        "title": "Producir Software de Código Abierto: Como Llevar a Buen Puerto un Proyecto de Código Libre",
        "author": "Varios",
        "content": "Los proyectos de software libre han permitido a una nueva cult&uacute;ra evolucionar, un ethos en el cual la libertad de hacer que el software haga cualquier cosa que deseamos sea el eje central, sin embargo, el resultado de &eacute;sta libertad no es la dispersi&oacute;n de los individuos, cada uno trabajando por su cuenta en el c&oacute;digo, sino la colaboraci&oacute;n entusiasta. De hecho, ser un cooperador competente es en si, una de las cualidades mas valoradas en el software libre. Dirigir uno de estos proyectos es abordar un tipo de cooperaci&oacute;n hipertrofiada, donde la habilidad de, no s&oacute;lo trabajar con otros, pero de ingeniar nuevas maneras de trabajar en conjunto, pueden producir beneficios tangibles para el desarrollo. Este libro intenta describir las t&eacute;cnicas con las que esto se puede lograr. No es de ninguna manera completo, pero al menos es un inicio.\r\n\r\nEl buen software libre es ya en si mismo un objetivo y espero que aquellos lectores que vengan buscando como lograrlo esten satisfechos con lo que van a encontrar aqu&iacute;. Pero m&aacute;s all&aacute; de esto, espero transmitir algo del doloroso placer de trabajar con un equipo motivado de desarrolladores de c&oacute;digo abierto y de la interacci&oacute;n con los usuarios en la maravillosa manera directa que el Open Source anima. Participar en un proyecto de software libre exitoso es divertido y en &uacute;ltima instancia es esto lo que mantiene a todo el sistema funcionando.",
        "content_short": "Los proyectos de software libre han permitido a una nueva cult&uacute;ra evolucionar, un ethos en el cual la libertad de hacer que el software haga cualquier cosa que deseamos sea ...",
        "publisher": " O'Reilly",
        "publisher_date": "2007",
        "pages": "201",
        "language": "spanish",
        "url_details": "https:\/\/www.etnassoft.com\/biblioteca\/producir-software-de-codigo-abierto-como-llevar-a-buen-puerto-un-proyecto-de-codigo-libre\/",
        "url_download": "https:\/\/openlibra.com\/book\/producir-software-de-codigo-abierto-como-llevar-a-buen-puerto-un-proyecto-de-codigo-libre",
        "cover": "http:\/\/collection.openlibra.com.s3.amazonaws.com\/covers\/2012\/04\/Producir-Software-de-Código-Abierto_Como-Llevar-a-Buen-Puerto-un-Proyecto-de-Código-Libre-350x459.jpg",
        "thumbnail": "http:\/\/collection.openlibra.com.s3.amazonaws.com\/covers\/2012\/04\/Producir-Software-de-Código-Abierto_Como-Llevar-a-Buen-Puerto-un-Proyecto-de-Código-Libre-110x153.jpg",
        "num_comments": "0",
        "categories": [
          {
            "category_id": 220,
            "name": "Programación",
            "nicename": "libros_programacion"
          },
          {
            "category_id": 232,
            "name": "Software Libre",
            "nicename": "libros_software_libre"
          }
        ],
        "tags": [
          {
            "tag_id": 288,
            "name": "desarrollo",
            "nicename": "desarrollo"
          },
          {
            "tag_id": 531,
            "name": "Gestión",
            "nicename": "gestion"
          },
          {
            "tag_id": 177,
            "name": "open source",
            "nicename": "open-source"
          },
          {
            "tag_id": 70,
            "name": "software libre",
            "nicename": "software_libre"
          }
        ]
      }
    ];
  }
}
