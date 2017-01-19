# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|

  config.vm.define "vm1" do |vm1|
      vm1.vm.box = "debian/jessie64"
      vm1.vm.network "public_network", :bridge => 'enp3s0'

      vm1.vm.provider "virtualbox" do |vb|
         vb.memory = "512"
      end
  end

  config.vm.define "vm2" do |vm2|
      vm2.vm.box = "debian/jessie64"
      vm2.vm.network "public_network", :bridge => 'enp3s0'

      vm2.vm.provider "virtualbox" do |vb|
         vb.memory = "512"
      end
  end

  config.vm.define "vm3" do |vm3|
      vm3.vm.box = "debian/jessie64"
      vm3.vm.network "public_network", :bridge => 'enp3s0'

      vm3.vm.provider "virtualbox" do |vb|
         vb.memory = "512"
      end
  end

  config.vm.provision :ansible do |ansible|
    ansible.playbook = "provisioning/playbook.yml"
    ansible.groups = {
        "servers" => ["vm1", "vm2", "vm3"]
    }
  end

end
