using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;
using System;
using Newtonsoft.Json;

namespace sodokusolver.Controllers
{
    public class GridController : Controller
    {
        Random _random;       
        public GridController(){
            _random = new Random();
            
        }

        [Route("/GridController/GetElement")]
        public string GetElement(int gameId, int xLocation, int yLocation)  
        {
            //Build magic here to return an object
            var gridElement = new Models.GridElement();
            return JsonConvert.SerializeObject(gridElement);
        }              
        
    }
}