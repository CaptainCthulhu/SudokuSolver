using System;
using System.Linq;
using System.Text.Encodings.Web;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using MediatR;
using SodokuSolver.Models;
using SodokuSolver.Models.Requests;

namespace SodokuSolver.Controllers {
    public class GridController : Controller {
        SudokuContext _context;
        Random _random;
        Mediator _mediator;
        public GridController (SudokuContext context, Mediator mediator) {
            _context = context;
            _mediator = mediator;
            _random = new Random ();

        }

        [Route ("/GridController/GetGrid")]
        public async Task<string> GetGrid (int gridId) 
        {
           var result = await _mediator.Send(new GenerateGridRequest(gridId));
           return result.ToString();
        }

        [Route ("/GridController/GetElement")]
        public async Task<string> GetElement (int gridId, int xLocation, int yLocation) {
            //Build magic here to return an object
            var gridElement = await _context.GridElements.Where (
                x => x.GridId == gridId &&
                x.XLocation == xLocation &&
                x.YLocation == yLocation).FirstOrDefaultAsync<GridElement> ();

            if (gridElement == null) {
                gridElement = new GridElement (_random.Next (), xLocation, yLocation, gridId, 0, _random.Next (3) - 1 == 1);
            }

            return JsonConvert.SerializeObject (gridElement);
        }

    }
}