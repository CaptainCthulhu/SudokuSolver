using System;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using SodokuSolver.Models;
using SodokuSolver.Models.Requests;
using System.Threading;

namespace SodokuSolver.Services {
    public interface IGenerateGridService: IRequestHandler<GenerateGridRequest, string>
    {
            public Task<string> GenerateGrid(GenerateGridRequest request, CancellationToken cancellationToken);
    }

    public class GenerateGridService: IGenerateGridService
    {
        private readonly IMediator _mediator;
        private readonly SudokuContext _context;
        private readonly Random _random;

        public GenerateGridService(IMediator mediator, SudokuContext context)
        {
            _mediator = mediator;
            _context = context;
            _random = new Random();
        }

        public async Task<string> Handle(GenerateGridRequest request, CancellationToken cancellationToken)
        {
            return await GenerateGrid(request, cancellationToken);
        }

        public async Task<string> GenerateGrid(GenerateGridRequest request, CancellationToken cancellationToken)
        {
            var gridElements = await _context.GridElements.Where(x => x.GridId == request.GridId).ToListAsync<GridElement> ();

                for (int y = 0; y < 9; y++) {
                    for (int x = 0; x < 9; x++) {
                        if (gridElements.FirstOrDefault (gridelem => gridelem.XLocation == x && gridelem.YLocation == y) == null) {
                            gridElements.Add (new GridElement (_random.Next (), x, y, request.GridId, _random.Next (1, 9), _random.Next (3) - 1 == 1));
                        }
                    }
                }

                return JsonConvert.SerializeObject(gridElements);
        }
    }
}