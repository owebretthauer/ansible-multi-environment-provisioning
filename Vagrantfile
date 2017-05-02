# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|

  config.vm.define "tomcat" do |vm1|
      vm1.vm.box = "debian/jessie64"
      vm1.vm.network "public_network", :bridge => 'enp3s0', ip: "192.168.178.50"

      vm1.vm.provider "virtualbox" do |vb|
         vb.memory = "512"
      end
  end


#  config.vm.define "webserver" do |vm2|
#      vm2.vm.box = "debian/jessie64"
#      vm2.vm.network "public_network", :bridge => 'enp3s0', ip: "192.168.178.50"

#      vm2.vm.provider "virtualbox" do |vb|
#         vb.memory = "512"
#      end
#  end

#  config.vm.define "postgresql" do |vm3|
#      vm3.vm.box = "debian/jessie64"
#      vm3.vm.network "public_network", :bridge => 'enp3s0', ip: "192.168.178.50"

#      vm3.vm.provider "virtualbox" do |vb|
#         vb.memory = "512"
#      end
#  end

#  config.vm.define "rabbitmq" do |vm3|
#      vm4.vm.box = "debian/jessie64"
#      vm4.vm.network "public_network", :bridge => 'enp3s0', ip: "192.168.178.50"

#      vm4.vm.provider "virtualbox" do |vb|
#         vb.memory = "512"
#      end
#  end


  config.vm.provision :ansible do |ansible|
    ansible.playbook = "provisioning/full-image.yml"
    ansible.groups = {
        "servers" => ["tomcat"]
    }
    ansible.raw_arguments = ["-u vagrant"]
  end

end
