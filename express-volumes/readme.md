docker run -d -p 3000:80
-v feedback:/app/feedback
-v "C:\Users\soqee\Desktop\repos\docker-practice\docker-k8s-playground\express-volumes:/app"
-v /app/node_modules
--name fbcont
fbimg
