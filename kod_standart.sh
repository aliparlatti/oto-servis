#!/bin/bash
echo "Kod Standartı kontrol ediliyor...";
fin run phpcs --standard=Drupal --extensions=php,module,inc,install,test,profile,theme,info,txt,md,yml,scss web/themes/custom;
echo "Kod Standartı düzeltiliyor...";
fin run phpcbf --standard=Drupal --extensions=php,module,inc,install,test,profile,theme,info,txt,md,yml,scss web/themes/custom