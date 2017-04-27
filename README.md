Ansible Multi-Environment Provisioning
======================================

Provision all Environments the same way, from a single ansible playbook source.

Dependencies
------------

- [ansible](http://www.ansible.com/)
- [packer](https://www.packer.io/)
- [vagrant](https://www.vagrantup.com/)

Build Demo-Application
-----------------------

```
./mvnw clean package
```

Provisioning Docker Container
-----------------------------

```
cd .packer

# Docker Base-Image
packer build base-image.js

# Docker Tomcat-Image
packer build tomcat-image.js

# Docker DemoApp-Image
packer build deploy-application.js

```

Provisioning  Vagrant Images
----------------------------

```
# first vagrant up that creates the environment, provisioning is run
vagrant up

# when provision on a running environment
vagrant provisioning
```

Provisioning Bare-Metal
-----------------------

```
cd provisioning
ansible-playbook full-image.yml -i profiles/profileA/hosts
```
