
# Demo Apps
This a collection of simple applications with k8 configs to explore the k8 ecosystem. The application in each language does the same thing. The app will store the hostname used for each request it fulfils. Then it will display a count of each request by hostname.

## Requirements

### Minikube
Before you can run deploy these applications locally you should install Minikube: https://minikube.sigs.k8s.io/docs/start and related dependencies.

### kubectl
Install the k8 command line tool: https://kubernetes.io/docs/tasks/tools/

### Flex Metal Cloud
To deploy on an OpenStack Cloud. Sign up for a new account and deploy a free personal cloud by visiting Flex Metal Central: https://central.inmoionhosting.com/flex-metal

## Deploying

### Deploying to Minikube

PHP Application

`kubectl apply -f apps/php/k8/base/namespace.yaml && kubectl apply -f apps/php/k8/minikube && kubectl apply -f apps/php/k8/base`

Node JS Application

`kubectl apply -f apps/node/k8/base/namespace.yaml && kubectl apply -f apps/node/k8/minikube && kubectl apply -f apps/node/k8/base`

Python Application

`kubectl apply -f apps/python/k8/base/namespace.yaml && kubectl apply -f apps/python/k8/minikube && kubectl apply -f apps/python/k8/base`

### Deploying to Flex Metal Cloud
`kubectl apply -f apps/php/k8/base/namespace.yaml && kubectl apply -f apps/php/k8/openstack && kubectl apply -f apps/php/k8/base`

## Updating Application Code
### Forking
The project will automatically try to create images when you make changes to the master branch. In order for this to work correctly,
you'll need to save a personal access token as a repository secret. The token should be named GH_PAT and should have the `write:packages` scope.

Secondly, you'll need to update the image urls defined in the k8 folder for each application to point to your new package paths.

### Making Chages
Each applications has a docker-compose file that will allow you to running containers. `docker-compose up` from the app/`language` folder and the stack will be created from your local files.
