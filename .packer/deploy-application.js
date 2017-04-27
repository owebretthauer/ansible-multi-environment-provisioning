{
  "variables": {
    "ansible_host": "default",
    "ansible_connection": "docker"
  },
  "builders": [
    {
      "type": "docker",
      "image": "tomcat-base:1.0",
      "commit": "true",
      "pull": false,
      "run_command": [
        "-d",
        "-i",
        "-t",
        "--name",
        "{{user `ansible_host`}}",
        "{{.Image}}",
        "/bin/bash"
      ]
    }
  ],
  "provisioners": [
    {
      "type": "ansible",
      "user": "root",
      "playbook_file": "../provisioning/deploy-application.yml",
      "groups": [ "servers" ],
      "extra_arguments": [
          "--extra-vars",
          "ansible_host={{user `ansible_host`}} ansible_connection={{user `ansible_connection`}}"
      ]
    }
  ],
  "post-processors": [
    [
      {
        "type": "docker-tag",
        "repository": "demo",
        "tag": "1.0"
      }
    ]
  ]
}
