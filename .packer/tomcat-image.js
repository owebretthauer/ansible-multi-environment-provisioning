{
  "variables": {
    "ansible_host": "default",
    "ansible_connection": "docker"
  },
  "builders": [
    {
      "type": "docker",
      "image": "base:1.0",
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
      ],
      "changes": [
          "ENV CATALINA_HOME /usr/share/tomcat8",
          "ENV CATALINA_BASE /var/lib/tomcat8",
          "EXPOSE 8080",
          "ENTRYPOINT $CATALINA_HOME/bin/catalina.sh run"
      ]
    }
  ],
  "provisioners": [
    {
      "type": "ansible",
      "user": "root",
      "playbook_file": "../provisioning/tomcat-image.yml",
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
        "repository": "tomcat-base",
        "tag": "1.0"
      }
    ]
  ]
}
