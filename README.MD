# PR1 - Weather API App 🌦️

Este proyecto es una aplicación de prueba desarrollada como parte del estudio de **AWS, CI/CD y Programación Distribuida**.  

## 🚀 Tecnologías utilizadas  
- **Frontend:** React con Vite.  
- **Backend:** Node.js con Express.  
- **Infraestructura:** AWS EC2, Docker, GitHub Actions (CI/CD).  
- **API externa:** [Open-Meteo](https://open-meteo.com/) para datos climáticos gratuitos.  

## 📂 Estructura del proyecto  
PR1/
├── backend/ # API en Node.js que consume datos de Open-Meteo
├── frontend/ # Interfaz React que muestra información del clima
├── .github/ # Workflows para CI/CD con GitHub Action

## 🔧 Despliegue automático  
Cada vez que se hace push a la rama `test`:  
1. Se construyen imágenes Docker del backend y frontend.  
2. Se suben automáticamente a **DockerHub**.  
3. Se despliegan en una instancia **AWS EC2** usando `sudo docker`.  

## 🌐 URLs en producción  
- **Frontend:** `http://<EC2_PUBLIC_IP>/`  
- **Backend (API):** `http://<EC2_PUBLIC_IP>:5000/weather`
