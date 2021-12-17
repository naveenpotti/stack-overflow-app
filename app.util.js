export function FormatApiresult(data= []) {
    let result =[];
    if(data && data.length>0){
        data.map(x=>{
            result.push({
                id: x.question_id,
                score: x.score,
                noOfViews: x.view_count,
                tags: x.tags,
                answers: x.answer_count,
                asked:0,
                link: x.link,
                title: x.title
            });
        });
    }
    return result;
}