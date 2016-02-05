app.controller('StopWatchController', function ($scope, $interval) {
    $scope.displayCount = 0;
    $scope.count = function () {
        $scope.displayCount++;
    }

    $scope.inter = function () {
        $scope.timer = $interval($scope.count, 100);
        if ($scope.timer === $scope.userTimer) {
            $scope.stop();
        }
    }

    $scope.reset = function () {
        // $scope.timer = $interval($scope.count, 0);
        $scope.displayCount = 0;
    }

    $scope.stop = function () {
        $interval.cancel($scope.timer);
        $scope.displayCount = 0;
        $scope.userTimer = 0;
    }
//Needs Troubleshooting!!!
})