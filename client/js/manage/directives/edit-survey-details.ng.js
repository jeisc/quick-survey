angular.module('quick-survey').directive('editSurveyDetails', function () {
  return {
    restrict: 'A',
    scope: {
      survey: '=',
      form: '='
    },
    controller: function ($scope) {
      $scope.save = function(survey) {
        $scope.form.$pristine = true;
        Surveys.update(survey._id,
          { $set: {
              name: survey.name,
              description: survey.description,
              active: survey.active,
              endNote: survey.endNote,
              require_sign_in: survey.require_sign_in,
              canBeShared: survey.canBeShared
          } })
      };
    },
    templateUrl: 'client/js/manage/directives/edit-survey-details.ng.html',
  };
});
