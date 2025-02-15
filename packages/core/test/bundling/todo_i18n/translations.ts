/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {loadTranslations} from '@angular/localize/run_time';

export const translations = {
  'What needs to be done?': `Qu'y a-t-il à faire ?`,
  '{$START_HEADING_LEVEL1}todos{$CLOSE_HEADING_LEVEL1}{$TAG_INPUT}':
      '{$START_HEADING_LEVEL1}liste de tâches{$CLOSE_HEADING_LEVEL1}{$TAG_INPUT}',
  '{VAR_PLURAL, plural, =1 {item left} other {items left}}':
      '{VAR_PLURAL, plural, =1 {tâche restante} other {tâches restantes}}',
  '{$START_TAG_STRONG}{$INTERPOLATION}{$CLOSE_TAG_STRONG}{$ICU}':
      '{$START_TAG_STRONG}{$INTERPOLATION}{$CLOSE_TAG_STRONG} {$ICU}',
  ' Clear completed ': ' Effacer terminés ',
  'Demonstrate Components': 'Démontrer les components',
  'Demonstrate Structural Directives': 'Démontrer les directives structurelles',
  'Demonstrate {$value}': 'Démontrer {$value}',
  'Demonstrate zoneless change detection': 'Démontrer la détection des changements sans zonejs',
  'Demonstrate internationalization': `Démontrer l'internationalisation`
};

loadTranslations(translations);
