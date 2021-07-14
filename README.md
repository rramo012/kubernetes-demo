# Deploying to Minikube
kubectl apply -f apps/php/k8/base/namespace.yaml && kubectl apply -f apps/php/k8/minikube && kubectl apply -f apps/php/k8/base
kubectl apply -f apps/node/k8/base/namespace.yaml && kubectl apply -f apps/node/k8/minikube && kubectl apply -f apps/node/k8/base
kubectl apply -f apps/python/k8/base/namespace.yaml && kubectl apply -f apps/python/k8/minikube && kubectl apply -f apps/python/k8/base

# Deploying to OpenStack
kubectl apply -f apps/php/k8/base/namespace.yaml && kubectl apply -f apps/php/k8/openstack && kubectl apply -f apps/php/k8/base