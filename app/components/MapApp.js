var React = require('react');
var apiCall = require('../utils/apiCall');
var Chart = require('react-google-charts').Chart;

var MapApp = React.createClass({

  getInitialState(){

    return {
      //loading starts off as true, set to false once 'API data' comes in
      loading: true,
      spentTotal: "",
      //defaults to showing deductible page first
      showing: 'deductible'
    };
  },


  componentWillMount(){
    var self = this;
    //API CALL STARTS HERE

    $.ajax({
      url: '/api/dummy',
      dataType: 'json',
      cache: false,
      success: function(data) {
        var spentTotal = 0;
      data.forEach(function(number){
        spentTotal += number.amountMemberPaid;
      })
      //calculations for percentages for progress bars
      var deductiblePerc = Math.floor((1000/6350)*100);
      var spentPerc = Math.floor((spentTotal/6350)*100);
      var deductibleMove = deductiblePerc + spentPerc;
      var leftUntilDeductible = 1000-spentTotal;

      //if user has spent more than 1000 deductible, it will show 0 for whats left
      if(leftUntilDeductible < 0){
        leftUntilDeductible = 0;
      }
      leftUntilDeductible = leftUntilDeductible.toFixed(2);

      //artbitrary numbers chosen for hsa widget
      var contribution = 2800;
      var contributionPerc = Math.floor((contribution/3500)*100);
      var leftUntilMax = 3500-2800;

      //setting state on component after all the data is calculated
      self.setState({leftUntilMax: leftUntilMax, contribution: contribution, contributionPerc: contributionPerc, deductiblePerc: deductiblePerc + '%', spentPerc: spentPerc + '%', deductMove: deductibleMove, spentTotal: spentTotal,leftUntilDeductible:leftUntilDeductible, loading: false})

      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
 


  },

  //widget changer
  change(){
    if(this.state.showing === 'hsa'){
      this.setState({showing: 'deductible'})
    }
    else{
      this.setState({showing: 'hsa'})
    }
  },


  render(){

      if(!this.state.loading && this.state.showing === 'deductible'){

        return (

          <div>
           
          <span className='headline'> You have </span><span className='bigNum'>${this.state.leftUntilDeductible}</span> <span className='headline'>left to spend until you reach your deductible.</span>
           <div style={{width: '50%'}}>
            <div style={{width: this.state.spentPerc, textAlign: 'right'}}>
            Current Spend: <span className='bigNum'>${this.state.spentTotal}</span>
           </div>
           </div>
           <div className="progress" style={{width: '80%'}}>
             <div className="progress-bar progress-bar-success" role="progressbar" style={{width: this.state.spentPerc}}>
             </div>
             <div className="progress-bar progress-bar-warning" role="progressbar" style={{width: this.state.deductiblePerc}}>
             </div>
           </div>
           <div style={{width: '80%'}}>
            <div style={{width: this.state.deductMove + '%', textAlign: 'right', float:'left' }}>
            Annual Deductible Set By Insurer: $1,000
           </div>
           <div style={{width: '100%', textAlign: 'right'}}>
            Out of Pocket Maximum: $6,350
           </div>
           </div>
           <div style={{clear: 'both'}}><button className='btn btn-info' onClick={this.change}>HSA Milestones</button></div>
          </div>

        );
      }
      else if(!this.state.loading && this.state.showing === 'hsa'){
        console.log(this.state.contributionPerc)
        return (

          <div>
           
          <span className='headline'> You can put in up to </span><span className='bigNum'>${this.state.leftUntilMax}</span> <span className='headline'>more before you hit your HSA max</span>
           <div style={{width: '50%'}}>
            <div style={{width: this.state.spentPerc, textAlign: 'right'}}>
            Contribution: <span className='bigNum'>${this.state.contribution}</span>
           </div>
           </div>
           <div className="progress" style={{width: '80%'}}>
             <div className="progress-bar progress-bar-success" role="progressbar" style={{width: this.state.contributionPerc + '%'}}>
             </div>
           </div>
           <div style={{width: '80%'}}>
           <div style={{width: '100%', textAlign: 'right'}}>
            Maximum Annual Contribution: $3,500
           </div>
           </div>
           <div style={{clear: 'both'}}><button className='btn btn-info' onClick={this.change}>Deductible Progress</button></div>
          </div>

        );
      }
      else{
        return null;
      }
    
  }

});

module.exports = MapApp;
