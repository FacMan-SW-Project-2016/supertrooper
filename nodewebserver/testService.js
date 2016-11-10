var http = require('http');
http
    .createServer(
        function(req, res) {
            res.writeHead(200, {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            });
            res
                .end('{		"success":true,		"results":[		{		"ID":1,		"type":"waste",		"text":"Schmutz"		},		{		"ID":2,		"type":"technical",		"text":"Technisch"		},		{		"ID":3,		"type":"defective",		"text":"Defekt"		},		{		"ID":4,		"type":"vandalism",		"text":"Vandalismus"		},		{		"ID":5,		"type":"other",		"text":"Sonstiges"		}		]		}');
        }).listen(8124, "localhost");
console.log('Server running at //localhost:8124/');
