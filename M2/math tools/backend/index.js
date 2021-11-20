const http = require("http")
const registros = require("./helpers/files")
const { calcularAreaCilindro, calcularAreaEsfera, calcularAreaCubo } = require("./helpers/areas")

const port = 8080
const ip = "localhost" //localhost = 127.0.0.1; dispositivos conectados a la misma red wifi, necesitamos ver la ip de nuestro en la LAN inalambrica (192.168.1.184)

http.createServer(function (request, response) {
    const incomingUrl = new URL(request.url, `http://${request.headers.host}`)
    response.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': "*" })

    let r, h, area, registrosJSON

    switch (incomingUrl.pathname) {
        case '/cilindro':
            r = (incomingUrl.searchParams.get('r'))
            h = (incomingUrl.searchParams.get('h'))
            area = calcularAreaCilindro(r, h)
            if (area) {
                registrosJSON = JSON.parse(registros.leerRegistro("registroCilindro"))
                console.log(registrosJSON)
                registrosJSON.push({ area, "date": new Date() })
                registros.guardarRegistro(JSON.stringify(registrosJSON), "registroCilindro")
                response.write(JSON.stringify({ area }))
            } else {
                response.write("error")
            }
            break;
        case '/esfera':
            r = (incomingUrl.searchParams.get('r'))
            area = calcularAreaEsfera(r)
            if (area) {
                registrosJSON = JSON.parse(registros.leerRegistro("registroEsfera"))
                console.log(registrosJSON)
                registrosJSON.push({ area, "date": new Date() })
                registros.guardarRegistro(JSON.stringify(registrosJSON), "registroEsfera")
                response.write(JSON.stringify({ area }))
            } else {
                response.write("error")
            }
            break;
        case '/cubo':
            h = (incomingUrl.searchParams.get('h'))
            area = calcularAreaCubo(h)
            if (area) {
                registrosJSON = JSON.parse(registros.leerRegistro("registroCubo"))
                console.log(registrosJSON)
                registrosJSON.push({ area, "date": new Date() })
                registros.guardarRegistro(JSON.stringify(registrosJSON), "registroCubo")
                response.write(JSON.stringify({ area }))
            } else {
                response.write("error")
            }
            break;
        case '/consultarRegistrosCilindro':
            response.write(registros.leerRegistro("registroCilindro"))
            break;
        case '/consultarRegistrosEsfera':
            response.write(registros.leerRegistro("registroEsfera"))
            break;
        case '/consultarRegistrosCubo':
            response.write(registros.leerRegistro("registroCubo"))
            break;
        default:
            response.write("Esa ruta no existe")
    }

    response.end();
}).listen(port, ip, () => {
    console.log(`Se inicio el server en la direccion -> http://${ip}:${port}`)
})

