Router.route('/writeReview', 'writeReview');

Template.writeReview.events({
    //4
    "click #cancel": function (e, tmpl) {
        $('#제목').val('');
        $('#후기').val('');
    },
    "click #write": function (e, tmpl) {
        // if (!Meteor.user()) {
        //     return alert('로그인을 해주세요!!!');
        // }
        var obj = {};
        obj.작성자 = Meteor.user().emails[0].address;
        obj.제목 = $('#제목').val();
        obj.후기 = $('#후기').val();
        if (obj.후기.length <= 0 || obj.제목.length <= 0) {
            //error
            return alert('후기와 제목을 모두 입력해주세요!!');
        }

        //글번호를 알아냅시다. 글번호 === 전체 글 갯수 + 1
        //글번호 max값 + 1로 수정

        Meteor.call('writeReview', obj, function (err, rslt) {
            if (err) {
                //실패시 화면에서 해야 할 액션
                alert(err);
            }
            else {
                //성공시 화면에서 해야 할 액션
                $('#작성자').val('');
                $('#제목').val('');
                $('#본문').val('');
                alert("작성완료!");
                Router.go('reviewList');
            }
        });
    }
});

