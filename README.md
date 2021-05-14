# FORM APP - ANGULAR

#### **1.  Docker Image**
Se debe contruir la imagen: docker build -t ernestoagc/task-app:0.1 .

o descargar la version del docker hub
docker pull ernestoagc/form-app:0.1

#### **2. Creacion del contenedor docker** 
Ejecutar el docmando: docker run -p 8082:80 -d --network task-net --name=app-task ernestoagc/task-app:0.1
 
![](https://i.imgur.com/RAc13O2.jpg)


#### **3. Ingresando al sistema**
Debemos ingresar la url http://localhost:8082/task
![](https://i.imgur.com/qy6sgY1.jpg)
