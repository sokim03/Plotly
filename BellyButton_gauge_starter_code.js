// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 

    // Create a variable that filters the samples for the object with the desired sample number.

    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var metadataArray = data.metadata.filter(sampleObj => sampleObj.id == sample);

    // Create a variable that holds the first sample in the array.
  

    // 2. Create a variable that holds the first sample in the metadata array.
    var metadata = metadataArray[0];

    // Create variables that hold the otu_ids, otu_labels, and sample_values.


    // 3. Create a variable that holds the washing frequency.
    var frequency = parseFloat(metadata.frequency);

    // Create the yticks for the bar chart.

    // Use Plotly to plot the bar data and layout.
    
    // Use Plotly to plot the bubble data and layout.
   
    // 4. Create the trace for the gauge chart.
    var gaugeData = [{
      value: frequency,
         type: "indicator",
         mode: "gauge+number",
         title: {text: "<b> Belly Button Washing Frequency </b> <br></br> Scrubs Per Week"},
         gauge: {
           axis: {range: [null,10], dtick: "2"},
   
           bar: {color: "black"},
           steps:[
             {range: [0, 2], color: "red"},
             {range: [2, 4], color: "orange"},
             {range: [4, 6], color: "yellow"},
             {range: [6, 8], color: "lightgreen"},
             {range: [8, 10], color: "green"}
           ],
           dtick: 2
         }
    }];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
      automargin: true
    };

    var gaugeLayout = {
      width: 500,
      height: 425,
      margin: {t:0, b:0}
    };


    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout);
  });
}
